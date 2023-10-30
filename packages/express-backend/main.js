import express from "express";
import cors from "cors";
import {
  getQuestions,
  addQuestion,
  findQuestionBySubject,
  findQuestionByTitle,
  findQuestionByAuthor,
} from "./models/question-services.js";


const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
// API endpoint definitions go here

// Test API
app.get("/", (req, res) => {
  res.send("This is a test.");
});

// Get all questions, can rename if needed
app.get("/question", (req, res) => {
  getQuestions().then((response) => res.send(response));
});

// Post new question
app.post("/question", (req, res) => {
  addQuestion(req.body).then((response) => res.status(201).send(response));
});

// Start service
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
