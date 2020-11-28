const querystring = require('querystring');
const fetch = require('node-fetch');
const FormData = require('form-data');

// Follow the guide to setup Slack authentication: https://github.com/outsideris/slack-invite-automation#oauth-tokens

exports.handler = async function (event, context) {
    if (event.httpMethod != 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Method not allowed" })
        };
    }

    let body = querystring.parse(event.body)
    if (body.email === undefined || body.email === "") {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Email not specified" })
        };
    }

    console.log(`Inviting user '${body.email}'`)

    let res = await fetch(`https://slack.com/api/users.admin.invite?token=${process.env.SLACK_TOKEN}&email=${body.email}`)
    let data = await res.json()

    if (data.ok) {
        return {
            statusCode: 303,
            headers: {
                Location: "/",
            },
            body: JSON.stringify({ message: "Redirecting back to home. Please wait..." })
        };
    } else {
        console.log("Slack error:", data);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Error communicating with slack" })
        };
    }
}