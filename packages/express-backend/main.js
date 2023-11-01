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

// Get question by id. Idk if we need this because the database creates the id.
// Might be useful if we want to add a delete later

app.get("/question/:id", (req, res) => {
  const id = req.params["id"];
  findQuestionById(id).then((response) => {
    console.log(response);
    if (response === null) {
      res.status(404).send("Resource not found.");
    } else {
      res.send(response);
    }
  });
});

// Get question by subject, title, author, or if none specified returns all questions
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
  // Add a test question:
  let res = getQuestions();
  res.then((out) => {
    if (out.length <= 1) {
      addQuestion({
        subject: "math",
        title: "Test Question",
        date: "11/1/2023",
        time: "9:29",
        author: "Bob",
        body: "Please help me with my question.",
        votes: 10,
        comments: ["test comment."],
      });
    }
  });

  console.log(`Example app listening at http://localhost:${port}`);
});
