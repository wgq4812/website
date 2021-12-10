// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { withSentry } from "@sentry/nextjs";

export type SlackInviteRequestPayload = {
  email: string;
};

export type SlackInviteResponsePayload = {
  message: string;
};

// Follow the guide to setup Slack authentication: https://github.com/outsideris/slack-invite-automation#oauth-tokens

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SlackInviteResponsePayload>
) {
  if (req.method !== "POST") {
    res.status(405).json({
      message: "Method Not Allowed!",
    });
    return;
  }

  const body: SlackInviteRequestPayload = JSON.parse(req.body);
  if (body.email == null || body.email === "") {
    res.status(400).json({
      message: "Bad Request: Invalid request data!",
    });
    return;
  }

  try {
    const resp = await fetch(
      `https://slack.com/api/users.admin.invite?token=${encodeURIComponent(
        process.env.SLACK_API_TOKEN || ""
      )}&email=${encodeURIComponent(body.email)}`
    );
    if (!resp.ok) {
      console.error(`Error inviting user to Slack: '${await resp.text()}'`);
      res.status(500).json({
        message: "Internal server error: Slack API responded with an error!",
      });
      return;
    }
    const respBody = await resp.json();
    if (respBody.ok !== "true") {
      if (respBody.error === "already_in_team") {
        res.status(500).json({
          message: "User is already in the team!",
        });
        return;
      } else if (respBody.error === "already_in_team_invited_user") {
        res.status(500).json({
          message: "User has already been invited. Please check your emails!",
        });
        return;
      } else {
        console.error(`Slack API returned error: '${respBody.error}'`);
        res.status(500).json({
          message: "Internal server error: Slack API responded with an error!",
        });
        return;
      }
    }
  } catch (err) {
    console.error(`Error inviting user to Slack:`, err);
    res.status(500).json({
      message: "Internal server error: Error communicating with the Slack API!",
    });
    return;
  }

  res.status(200).json({
    message: "Ok!",
  });
}

export default withSentry(handler);
