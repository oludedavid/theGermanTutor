// lib/mail/send-receipt.ts

import { sendMail } from "./send-mail";

interface ReceiptMailOptions {
  userEmail: string;
  userFullName: string;
  orderId: string;
  cartId?: string;
  totalAmount: number; // in kobo
}

export async function sendReceiptEmail({
  userEmail,
  userFullName,
  orderId,
  cartId,
  totalAmount,
}: ReceiptMailOptions) {
  const subject = `Order Confirmation - #${orderId}`;

  const text = `Hi ${userFullName},\n\nThank you for your payment.\n\nOrder ID: ${orderId}\nCart ID: ${
    cartId || "-"
  }\nTotal Paid: ₦${(totalAmount / 100).toFixed(
    2
  )}\n\nWe appreciate your business!`;

  const html = `
    <div style="font-family: sans-serif; font-size: 14px;">
      <h2>Hi ${userFullName},</h2>
      <p>Thank you for your payment.</p>
      <ul>
        <li><strong>Order ID:</strong> ${orderId}</li>
        <li><strong>Cart ID:</strong> ${cartId || "-"}</li>
        <li><strong>Total Paid:</strong> ₦${(totalAmount / 100).toFixed(2)}</li>
      </ul>
      <p>We appreciate your business. If you have any questions, contact us anytime.</p>
    </div>
  `;

  return sendMail({
    email: "no-reply@yourdomain.com",
    sendTo: userEmail,
    subject,
    text,
    html,
  });
}
