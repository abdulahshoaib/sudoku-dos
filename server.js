const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3123  ;

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});

