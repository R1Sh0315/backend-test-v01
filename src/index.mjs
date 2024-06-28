import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send({ msg: "root working" });
});

app.listen(PORT, () => {
  console.log(`running on port http://127.0.0.1:${PORT}......`);
});
