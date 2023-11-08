function fetchQuestions() {
  const promise = fetch("http://localhost:8000/questions");
  return promise;
}

function getQuestion(id) {
  const promise = fetch(`http://localhost:8000/questions/${id}`);
  return promise;
}

export { fetchQuestions, getQuestion };
