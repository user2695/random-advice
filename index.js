const express = require("express");
const https = require("https");

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  const url = "https://api.adviceslip.com/advice";
  https.get(url, (response) => {
    response.on("data", (data) => {
      const adviceData = JSON.parse(data);
      const advice = adviceData.slip.advice;
      res.send(advice);
    });
  });
});

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
