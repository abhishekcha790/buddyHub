const { createTransport} =require("nodemailer");

const sendOtpEmail = async (toEmail, otp) => {
  try {
    const transporter = createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: toEmail,
      subject: "Your Login OTP",
      text: `Your OTP is ${otp}. It is valid for 5 minutes.`,
    };

    let info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.messageId);
  } catch (err) {
    console.error("❌ Error sending email:", err.message);
    throw err;
  }
};


module.exports=sendOtpEmail;