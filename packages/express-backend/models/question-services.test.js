import Question from "./question";
import { connectDB, dropDB, dropCollections } from "./setuptestdb";
import {
  addQuestion,
  getQuestions,
  findQuestionById,
  changeCommentAmount,
} from "./question-services";
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
describe("Question Services", () => {
  it("addQuestion", async () => {
    let validQuestion = {
      subject: "Math",
      title: "Calc Hw",
      date: new Date(),
      author: "Matt",
      body: "please help",
      votes: 10,
      comments: 10,
    };
    addQuestion(validQuestion, "Matt");
    const question = await Question.findOne({ subject: "Math" });
    expect(question._id).toBeDefined();
    expect(question.subject).toBe(validQuestion.subject);
    expect(question.title).toBe(validQuestion.title);
    expect(question.author).toBe(validQuestion.author);
    expect(question.body).toBe(validQuestion.body);
  });
  it("getQuestions()", async () => {
    let validQuestion1 = {
      subject: "Math",
      title: "Calc Hw",
      date: new Date(),
      author: "Matt",
      body: "please help",
      votes: 10,
      comments: 10,
    };
    let validQuestion2 = {
      subject: "English",
      title: "English Hw",
      date: new Date(),
      author: "Charles",
      body: "please help",
      votes: 10,
      comments: 10,
    };
    await addQuestion(validQuestion1, "Matt");
    await addQuestion(validQuestion2, "Charles");

    //test find()
    let expected = await Question.find({});
    let questions = await getQuestions();
    expect(expected).toEqual(questions);

    //test find(author)
    expected = await Question.find({ author: "Charles" });
    questions = await getQuestions(null, null, "Charles");
    expect(expected).toEqual(questions);

    //test find(title)
    expected = await Question.find({ title: "English Hw" });
    questions = await getQuestions(null, "English Hw", null);
    expect(expected).toEqual(questions);

    //test find(subject)
    expected = await Question.find({ subject: "Math" });
    questions = await getQuestions("Math", null, null);
    expect(expected).toEqual(questions);
  });
  it("getQuestionById()", async () => {
    let validQuestion1 = {
      subject: "Math",
      title: "Calc Hw",
      date: new Date(),
      author: "Matt",
      body: "please help",
      votes: 10,
      comments: 10,
    };

    await addQuestion(validQuestion1, "Matt");

    let expected = await Question.find({ subject: "Math" });
    let questions = await findQuestionById(expected[0]._id);
    expect(expected[0]).toEqual(questions);
  });
  it("changeCommentAmount()", async () => {
    let validQuestion1 = {
      subject: "Math",
      title: "Calc Hw",
      date: new Date(),
      author: "Matt",
      body: "please help",
      votes: 10,
      comments: 10,
    };

    await addQuestion(validQuestion1, "Matt");

    let expected = 20;
    let question = await Question.find({ subject: "Math" });
    changeCommentAmount(question[0]._id, 20);
    question = await Question.find({ subject: "Math" });
    expect(expected).toEqual(question[0].comments);

    //catch error
    try {
      changeCommentAmount(question[0]._id, ["hello"]);
    } catch (error) {
      expect(error).toBeInstanceOf(mongoose.Error.CastError);
      expect(error.errors.completed).toBe();
    }
  });
});
