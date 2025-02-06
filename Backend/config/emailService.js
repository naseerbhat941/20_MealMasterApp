import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendResetEmail = async (email, resetToken) => {
  const resetUrl = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

  const msg = {
    to: email,
    from: process.env.EMAIL_SENDER,
    subject: 'Password Reset Request',
    html: `<p>Click <a href="${resetUrl}">here</a> to reset your password.</p>`,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.log(error);
    throw new Error('Unable to send reset email.');
  }
};
