import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (value.length < 5)
          throw new Error("Invalid title, must be at least 5 characters.");
      },
    },
    date: {
      type: Date,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    body: {
      type: String,
      required: true,
      trim: true,
    },
    votes: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  { collection: "questions_list" },
);

const Question = mongoose.model("Question", QuestionSchema);

export default Question;
