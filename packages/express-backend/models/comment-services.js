import mongoose from "mongoose";
import commentModel from "./comment.js";
import dotenv from "dotenv";
import { findQuestionById } from "./question-services.js";

dotenv.config();
mongoose.set("debug", true);

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.MONGO_USER +
      ":" +
      process.env.MONGO_PWD +
      "@" +
      process.env.MONGO_CLUSTER +
      "/" +
      process.env.MONGO_DB +
      "?retryWrites=true&w=majority",
    //"mongodb://localhost:27017/questions",
    {
      useNewUrlParser: true, //useFindAndModify: false,
      useUnifiedTopology: true,
    },
  )
  .catch((error) => console.log(error));

function getComments(questionID, author) {
  let promise;
  if (!questionID && author) {
    promise = findCommentByAuthor(author);
  } else if (questionID && !author) {
    promise = findCommentByQuestionID(questionID);
  } else {
    promise = commentModel.find();
  }
  return promise;
}

function findCommentById(id) {
  return commentModel.findById(id);
}

function findCommentByQuestionID(id) {
  return commentModel.find({ questionID: id });
}

function findCommentByAuthor(author) {
  return commentModel.find({ author: author });
}

function addComment(questionID, comment) {
  const commentToAdd = new commentModel(comment);
  commentToAdd.questionID = questionID;
  findQuestionById(questionID).then((question) => {
    question.comments.push(commentToAdd._id);
  });
  const promise = commentToAdd.save();
  return promise;
}

export {
  addComment,
  getComments,
  findCommentById,
  findCommentByQuestionID,
  findCommentByAuthor,
};
