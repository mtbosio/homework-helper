import mongoose from "mongoose";
import questionModel from "./question.js";

mongoose.set("debug", true);

mongoose
  .connect("mongodb://localhost:27017/questions", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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

function addQuestion(question) {
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
