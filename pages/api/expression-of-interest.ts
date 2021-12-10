// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { withSentry } from "@sentry/nextjs";
import { google } from "googleapis";

export type ExpressOfInterestRequestPayload = {
  email: string;
  interest_reason: string;
  deployment_env: string;
};

export type ExpressOfInterestResponsePayload = {
  message: string;
};

const googleSheets = google.sheets({
  version: "v4",
  auth: new google.auth.JWT(
    process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    undefined,
    (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, "\n"),
    ["https://www.googleapis.com/auth/spreadsheets"]
  ),
});

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExpressOfInterestResponsePayload>
) {
  if (req.method !== "POST") {
    res.status(405).json({
      message: "Method Not Allowed!",
    });
    return;
  }

  const body: ExpressOfInterestRequestPayload = JSON.parse(req.body);
  if (
    body.email == null ||
    body.email === "" ||
    body.interest_reason == null ||
    body.interest_reason === "" ||
    body.deployment_env == null ||
    body.deployment_env === ""
  ) {
    res.status(400).json({
      message: "Bad Request: Invalid request data!",
    });
    return;
  }

  // Store entry to Google Sheets
  try {
    await googleSheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: "Results",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        range: "Results",
        majorDimension: "ROWS",
        values: [[body.email, body.interest_reason, body.deployment_env, new Date().toISOString()]],
      },
    });
  } catch (err) {
    console.error(`Error saving expression of interest:`, err);
    res.status(500).json({
      message:
        "Internal Server Error: An error occurred saving your email!",
    });
    return;
  }

  res.status(200).json({
    message: "Ok!",
  });
}

export default withSentry(handler);
