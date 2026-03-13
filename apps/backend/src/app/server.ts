import { createApp } from "./app";
import { getMailerStatus, verifyMailer } from "../shared/mailer";

const port = Number(process.env.PORT ?? 4000);
const app = createApp();

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
  const status = getMailerStatus();
  if (!status.enabled) {
    console.log("MAIL disabled (set GMAIL_USER + GMAIL_APP_PASSWORD or MAIL_ENABLED=1).");
  } else {
    console.log(`MAIL enabled (${status.reason}) via ${status.host}:${status.port} secure=${status.secure} from="${status.from}"`);
    verifyMailer()
      .then(() => console.log("MAIL verified OK."))
      .catch((error) => console.error("MAIL verify failed:", error));
  }
});
