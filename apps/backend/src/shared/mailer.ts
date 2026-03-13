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
    text: `Hi ${user.name},\n\nYour account has been created successfully.\n\nHappy shopping!`
  });
}

export async function sendLoginEmail(user: { name: string; email: string }) {
  return sendMail({
    to: user.email,
    subject: "Login alert",
    text: `Hi ${user.name},\n\nYou just logged in to your account.\n\nIf this wasn't you, please change your password.`
  });
}

export async function sendOrderPlacedEmail(input: {
  user: { name: string; email: string };
  order: { id: string; orderNumber: string; totalAmount: number; items: Array<{ productNameSnapshot: string; quantity: number }> };
}) {
  const lines = input.order.items
    .slice(0, 12)
    .map((item) => `- ${item.productNameSnapshot} × ${item.quantity}`)
    .join("\n");

  return sendMail({
    to: input.user.email,
    subject: `Order confirmed (${input.order.orderNumber})`,
    text:
      `Hi ${input.user.name},\n\n` +
      `Your order has been placed successfully.\n\n` +
      `Order: ${input.order.orderNumber}\n` +
      `Total: ₹${input.order.totalAmount}\n\n` +
      `Items:\n${lines}\n\n` +
      `Thank you for shopping with us!`
  });
}
