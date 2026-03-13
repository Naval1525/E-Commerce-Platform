import nodemailer from "nodemailer";

type MailConfig = {
  enabled: boolean;
  reason: "MAIL_ENABLED" | "CREDENTIALS_PRESENT" | "DISABLED";
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
};

function getMailConfig(): MailConfig {
  const enabled = (process.env.MAIL_ENABLED ?? "").trim() === "1";

  const gmailUser = (process.env.GMAIL_USER ?? "").trim();
  const gmailPass = (process.env.GMAIL_APP_PASSWORD ?? "").trim();

  const user = ((process.env.MAIL_USER ?? "").trim() || gmailUser).trim();
  const pass = ((process.env.MAIL_PASS ?? "").trim() || gmailPass).trim();

  const host = ((process.env.MAIL_HOST ?? "").trim() || (user ? "smtp.gmail.com" : "")).trim();
  const port = Number.parseInt((process.env.MAIL_PORT ?? "").trim() || "465", 10);
  const secure = (process.env.MAIL_SECURE ?? "").trim()
    ? (process.env.MAIL_SECURE ?? "").trim() === "1"
    : port === 465;

  const from = ((process.env.MAIL_FROM ?? "").trim() || user).trim();

  const hasCreds = Boolean(host && user && pass && from);

  return {
    enabled: enabled || hasCreds,
    reason: enabled ? "MAIL_ENABLED" : hasCreds ? "CREDENTIALS_PRESENT" : "DISABLED",
    host,
    port: Number.isFinite(port) ? port : 465,
    secure,
    user,
    pass,
    from
  };
}

let cachedTransporter: nodemailer.Transporter | null = null;
let cachedConfigKey: string | null = null;

function getTransporter(config: MailConfig) {
  const key = `${config.host}|${config.port}|${config.secure}|${config.user}|${config.from}`;
  if (cachedTransporter && cachedConfigKey === key) return cachedTransporter;

  cachedTransporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass
    }
  });
  cachedConfigKey = key;
  return cachedTransporter;
}

export async function sendMail(input: { to: string; subject: string; text: string; html?: string }) {
  const config = getMailConfig();
  if (!config.enabled) {
    if ((process.env.MAIL_DEBUG ?? "").trim() === "1") {
      console.warn("MAIL disabled; skipping send:", { to: input.to, subject: input.subject });
    }
    return { skipped: true as const };
  }

  const transporter = getTransporter(config);
  const result = await transporter.sendMail({
    from: config.from,
    to: input.to,
    subject: input.subject,
    text: input.text,
    html: input.html
  });

  return { skipped: false as const, messageId: result.messageId };
}

export function getMailerStatus() {
  const config = getMailConfig();
  return {
    enabled: config.enabled,
    reason: config.reason,
    host: config.host,
    port: config.port,
    secure: config.secure,
    from: config.from,
    user: config.user ? `${config.user.slice(0, 3)}***@${config.user.split("@")[1] ?? ""}` : ""
  };
}

export async function verifyMailer() {
  const config = getMailConfig();
  if (!config.enabled) return { enabled: false as const, verified: false as const, reason: config.reason };

  const transporter = getTransporter(config);
  await transporter.verify();
  return { enabled: true as const, verified: true as const, reason: config.reason };
}

export async function sendSignupEmail(user: { name: string; email: string }) {
  return sendMail({
    to: user.email,
    subject: "Welcome to Flipkart Clone",
    text: `Hi ${user.name},\n\nYour account has been created successfully.\n\nHappy shopping!\n\n— Flipkart Clone`,
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5;color:#0f172a">
        <div style="max-width:560px;margin:0 auto;border:1px solid #e2e8f0;border-radius:14px;overflow:hidden">
          <div style="background:#ffe500;padding:18px 20px">
            <div style="font-weight:900;font-style:italic;font-size:20px;color:#2874f0">flipkart</div>
          </div>
          <div style="padding:18px 20px">
            <h2 style="margin:0 0 10px;font-size:18px">Welcome, ${user.name}!</h2>
            <p style="margin:0 0 10px;color:#334155">Your account has been created successfully.</p>
            <div style="margin:14px 0;padding:12px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px">
              <div style="font-size:12px;color:#64748b;margin-bottom:4px">Signed up with</div>
              <div style="font-weight:700">${user.email}</div>
            </div>
            <p style="margin:0;color:#334155">Happy shopping!</p>
            <p style="margin:16px 0 0;color:#64748b;font-size:12px">This is an automated message from Flipkart Clone.</p>
          </div>
        </div>
      </div>
    `.trim()
  });
}

export async function sendLoginEmail(user: { name: string; email: string }) {
  const when = new Date().toLocaleString("en-IN", { timeZoneName: "short" });
  return sendMail({
    to: user.email,
    subject: "Login alert",
    text:
      `Hi ${user.name},\n\n` +
      `We noticed a login to your account.\n` +
      `Time: ${when}\n\n` +
      `If this wasn't you, please change your password.\n\n` +
      `— Flipkart Clone`,
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5;color:#0f172a">
        <div style="max-width:560px;margin:0 auto;border:1px solid #e2e8f0;border-radius:14px;overflow:hidden">
          <div style="background:#0b3db8;padding:18px 20px">
            <div style="font-weight:900;font-style:italic;font-size:20px;color:#ffe500">flipkart</div>
          </div>
          <div style="padding:18px 20px">
            <h2 style="margin:0 0 10px;font-size:18px">Login alert</h2>
            <p style="margin:0 0 10px;color:#334155">We noticed a login to your account.</p>
            <div style="margin:14px 0;padding:12px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px">
              <div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap">
                <div>
                  <div style="font-size:12px;color:#64748b">Account</div>
                  <div style="font-weight:700">${user.email}</div>
                </div>
                <div>
                  <div style="font-size:12px;color:#64748b">Time</div>
                  <div style="font-weight:700">${when}</div>
                </div>
              </div>
            </div>
            <p style="margin:0;color:#334155">If this wasn’t you, please change your password.</p>
            <p style="margin:16px 0 0;color:#64748b;font-size:12px">This is an automated message from Flipkart Clone.</p>
          </div>
        </div>
      </div>
    `.trim()
  });
}

export async function sendOrderPlacedEmail(input: {
  user: { name: string; email: string };
  order: { id: string; orderNumber: string; totalAmount: number; items: Array<{ productNameSnapshot: string; quantity: number }> };
}) {
  const when = new Date().toLocaleString("en-IN", { timeZoneName: "short" });
  const lines = input.order.items
    .slice(0, 12)
    .map((item) => `- ${item.productNameSnapshot} × ${item.quantity}`)
    .join("\n");

  const itemsHtml = input.order.items
    .slice(0, 12)
    .map(
      (item) => `
        <tr>
          <td style="padding:10px 0;border-top:1px solid #e2e8f0;color:#334155">${item.productNameSnapshot}</td>
          <td style="padding:10px 0;border-top:1px solid #e2e8f0;text-align:right;font-weight:700;color:#0f172a">× ${item.quantity}</td>
        </tr>
      `.trim()
    )
    .join("");

  return sendMail({
    to: input.user.email,
    subject: `Order confirmed (${input.order.orderNumber})`,
    text:
      `Hi ${input.user.name},\n\n` +
      `Your order has been placed successfully.\n\n` +
      `Order: ${input.order.orderNumber}\n` +
      `Time: ${when}\n` +
      `Total: ₹${input.order.totalAmount}\n\n` +
      `Items:\n${lines}\n\n` +
      `Thank you for shopping with us!\n\n` +
      `— Flipkart Clone`,
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5;color:#0f172a">
        <div style="max-width:560px;margin:0 auto;border:1px solid #e2e8f0;border-radius:14px;overflow:hidden">
          <div style="background:#ffe500;padding:18px 20px">
            <div style="font-weight:900;font-style:italic;font-size:20px;color:#2874f0">flipkart</div>
          </div>
          <div style="padding:18px 20px">
            <h2 style="margin:0 0 10px;font-size:18px">Order confirmed</h2>
            <p style="margin:0 0 12px;color:#334155">Thanks ${input.user.name}! Your order has been placed successfully.</p>

            <div style="display:flex;gap:12px;flex-wrap:wrap;margin:14px 0">
              <div style="flex:1;min-width:220px;padding:12px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px">
                <div style="font-size:12px;color:#64748b;margin-bottom:4px">Order ID</div>
                <div style="font-weight:800">${input.order.orderNumber}</div>
              </div>
              <div style="flex:1;min-width:220px;padding:12px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px">
                <div style="font-size:12px;color:#64748b;margin-bottom:4px">Total</div>
                <div style="font-weight:800">₹${input.order.totalAmount}</div>
              </div>
            </div>

            <div style="font-size:12px;color:#64748b;margin:0 0 6px">Placed at</div>
            <div style="font-weight:700;margin:0 0 12px">${when}</div>

            <div style="margin-top:14px;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden">
              <div style="background:#f8fafc;padding:10px 14px;font-weight:800">Items</div>
              <div style="padding:0 14px">
                <table style="width:100%;border-collapse:collapse">
                  <tbody>
                    ${itemsHtml}
                  </tbody>
                </table>
              </div>
            </div>

            <p style="margin:16px 0 0;color:#334155">Thank you for shopping with us!</p>
            <p style="margin:16px 0 0;color:#64748b;font-size:12px">This is an automated message from Flipkart Clone.</p>
          </div>
        </div>
      </div>
    `.trim()
  });
}
