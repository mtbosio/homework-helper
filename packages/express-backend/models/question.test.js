//const { connectDB, dropDB, dropCollections } = require("./setuptestdb");
//const { Question } = require("../express-backend/models/question.js");
import Question from "./question";
import { connectDB, dropDB, dropCollections } from "./setuptestdb";

import mongoose from "mongoose";
beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await dropDB();
});

afterEach(async () => {
  await dropCollections();
});
describe("Question Model", () => {
  test("should create a question successfully", async () => {
    let validQuestion = {
      subject: "Math",
      title: "Calc Hw",
      date: new Date(),
      author: "Matt",
      body: "please help",
      votes: 10,
      comments: 10,
    };
    const newQuestion = new Question(validQuestion);
    await newQuestion.save();
    expect(newQuestion._id).toBeDefined();
    expect(newQuestion.subject).toBe(validQuestion.subject);
    expect(newQuestion.title).toBe(validQuestion.title);
    expect(newQuestion.date).toBe(validQuestion.date);
    expect(newQuestion.author).toBe(validQuestion.author);
    expect(newQuestion.body).toBe(validQuestion.body);
    expect(newQuestion.votes).toBe(validQuestion.votes);
    expect(newQuestion.comments).toBe(validQuestion.comments);
  });

  it("should fail for question without required fields", async () => {
    let invalidQuestion = {
      subject: "Math",
    };
    try {
      const newQuestion = new Question(invalidQuestion);
      await newQuestion.save();
    } catch (error) {
      expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
      expect(error.errors.completed).toBe();
    }
  });
  it("should fail for question with fields of wrong type", async () => {
    let invalidQuestion = {
      subject: 10,
      title: "Calc Hw",
      date: new Date(),
      author: "Matt",
      body: "please help",
      votes: 10,
      comments: 10,
    };
    try {
      const newQuestion = new Question(invalidQuestion);
      await newQuestion.save();
    } catch (error) {
      expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
      expect(error.errors.completed).toBe();
    }
  });
  it("should fail for question with too short of a title", async () => {
    let invalidQuestion = {
      subject: "Math",
      title: "Calc",
      date: new Date(),
      author: "Matt",
      body: "please help",
      votes: 10,
      comments: 10,
    };
    try {
      const newQuestion = new Question(invalidQuestion);
      await newQuestion.save();
    } catch (error) {
      expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
      expect(error.errors.completed).toBe();
    }
  });
});
