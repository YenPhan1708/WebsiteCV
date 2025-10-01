const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 3000;
require("dotenv").config();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Contact form handler
app.post("/send-mail", async (req, res) => {
    const { name, email, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    let mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New contact from ${name}`,
        text: message
    };

    try {
        await transporter.sendMail(mailOptions);
        res.send("✅ Message sent successfully!");
    } catch (err) {
        console.error(err);
        res.send("❌ Error sending message.");
    }
});

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
