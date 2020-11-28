const querystring = require('querystring')
const fetch = require('node-fetch')

// Follow the guide to setup Slack authentication: https://github.com/outsideris/slack-invite-automation#oauth-tokens

exports.handler = async function (event, _context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  const body = querystring.parse(event.body)
  if (body.email === undefined || body.email === '') {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Email not specified' }),
    }
  }

  console.log(`Inviting user '${body.email}'`)

  const res = await fetch(
    `https://slack.com/api/users.admin.invite?token=${process.env.SLACK_TOKEN}&email=${body.email}`
  )
  const data = await res.json()

  if (data.ok) {
    return {
      statusCode: 303,
      headers: {
        Location: '/',
      },
      body: JSON.stringify({
        message: 'Redirecting back to home. Please wait...',
      }),
    }
  } else {
    console.log('Slack error:', data)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error communicating with slack' }),
    }
  }
}
