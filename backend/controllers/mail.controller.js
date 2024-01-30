const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ganeshyenurkar4@gmail.com",
        pass: "8007891084",
      },
    });

    const mailOption = {
      from: "ganeshyenurkar4@gmail.com",
      to: "ganeshyenurkar5@gmail.com",
      subject: "New Contact Form Submission",
      message: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOption);

    console.log("Email sent:", info);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
};

module.exports = { sendMail };
