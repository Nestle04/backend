const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.static("public"));

// подключение к MongoDB Atlas
mongoose.connect("mongodb+srv://nastasiaaa_i:bonya63134259@cluster0.ipom3tg.mongodb.net/Answers?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

const Answer = mongoose.model("Answer", {
  answer: String,
  date: { type: Date, default: Date.now }
});

// API
app.post("/api/answer", async (req, res) => {
  try {
    await Answer.create({ answer: req.body.answer });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// экспорт для Vercel
module.exports = app;
