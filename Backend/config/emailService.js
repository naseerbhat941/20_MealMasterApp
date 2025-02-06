import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config()
const transporter = nodemailer.createTransport({
  service: 'gmail',  // Use Gmail's SMTP service
  auth: {
    user: process.env.GMAIL_USER,    // Your Gmail address
    pass: process.env.GMAIL_PASSWORD // Your Gmail app password
  }
});

export const sendResetEmail = (email, resetToken) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,  // Your Gmail address
    to: email,
    subject: 'Password Reset Request',
    text: `Please use the following token to reset your password: ${resetToken}`,
    html: `<p>Please use the following token to reset your password: <b>${resetToken}</b></p>`
  };

  return transporter.sendMail(mailOptions)
    .then(info => {
      console.log('Email sent: ' + info.response);
    })
    .catch(error => {
      console.log('Error sending email: ' + error);
    });
};
