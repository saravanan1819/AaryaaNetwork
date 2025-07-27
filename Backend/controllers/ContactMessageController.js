const { sendContactEmail } = require("../utils/sendContactEmail");

exports.handleContactForm = async (req, res) => {
  const { firstName, lastName, email, phone, address, message } = req.body;
  const name = `${firstName} ${lastName}`;
  if (!firstName || !lastName || !email || !phone || !address || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const subject = "📬 New Contact Form Submission";

    const html = `
  <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; color: #333;">
    <h2 style="color: #651E1E;">📬 New Contact Form Submission</h2>
    
    <table cellpadding="8" cellspacing="0" border="0" style="width: 100%; max-width: 600px; background: #ffffff; border: 1px solid #ddd; border-radius: 8px;">
      <tr>
        <td style="font-weight: bold; width: 120px;">Name:</td>
        <td>${name}</td>
      </tr>
      <tr>
        <td style="font-weight: bold;">Email:</td>
        <td>${email}</td>
      </tr>
      <tr>
        <td style="font-weight: bold;">Phone:</td>
        <td>${phone}</td>
      </tr>
      <tr>
        <td style="font-weight: bold;">Address:</td>
        <td>${address}</td>
      </tr>
      <tr>
        <td style="font-weight: bold; vertical-align: top;">Message:</td>
        <td style="white-space: pre-line;">${message}</td>
      </tr>
    </table>

    <p style="margin-top: 20px; font-size: 13px; color: #888;">
      This message was sent from the contact page of your website.
    </p>
  </div>
`;

    await sendContactEmail(subject, html); // new named function

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ message: "Failed to send message." });
  }
};
