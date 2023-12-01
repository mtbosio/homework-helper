const headers = new Headers();
headers.append("Content-Type", "application/json");

var url;

if (process.env.REACT_APP_IS_LOCAL) {
  url = "http://localhost:3000/api";
} else {
  url = "https://lemon-sand-0ec997c1e.4.azurestaticapps.net/api";
}

function fetchQuestions() {
  const promise = fetch(`${url}/questions`, { credentials: "same-origin" });
  return promise;
}

function fetchQuestionsByTitle(title) {
  const promise = fetch(`${url}/questions?title=${title}`);
  return promise;
}

function fetchComments(questionID) {
  const promise = fetch(`${url}/questions/${questionID}/comments`);
  return promise;
}

function getQuestion(id) {
  const promise = fetch(`${url}/questions/${id}`, {
    credentials: "same-origin"});
  return promise;
}

function postQuestion(question) {
  const promise = fetch(`${url}/questions`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(question),
    credentials: "same-origin",
  });
  return promise;
}

function postComment(comment, questionID) {
  const promise = fetch(`${url}/questions/${questionID}/comments`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(comment),
  });
  return promise;
}

function login(credential) {
  return fetch(`${url}/login`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ credential: credential }),
    credentials: "same-origin",
  });
}

function logout() {
  return fetch(`${url}/logout`, {
    method: "GET",
    credentials: "same-origin",
  });
}

export {
  fetchComments,
  fetchQuestions,
  fetchQuestionsByTitle,
  getQuestion,
  postQuestion,
  postComment,
  login,
  logout
};
