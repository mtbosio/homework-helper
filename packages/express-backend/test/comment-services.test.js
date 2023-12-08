import Comment from "../src/models/comment";
import { connectDB, dropDB, dropCollections } from "./setuptestdb";
import mongoose from "mongoose";
import {
  addComment,
  getComments,
  findCommentById,
  findCommentByQuestionID,
  findCommentByAuthor,
} from "../src/models/comment-services.js";

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await dropDB();
});

afterEach(async () => {
  await dropCollections();
});
describe("Comment Model", () => {
  it("addComment", async () => {
    let validComment = {
      questionID: "123",
      author: "Chalres Moreno",
      body: "this ez lol get better",
      date: new Date(),
    };
    addComment(validComment.questionID, validComment, validComment.author);
    const comment = await Comment.findOne({ questionID: "123" });
    expect(comment._id).toBeDefined();
    expect(comment.author).toBe(validComment.author);
    expect(comment.body).toBe(validComment.body);
  });
  it("getComments", async () => {
    let validComment1 = {
      questionID: "123",
      author: "Chalres Moreno",
      body: "this ez lol get better",
      date: new Date(),
    };
    let validComment2 = {
      questionID: "321",
      author: "lil bro",
      body: "pls help",
      date: new Date(),
    };
    let validComment3 = {
      questionID: "123",
      author: "Matt",
      body: "quiet before i hack u",
      date: new Date(),
    };
    await addComment(
      validComment1.questionID,
      validComment1,
      validComment1.author,
    );
    await addComment(
      validComment2.questionID,
      validComment2,
      validComment2.author,
    );
    await addComment(
      validComment3.questionID,
      validComment3,
      validComment3.author,
    );

    //test find()
    let expected = await Comment.find({});
    let comments = await getComments();
    expect(expected).toEqual(comments);

    //test find(author)
    expected = await Comment.find({ author: "Charles Moreno" });
    comments = await getComments(null, "Charles Moreno");
    expect(expected).toEqual(comments);

    //test find(questionID)
    expected = await Comment.find({ questionID: "321" });
    comments = await getComments("321", null);
    expect(expected).toEqual(comments);

    //test findCommentById
    expected = await Comment.find({ questionID: "123" });
    let comment = await findCommentById(expected[0]._id);
    expect(expected[0]).toEqual(comment);
  });
});
