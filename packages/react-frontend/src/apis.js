function fetchQuestions() {
  const promise = fetch("https://homework-helper.azurewebsites.net/questions");
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
