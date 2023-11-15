const headers = new Headers();
headers.append("Content-Type", "application/json");

var url;

if (process.env.REACT_APP_IS_LOCAL) {
  url = "http//:localhost:8000";
} else {
  url = "https://homework-helper.azurewebsites.net";
}
function fetchQuestions() {
  const promise = fetch(url + "/questions");
  return promise;
}

function getQuestion(id) {
  const promise = fetch(url + `/questions/${id}`);
  return promise;
}

export { fetchQuestions, getQuestion };
