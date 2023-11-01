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

  // Add a test question:
  let res = getQuestions();
  res.then(out => {
    if (out.length <= 0) {
      addQuestion({
        subject: "math",
        title: "Test Question",
        date: "11/1/2023",
        time: "9:29",
        author: "Bob",
        body: "Please help me with my question.",
        votes: 10,
        comments: ["test comment."]
      });
    }
  });

  console.log(`Example app listening at http://localhost:${port}`);
});
