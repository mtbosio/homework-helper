import Comment from "./comment";
import { connectDB, dropDB, dropCollections } from "./setuptestdb";
import mongoose from "mongoose";
import { 
    addComment,
    getComments,
    findCommentById,
    findCommentByQuestionID,
    findCommentByAuthor, } from "./comment-services.js";

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
  test("should create a comment successfully", async () => {
    let validComment = {
      questionID: "123",
      author: "Chalres Moreno",
      body: "this ez lol get better",
      date: new Date(),
    };
    
    const promise = getComments();
    expect(promise).toBe(await Comment.find({}));
  });

  
});