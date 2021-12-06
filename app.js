const express = require("express");
const app = express();

app.get("/", (req, rsp) => {
  console.log(req, rsp);
  rsp.send("connected!");
})

const port = 8880;
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('express running...')
  }
})