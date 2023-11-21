const headers = new Headers();
headers.append("Content-Type", "application/json");

var url;

if (process.env.REACT_APP_IS_LOCAL) {
  url = "http://localhost:8000";
} else {
  url = "https://homework-helper.azurewebsites.net";
}
function fetchQuestions() {
  const promise = fetch(`${url}/questions`);
  return promise;
}

function getQuestion(id) {
  const promise = fetch(`${url}/questions/${id}`);
  return promise;
}

function postQuestion(question) {
  console.log(JSON.stringify(question));
  const promise = fetch(`${url}/questions`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(question),
  });
  return promise;
}

export { fetchQuestions, getQuestion, postQuestion };
