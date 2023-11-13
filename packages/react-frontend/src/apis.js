import dotenv from "dotenv";

const headers = new Headers();
headers.append("Content-Type", "application/json");
var url;
if (process.env.IS_LOCAL === true) {
  url = "http//:localhost:5000";
} else {
  url = "https://homework-helper.azurewebsites.net";
}

function fetchQuestions() {
  const promise = fetch(url + "/questions");
  return promise;
}

function getQuestion(id) {
  const promise = fetch(url + `questions/${id}`);
  return promise;
}

export { fetchQuestions, getQuestion };
