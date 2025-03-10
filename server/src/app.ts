import express from "express";
import dotenv from "dotenv";
dotenv.config();

// Initalize app
const app = express();
const { PORT } = process.env;

app.get("/", (_req, res) => {
  res.json({ message: "Welcome to game" });
});

// Listen to server
app.listen(PORT, () => {
  console.log(`Listening to server on port ${PORT}`);
});
