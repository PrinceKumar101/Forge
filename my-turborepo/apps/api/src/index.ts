import express from "express";

const app = express();
app.use("/", (req, res) => {
  return res.send("Hey there hii from server1.");
});

app.listen(3001, () => {
  console.log("Server listing on port 3000");
});
