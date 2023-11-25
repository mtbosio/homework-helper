import mongoose from "mongoose";
import ObjectID from "mongoose";

const CommentSchema = new mongoose.Schema(
    {
        questionID: {
            type: ObjectID,
            required: true,
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
        date: {
            type: Date,
            required: true,
            trim: true,
        },
    },
    { collection: "comments_list" },
  );

  const Comment = mongoose.model("Question", CommentSchema);

  export default Comment;