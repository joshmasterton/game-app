import express from "express";
import dotenv from "dotenv";
dotenv.config();

// Initalize app
export const app = express();
const { PORT, NODE_ENV } = process.env;

// Welcome to server
app.get("/", (_req, res) => {
  res.json({ message: "Welcome to game" });
});

// Listen to server
if (NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Listening to server on port ${PORT}`);
  });
}
