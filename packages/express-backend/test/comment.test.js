import Comment from "../src//models/comment";
import { connectDB, dropDB, dropCollections } from "./setuptestdb";

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
    const newComment = new Comment(validComment);
    await newComment.save();
    expect(newComment._id).toBeDefined();
    expect(newComment.questionID).toBe(validComment.questionID);
    expect(newComment.author).toBe(validComment.author);
    expect(newComment.body).toBe(validComment.body);
    expect(newComment.author).toBe(validComment.author);
    expect(newComment.date).toBe(validComment.date);
  });
});
