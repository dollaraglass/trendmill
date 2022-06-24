require("dotenv").config();
const express = require("express");
const nodeMail = require("nodemailer");
const path = require("path");


const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "/index.html"));
});
app.get("/checkout", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "/checkout.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "/about.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "/contact.html"));
});
app.get("/iphone", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "/iphone.html"));
});
app.get("/treadmill", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "/trendmill.html"));
});


async function mainMail(name, email, subject, message) {
  const transporter = await nodeMail.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.PASSWORD,
    },
    // tls: {
    //   rejectUnauthorized: false,
    // },
  });
  const mailOption = {
    from: process.env.GMAIL_USER,
    to: process.env.EMAIL,
    subject: subject,
    html: `You got a message from 
    Email : ${email}
    Name: ${name}
    Message: ${message}`,
  };
  try {
    await transporter.sendMail(mailOption);
    return Promise.resolve("Message Sent Successfully!");
  } catch (error) {
    console.log(error)
    return Promise.reject(error);
  }
}

app.get("/", (req, res) => {
  res.render(index.html);
});

app.get("/contact", (req, res) => {
  res.render(contact.html);
});

app.post("/contact", async (req, res, next) => {
  const yourmessage = JSON.stringify(req.body);
  console.log(yourmessage)
  try {
    await mainMail("yourname", "youremail", "yoursubject", yourmessage);
    
    res.render(index.html);

  } catch (error) {
    res.render(index.html);
    // res.send("Message Could not be Sent");
  }
});


app.listen(port, ()=>{console.log(`listenin on ${port}`)});
