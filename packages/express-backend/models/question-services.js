import mongoose from "mongoose";
import questionModel from "./question.js";
import dotenv from "dotenv";

dotenv.config()

mongoose.set("debug", true);

mongoose.connect(
    "mongodb+srv://" +
      process.env.MONGO_USER +
      ":" +
      process.env.MONGO_PWD +
      "@" +
      process.env.MONGO_CLUSTER +
      "/" +
      process.env.MONGO_DB +
      "?retryWrites=true&w=majority",
    // "mongodb://localhost:27017/users",
    {
      useNewUrlParser: true, //useFindAndModify: false,
      useUnifiedTopology: true,
    },
  )
  .catch((error) => console.log(error));

function getQuestions(subject, title, author) {
  let promise;
  if (subject && !author && !title) {
    promise = findQuestionBySubject(subject);
  } else if (author && !subject && !title) {
    promise = findQuestionByAuthor(author);
  } else if (title && !subject && !author) {
    promise = findQuestionByTitle(title);
  } else {
    promise = questionModel.find();
  }
  return promise;
}

function findQuestionById(id) {
  return questionModel.findById(id);
}

function findQuestionByAuthor(author) {
  return questionModel.find({ author: author });
}

function findQuestionBySubject(subject) {
  return questionModel.find({ subject: subject });
}

function findQuestionByTitle(title) {
  return questionModel.find({ title: title });
}

function addQuestion(userQuestion) {
  const date = new Date();
  const question = {
    subject: userQuestion.subject,
    title: userQuestion.title,
    author: userQuestion.author,
    body: userQuestion.body,
    date: date.toDateString(),
    time: date.toLocaleTimeString(),
    votes: 0,
    comments: [],
  }
  const questionToAdd = new questionModel(question);
  const promise = questionToAdd.save();
  return promise;
}

export {
  addQuestion,
  getQuestions,
  findQuestionById,
  findQuestionByTitle,
  findQuestionBySubject,
  findQuestionByAuthor,
};
