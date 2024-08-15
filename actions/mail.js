"use server";
import nodemailer from "nodemailer";

export async function sendContactEmail(formData) {
  if (!formData) {
    return { success: false, error: "Something went wrong." };
  }
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Invalid email format." };
  }

  if (name.length < 2) {
    return { success: false, error: "Name must be at least 2 characters long." };
  }

  if (message.length < 10) {
    return { success: false, error: "Message must be at least 10 characters long." };
  }
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Replace with your SMTP server host
    port: 465, // Typically 587 or 465
    secure: true, // true for 465, false for other ports
    auth: {
      user: "shashank.fuzen@gmail.com", // SMTP username
      pass: "lbpz tcux ciuh enyb", // SMTP password
    },
    // auth: {
    //   user: process.env.SMTP_USER, // SMTP username
    //   pass: process.env.SMTP_PASS, // SMTP password
    // },
  });
  const mailOptions = {
    from: "shashank.fuzen@gmail.com",
    to: "shashank.testing.fuzen@gmail.com",
    subject: `Contact form submission from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
}
