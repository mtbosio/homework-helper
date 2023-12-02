import sanitizeHtml from "sanitize-html";
import dotenv from "dotenv";
import { OAuth2Client } from "google-auth-library";

dotenv.config();
const authClient = new OAuth2Client();

export default function validateAuth(authorizationString) {
  let authStrings = sanitizeHtml(authorizationString).split(" ");
  if (authStrings.length != 2 || authStrings[0] != "Bearer") {
    return undefined;
  }

  return authClient
    .verifyIdToken({
      idToken: authStrings[1],
      audience: process.env.OAUTH_CLIENT_ID,
    })
    .then((ticket) => {
      return { name: ticket.getPayload()["name"] };
    })
    .catch((err) => {
      console.log(err);
      return undefined;
    });
}
