declare global {
    namespace NodeJS {
      interface ProcessEnv {
          GOOGLE_SHEETS_SPREADSHEET_ID: string;
          GOOGLE_SHEETS_CLIENT_EMAIL: string;
          GOOGLE_SHEETS_PRIVATE_KEY: string;
  
          SLACK_API_TOKEN: string;
  
          SENTRY_ORG: string;
          SENTRY_PROJECT: string;
          SENTRY_AUTH_TOKEN: string;
          NEXT_PUBLIC_SENTRY_DSN: string;
      }
    }
  }
  