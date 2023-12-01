import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import { OAuth2Client } from "google-auth-library";
import {
  getQuestions,
  addQuestion,
  findQuestionById,
} from "./models/question-services.js";
import { getComments, addComment } from "./models/comment-services.js";

dotenv.config();

const authClient = new OAuth2Client();
const app = express();
const port = 8000;

function verifySignedIn(req, res, next) {
  if (req.session.name) {
    next();
  } else {
    res.status(401).end();
  }
}

app.set("trust proxy", 1);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: false,
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 1000, // 1 hour session
    },
  }),
);

app.use(express.json());

// API endpoint definitions go here

// Get a single question by ID
app.get("/api/questions/:id", (req, res) => {
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
app.get("/api/questions/:id/comments", (req, res) => {
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
app.post("/api/questions/:id/comments", (req, res) => {
  const id = req.params["id"];
  addComment(id, req.body)
    .then((response) => res.status(201).send(response))
    .catch(() => {
      console.log(res.status(400).send("Invalid Formatting"));
    });
});

// Get question by subject, title, author, or if none specified returns all questions
app.get("/api/questions", (req, res) => {
  const subject = req.query.subject;
  const title = req.query.title;
  const author = req.query.author;

  getQuestions(subject, title, author).then((response) => {
    res.status(200).send(response);
  });
});

// Post new question
app.post("/api/questions", verifySignedIn, (req, res) => {
  addQuestion(req.body)
    .then((response) => res.status(201).send(response))
    .catch(() => {
      console.log(res.status(400).send("Invalid Formatting"));
    });
});

app.post("/api/login", (req, res) => {
  const credentialString = req.body.credential;
  let name;
  let userId;

  authClient
    .verifyIdToken({
      idToken: credentialString,
      audience: process.env.OAUTH_CLIENT_ID,
    })
    .then((ticket) => {
      userId = ticket.getPayload()["sub"];
      name = ticket.getPayload()["name"];

      req.session.regenerate((err) => {
        if (err) {
          console.log(err);
          res.status(500).send("Internal error.");
        }

        req.session.name = name;
        req.session.userId = userId;
        res.status(200).send(JSON.stringify({ name: name }));
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(403).send("Invalid Creds");
    });
});

app.get("/api/logout", (req, res) => {
  req.session.regenerate((err) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Error");
    }

    res.status(200).send("Success");
  });
});

// Start service
app.listen(process.env.PORT || port, () => {
  console.log("REST API is listening.");
});
