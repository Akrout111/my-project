import { Resend } from "resend";
import { render } from "@react-email/components";
import { logger } from "@/lib/logger";
import { BookingConfirmationEmail } from "../emails/templates/booking-confirmation";
import { BookingCancelledEmail } from "../emails/templates/booking-cancelled";
import { PaymentFailedEmail } from "../emails/templates/payment-failed";
import { PaymentSuccessEmail } from "../emails/templates/payment-success";
import { EventReminderEmail } from "../emails/templates/event-reminder";
import { RefundProcessedEmail } from "../emails/templates/refund-processed";
import { TicketUsedEmail } from "../emails/templates/ticket-used";
import { NewBookingNotificationEmail } from "../emails/templates/new-booking-notification";
import { NewReviewNotificationEmail } from "../emails/templates/new-review-notification";
import { sanitizeUrl } from "@/lib/sanitize";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

/**
 * Send email via Resend
 */
export async function sendEmail({ to, subject, html }: EmailOptions): Promise<boolean> {
  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === "re_xxxxxxxx") {
    logger.info("email", "MOCK email", { to, subject });
    return true;
  }

  try {
    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM ?? "noreply@kuwaitevents.com",
      to,
      subject,
      html,
    });

    if (error) {
      logger.error("email", "Send failed", error);
      return false;
    }

    return true;
  } catch (error: unknown) {
    logger.error("email", "Send error", error);
    return false;
  }
}

/**
 * Send booking confirmation email using React Email template
 */
export async function sendBookingConfirmationEmail(params: {
  to: string;
  attendeeName: string;
  bookingNumber: string;
  eventTitle: string;
  eventDate: string;
  eventTime: string;
  venueName: string;
  ticketCount: number;
  totalAmount: string;
  bookingId: string;
  appUrl: string;
  locale?: string;
}): Promise<boolean> {
  const html = await render(
    BookingConfirmationEmail({
      data: {
        attendeeName: params.attendeeName,
        bookingNumber: params.bookingNumber,
        eventTitle: params.eventTitle,
        eventDate: params.eventDate,
        eventTime: params.eventTime,
        venueName: params.venueName,
        ticketCount: params.ticketCount,
        totalAmount: params.totalAmount,
        bookingId: params.bookingId,
        appUrl: sanitizeUrl(params.appUrl),
      },
    })
  );

  return sendEmail({
    to: params.to,
    subject: params.locale === "ar"
      ? `تأكيد الحجز ${params.bookingNumber} — ${params.eventTitle}`
      : `Booking Confirmed ${params.bookingNumber} — ${params.eventTitle}`,
    html,
  });
}

/**
 * Send payment failure email using React Email template
 */
export async function sendPaymentFailureEmail(params: {
  to: string;
  attendeeName: string;
  bookingNumber: string;
  eventTitle: string;
  bookingId?: string;
  locale?: string;
}): Promise<boolean> {
  const html = await render(
    PaymentFailedEmail({
      data: {
        attendeeName: params.attendeeName,
        bookingNumber: params.bookingNumber,
        eventTitle: params.eventTitle,
        bookingId: params.bookingId ?? "",
      },
    })
  );

  return sendEmail({
    to: params.to,
    subject: params.locale === "ar"
      ? `فشل الدفع للحجز ${params.bookingNumber}`
      : `Payment Failed for Booking ${params.bookingNumber}`,
    html,
  });
}

/**
 * Send payment success email using React Email template
 */
export async function sendPaymentSuccessEmail(params: {
  to: string;
  attendeeName: string;
  bookingNumber: string;
  eventTitle: string;
  amount: string;
  transactionId: string;
  bookingId: string;
  appUrl?: string;
  locale?: string;
}): Promise<boolean> {
  const html = await render(
    PaymentSuccessEmail({
      data: {
        attendeeName: params.attendeeName,
        bookingNumber: params.bookingNumber,
        eventTitle: params.eventTitle,
        amount: params.amount,
        transactionId: params.transactionId,
        bookingId: params.bookingId,
        appUrl: params.appUrl ? sanitizeUrl(params.appUrl) : undefined,
      },
    })
  );

  return sendEmail({
    to: params.to,
    subject: params.locale === "ar"
      ? `تم الدفع بنجاح — ${params.bookingNumber}`
      : `Payment Successful — ${params.bookingNumber}`,
    html,
  });
}

/**
 * Send event reminder email using React Email template
 */
export async function sendEventReminderEmail(params: {
  to: string;
  attendeeName: string;
  eventTitle: string;
  eventDate: string;
  eventTime: string;
  venueName: string;
  bookingId: string;
  appUrl?: string;
  locale?: string;
}): Promise<boolean> {
  const html = await render(
    EventReminderEmail({
      data: {
        attendeeName: params.attendeeName,
        eventTitle: params.eventTitle,
        eventDate: params.eventDate,
        eventTime: params.eventTime,
        venueName: params.venueName,
        bookingId: params.bookingId,
        appUrl: params.appUrl ? sanitizeUrl(params.appUrl) : undefined,
      },
    })
  );

  return sendEmail({
    to: params.to,
    subject: params.locale === "ar"
      ? `تذكير: ${params.eventTitle} غداً`
      : `Reminder: ${params.eventTitle} tomorrow`,
    html,
  });
}

/**
 * Send refund processed email using React Email template
 */
export async function sendRefundProcessedEmail(params: {
  to: string;
  attendeeName: string;
  bookingNumber: string;
  refundAmount: string;
  reason?: string;
  refundTimeline?: string;
  appUrl?: string;
  locale?: string;
}): Promise<boolean> {
  const html = await render(
    RefundProcessedEmail({
      data: {
        attendeeName: params.attendeeName,
        bookingNumber: params.bookingNumber,
        refundAmount: params.refundAmount,
        reason: params.reason,
        refundTimeline: params.refundTimeline,
        appUrl: params.appUrl ? sanitizeUrl(params.appUrl) : undefined,
      },
    })
  );

  return sendEmail({
    to: params.to,
    subject: params.locale === "ar"
      ? `تم استرداد المبلغ — ${params.bookingNumber}`
      : `Refund Processed — ${params.bookingNumber}`,
    html,
  });
}

/**
 * Send booking cancelled email using React Email template
 */
export async function sendBookingCancelledEmail(params: {
  to: string;
  attendeeName: string;
  bookingNumber: string;
  eventTitle: string;
  refundAmount?: string;
  refundTimeline?: string;
  appUrl?: string;
  locale?: string;
}): Promise<boolean> {
  const html = await render(
    BookingCancelledEmail({
      data: {
        attendeeName: params.attendeeName,
        bookingNumber: params.bookingNumber,
        eventTitle: params.eventTitle,
        refundAmount: params.refundAmount,
        refundTimeline: params.refundTimeline,
        appUrl: params.appUrl ? sanitizeUrl(params.appUrl) : undefined,
      },
    })
  );

  return sendEmail({
    to: params.to,
    subject: params.locale === "ar"
      ? `تم إلغاء الحجز ${params.bookingNumber}`
      : `Booking Cancelled ${params.bookingNumber}`,
    html,
  });
}

/**
 * Send ticket used email using React Email template
 */
export async function sendTicketUsedEmail(params: {
  to: string;
  ticketNumber: string;
  eventTitleAr: string;
  eventTitleEn: string;
  attendeeName?: string;
  usedAt: string;
  appUrl?: string;
  locale?: string;
}): Promise<boolean> {
  const html = await render(
    TicketUsedEmail({
      data: {
        ticketNumber: params.ticketNumber,
        eventTitleAr: params.eventTitleAr,
        eventTitleEn: params.eventTitleEn,
        attendeeName: params.attendeeName,
        usedAt: params.usedAt,
        appUrl: params.appUrl ? sanitizeUrl(params.appUrl) : undefined,
      },
    })
  );

  return sendEmail({
    to: params.to,
    subject: params.locale === "ar"
      ? `تم استخدام التذكرة — ${params.ticketNumber}`
      : `Ticket Used — ${params.ticketNumber}`,
    html,
  });
}

/**
 * Send new booking notification to organizer using React Email template
 */
export async function sendNewBookingNotificationEmail(params: {
  to: string;
  organizerName: string;
  bookingNumber: string;
  attendeeName: string;
  eventTitle: string;
  ticketCount: number;
  amount: string;
  bookingId: string;
  appUrl?: string;
  locale?: string;
}): Promise<boolean> {
  const html = await render(
    NewBookingNotificationEmail({
      data: {
        organizerName: params.organizerName,
        bookingNumber: params.bookingNumber,
        attendeeName: params.attendeeName,
        eventTitle: params.eventTitle,
        ticketCount: params.ticketCount,
        amount: params.amount,
        bookingId: params.bookingId,
        appUrl: params.appUrl ? sanitizeUrl(params.appUrl) : undefined,
      },
    })
  );

  return sendEmail({
    to: params.to,
    subject: params.locale === "ar"
      ? `حجز جديد — ${params.eventTitle}`
      : `New Booking — ${params.eventTitle}`,
    html,
  });
}

/**
 * Send new review notification to organizer using React Email template
 */
export async function sendNewReviewNotificationEmail(params: {
  to: string;
  organizerName: string;
  reviewerName: string;
  eventTitle: string;
  rating: number;
  comment?: string;
  reviewId: string;
  appUrl?: string;
  locale?: string;
}): Promise<boolean> {
  const html = await render(
    NewReviewNotificationEmail({
      data: {
        organizerName: params.organizerName,
        reviewerName: params.reviewerName,
        eventTitle: params.eventTitle,
        rating: params.rating,
        comment: params.comment,
        reviewId: params.reviewId,
        appUrl: params.appUrl ? sanitizeUrl(params.appUrl) : undefined,
      },
    })
  );

  return sendEmail({
    to: params.to,
    subject: params.locale === "ar"
      ? `تقييم جديد على ${params.eventTitle}`
      : `New Review on ${params.eventTitle}`,
    html,
  });
}
