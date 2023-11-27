const headers = new Headers();
headers.append("Content-Type", "application/json");

var url;

if (process.env.REACT_APP_IS_LOCAL) {
  url = "http://localhost:3000";
} else {
  url = "https://lemon-sand-0ec997c1e.4.azurestaticapps.net/";
}

function fetchQuestions() {
  const promise = fetch(`${url}/questions`, { credentials: "same-origin" });
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

export { fetchQuestions, fetchComments, getQuestion, postQuestion, login, logout };
