import express from "express";
import cors from "cors";
import {
  getQuestions,
  addQuestion,
  findQuestionBySubject,
  findQuestionByTitle,
  findQuestionByAuthor,
  findQuestionById,
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

app.get("/question/:id", (req, res) => {
  const id = req.params["id"];
  let result;
  findQuestionById(id).then((response) => (result = response));
  if (result === null) {
    res.status(404).send("Resource not found.");
  } else {
    res.status(204).send(result);
  }
});

app.get("/question", (req, res) => {
  const subject = req.query.subject;
  const title = req.query.title;
  const author = req.query.author;
  getQuestions(subject, title, author).then((response) => res.send(response));
});

// Post new question
app.post("/question", (req, res) => {
  addQuestion(req.body).then((response) => res.status(201).send(response));
});

// Start service
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
