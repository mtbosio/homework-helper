import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { OAuth2Client } from "google-auth-library";
import {
  getQuestions,
  addQuestion,
  findQuestionById,
} from "./models/question-services.js";
import { getComments, addComment } from "./models/comment-services.js";
import validateAuth from "./auth.js";

dotenv.config();

const authClient = new OAuth2Client();
const app = express();
const port = 8000;

const corsOptions = {
  origin: [
    "https://lemon-sand-0ec997c1e.4.azurestaticapps.net/",
    "http://localhost:3000",
  ],
};

app.use(express.json());
app.use(cors(corsOptions));

// API endpoint definitions go here

// Get a single question by ID
app.get("/questions/:id", (req, res) => {
  const id = req.params["id"];
  findQuestionById(id).then((response) => {
    if (response === null) {
      res.status(404).send("Resource not found.");
    } else {
      res.send(response);
    }
  });
});

// Get all of the comments of a question
app.get("/questions/:id/comments", (req, res) => {
  const id = req.params["id"];
  getComments(id).then((response) => {
    console.log(response);
    if (response === null) {
      res.status(404).send("Resource not found.");
    } else {
      res.send(response);
    }
  });
});

// Add a new comment on a question
app.post("/questions/:id/comments", (req, res) => {
  validateAuth(req.headers.authorization).then((userInfo) => {
    if (userInfo == undefined) {
      res.status(401).send("Login first.");
      return;
    }

    const id = req.params["id"];
    addComment(id, req.body, userInfo.name)
      .then((response) => res.status(201).send(response))
      .catch(() => {
        console.log(res.status(400).send("Invalid Formatting"));
      });
  });
});

// Get question by subject, title, author, or if none specified returns all questions
app.get("/questions", (req, res) => {
  const subject = req.query.subject;
  const title = req.query.title;
  const author = req.query.author;

  getQuestions(subject, title, author).then((response) => {
    res.status(200).send(response);
  });
});

// Post new question
app.post("/questions", (req, res) => {
  validateAuth(req.headers.authorization).then((userInfo) => {
    if (userInfo == undefined) {
      res.status(401).send("Login first.");
      return;
    }

    addQuestion(req.body, userInfo.name)
      .then((response) => res.status(201).send(response))
      .catch(() => {
        console.log(res.status(400).send("Invalid Formatting"));
      });
  });
});

app.post("/verifyCredentials", (req, res) => {
  const credentialString = req.body.credential;
  let name;

  authClient
    .verifyIdToken({
      idToken: credentialString,
      audience: process.env.OAUTH_CLIENT_ID,
    })
    .then((ticket) => {
      name = ticket.getPayload()["name"];
      res.status(200).send(JSON.stringify({ name: name }));
    })
    .catch((err) => {
      console.log(err);
      res.status(403).send("Invalid Creds");
    });
});

// Start service
app.listen(process.env.PORT || port, () => {
  console.log("REST API is listening.");
});
