import { render } from "@react-email/components";
import { sendEmail } from "@/lib/email";

interface SendTemplateEmailParams {
  to: string;
  subject: string;
  template: React.ReactElement;
}

export async function sendTemplateEmail({
  to,
  subject,
  template,
}: SendTemplateEmailParams): Promise<boolean> {
  try {
    const html = await render(template);
    return sendEmail({ to, subject, html });
  } catch (error: unknown) {
    console.error("[Email Sender] Template rendering or sending error:", error);
    return false;
  }
}
