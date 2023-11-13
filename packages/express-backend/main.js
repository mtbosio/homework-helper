import express from "express";
import cors from "cors";
import {
  getQuestions,
  addQuestion,
  findQuestionById,
} from "./models/question-services.js";

const app = express();
const port = 5000;

const corsOptions = {
  origin: "https://lemon-sand-0ec997c1e.4.azurestaticapps.net/",
};

app.use(express.json());
app.use(cors(corsOptions));
app.options("*", cors());
// API endpoint definitions go here

// Get a single question by ID
app.get("/questions/:id", cors(), (req, res) => {
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
app.get("/questions", cors(), (req, res) => {
  const subject = req.query.subject;
  const title = req.query.title;
  const author = req.query.author;
  getQuestions(subject, title, author).then((response) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE",
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization",
    );
    res.status(200).send(response);
  });
});

// Post new question
app.post("/questions", cors(), (req, res) => {
  addQuestion(req.body)
    .then((response) => res.status(201).send(response))
    .catch(() => {
      console.log(res.status(400).send("Invalid Formatting"));
    });
});

// Start service
app.listen(process.env.PORT || port, () => {
  console.log("REST API is listening.");
});
