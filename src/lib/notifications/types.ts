/**
 * Notification types (stored as String in SQLite, validated at app level)
 */
export enum NotificationType {
  EVENT_REMINDER = "EVENT_REMINDER",
  BOOKING_CONFIRMATION = "BOOKING_CONFIRMATION",
  BOOKING_CONFIRMED = "BOOKING_CONFIRMED",
  PAYMENT_SUCCESS = "PAYMENT_SUCCESS",
  PAYMENT_FAILED = "PAYMENT_FAILED",
  BOOKING_CANCELLED = "BOOKING_CANCELLED",
  NEW_BOOKING = "NEW_BOOKING",
  NEW_REVIEW = "NEW_REVIEW",
  REFUND_PROCESSED = "REFUND_PROCESSED",
  TICKET_USED = "TICKET_USED",
}

export interface EmailPayload {
  to: string;
  subjectAr: string;
  subjectEn: string;
  template: string;
  templateData: Record<string, unknown>;
}

export interface NotificationPayload {
  userId: string;
  type: NotificationType;
  titleAr: string;
  titleEn: string;
  bodyAr: string;
  bodyEn: string;
  data?: Record<string, unknown>;
  link?: string;
  sendEmail?: boolean;
  emailData?: EmailPayload;
}

export const NOTIFICATION_ICONS: Record<NotificationType, string> = {
  [NotificationType.EVENT_REMINDER]: "Clock",
  [NotificationType.BOOKING_CONFIRMATION]: "CheckCircle",
  [NotificationType.BOOKING_CONFIRMED]: "CheckCircle",
  [NotificationType.PAYMENT_SUCCESS]: "CreditCard",
  [NotificationType.PAYMENT_FAILED]: "XCircle",
  [NotificationType.BOOKING_CANCELLED]: "XCircle",
  [NotificationType.NEW_BOOKING]: "ShoppingCart",
  [NotificationType.NEW_REVIEW]: "Star",
  [NotificationType.REFUND_PROCESSED]: "RotateCcw",
  [NotificationType.TICKET_USED]: "ScanLine",
};

export const NOTIFICATION_COLORS: Record<NotificationType, string> = {
  [NotificationType.EVENT_REMINDER]: "text-amber-600 bg-amber-100 dark:bg-amber-900/30",
  [NotificationType.BOOKING_CONFIRMATION]: "text-green-600 bg-green-100 dark:bg-green-900/30",
  [NotificationType.BOOKING_CONFIRMED]: "text-green-600 bg-green-100 dark:bg-green-900/30",
  [NotificationType.PAYMENT_SUCCESS]: "text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30",
  [NotificationType.PAYMENT_FAILED]: "text-red-600 bg-red-100 dark:bg-red-900/30",
  [NotificationType.BOOKING_CANCELLED]: "text-red-600 bg-red-100 dark:bg-red-900/30",
  [NotificationType.NEW_BOOKING]: "text-blue-600 bg-blue-100 dark:bg-blue-900/30",
  [NotificationType.NEW_REVIEW]: "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30",
  [NotificationType.REFUND_PROCESSED]: "text-purple-600 bg-purple-100 dark:bg-purple-900/30",
  [NotificationType.TICKET_USED]: "text-teal-600 bg-teal-100 dark:bg-teal-900/30",
};
