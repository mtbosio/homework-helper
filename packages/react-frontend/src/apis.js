const headers = new Headers();
headers.append("Content-Type", "application/json");

var url;

if (process.env.REACT_APP_IS_LOCAL) {
  url = "http://localhost:8000";
} else {
  url = "https://homework-helper.azurewebsites.net";
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
  const promise = fetch(`${url}/questions/${id}`);
  return promise;
}

function postQuestion(question, credential) {
  const promise = fetch(`${url}/questions`, {
    method: "POST",
    headers: { "Content-type": "application/json", "Authorization": `Bearer ${credential}` },
    body: JSON.stringify(question)
  });
  return promise;
}

function postComment(comment, questionID, credential) {
  const promise = fetch(`${url}/questions/${questionID}/comments`, {
    method: "POST",
    headers: { "Content-type": "application/json", "Authorization": `Bearer ${credential}` },
    body: JSON.stringify(comment)
  });
  return promise;
}

function verifyCredentials(credential) {
  const promise = fetch(`${url}/verifyCredentials`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ credential: credential }),
  });
  return promise;
}

export {
  fetchComments,
  fetchQuestions,
  fetchQuestionsByTitle,
  getQuestion,
  postQuestion,
  postComment,
  verifyCredentials,
};
