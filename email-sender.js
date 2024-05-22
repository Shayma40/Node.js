const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "",
        pass: "",
    }
});

let mailOptions = {
    from: "bahrishayma4@gmail.com",
    to: "bahrishayma3@gmail.com",
    subject: "Hello From Node.js",
    text: "Hello Node!"
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
        console.log("Email sent: " + info.response);
});