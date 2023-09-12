const dotenv = require("dotenv");
const express = require("express");


const app = express();

dotenv.config({ path: "./config.env" });


app.get("/", (req, res) => {
    res.json({ message: "Welcome to application." });
  });
  
  // set port, listen for requests
  const PORT = process.env.PORT||8081;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
  