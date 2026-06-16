import express from "express";
import mongoose from "mongoose";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.static("public"));

// подключение к Mongo
await mongoose.connect("mongodb+srv://nastasiaaa_i:bonya63134259@cluster0.ipom3tg.mongodb.net/Answers?retryWrites=true&w=majority");

const Answer = mongoose.model("Answer", {
  answer: String,
  date: { type: Date, default: Date.now }
});

// API
app.post("/api/answer", async (req, res) => {
  await Answer.create({ answer: req.body.answer }); 
  res.json({ ok: true });
});

// запуск сервера
app.listen(3000, () => console.log("Server started on http://localhost:3000"));
