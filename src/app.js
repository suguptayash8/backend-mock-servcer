const express = require("express");
const { contact } = require("./controller/ContactController");
const about = require('./router/about');

require('dotenv').config({path: __dirname + '../local.env'})

const app = express();

const port = process.env.port || 3000;

app.get("/", (req, res) => {
    res.json({ message: "That's it!" });
  });

  app.listen(port, () => {
    console.log(`Listening to port ${port}`);
  });


  app.use(about);
  app.use(contact);