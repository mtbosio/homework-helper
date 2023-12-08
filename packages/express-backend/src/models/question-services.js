import mongoose from "mongoose";
import questionModel from "./question.js";
import dotenv from "dotenv";
import sanitizeHtml from "sanitize-html";

dotenv.config();

mongoose.set("debug", true);

if (process.env.JEST_WORKER_ID === undefined) {
  mongoose
    .connect(
      "mongodb+srva://" +
        process.env.MONGO_USER +
        ":" +
        process.env.MONGO_PWD +
        "@" +
        process.env.MONGO_CLUSTER +
        "/" +
        process.env.MONGO_DB +
        "?retryWrites=true&w=majority",
      // "mongodb://localhost:27017/questions",
      {
        useNewUrlParser: true, //useFindAndModify: false,
        useUnifiedTopology: true,
      },
    )
    .catch((error) => console.log(error));
}

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
  return questionModel.find({ title: { $regex: title, $options: "i" } });
}

function addQuestion(userQuestion, name) {
  const date = new Date();
  const question = {
    subject: sanitizeHtml(userQuestion.subject),
    title: sanitizeHtml(userQuestion.title),
    author: sanitizeHtml(name),
    body: sanitizeHtml(userQuestion.body),
    date: date.toString(),
    votes: 0,
    comments: 0,
  };
  const questionToAdd = new questionModel(question);
  const promise = questionToAdd.save();
  return promise;
}

function changeCommentAmount(questionId, amount) {
  //console.log(questionId);
  questionModel
    .updateOne({ _id: questionId }, { $inc: { comments: amount } })
    .catch((err) => console.log(err));
}

export {
  addQuestion,
  getQuestions,
  findQuestionById,
  findQuestionByTitle,
  findQuestionBySubject,
  findQuestionByAuthor,
  changeCommentAmount,
};
