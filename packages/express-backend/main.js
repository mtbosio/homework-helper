import express from "express";
import cors from "cors";
import {
  getQuestions(),
  addQuestion(),
  findQuestionById(),
  findQuestionByTitle(),
} from "./question-services.js";


const question = {
  questions_list: [
    {
      title: "Calc 2 Problem",
      date: "Feburary 14, 2047",
      time: "11:11 PM",
      author: "Jim",
      body: "Help me please",
      votes: "👍 100000000 | 👎 1",
    },
    {
      title: "Physics 3 Problem",
      date: "December 25, 30 BC",
      time: "12:12 PM",
      author: "Bob",
      body: "Im better than all you",
      votes: "👍 0 | 👎 500000",
    },
    {
      title: "CS Problem",
      date: "October 27, 2023",
      time: "3:33 PM",
      author: "Matt",
      body: "Hehe help me please",
      votes: "👍 69 | 👎 420",
    },
  ],
};
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
app.get("/questions", (req, res) => {
  getQuestions().then((response) => res.send(response));
});

// Post new question
app.post("/users", (req, res) => {
  addQuestion(req.body).then((response) => res.status(201).send(response));
});



// Start service
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
