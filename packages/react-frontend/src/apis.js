const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");

function fetchQuestions() {
  const promise = fetch("https://homework-helper.azurewebsites.net/questions", {
    method: "GET",
    mode: "cors",
    headers: headers,
  });
  return promise;
}

function getQuestion(id) {
  const promise = fetch(
    `https://homework-helper.azurewebsites.net/questions/${id}`,
  );
  return promise;
}

function postQuestion(question) {
  console.log(JSON.stringify(question));
  const promise = fetch("http://localhost:8000/questions", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(question),
  });
  return promise;
}

export { fetchQuestions, getQuestion, postQuestion };
