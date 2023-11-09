function fetchQuestions() {
  const promise = fetch("http://homework-helper.azurewebsites.net/questions");
  return promise;
}

function getQuestion(id) {
  const promise = fetch(
    `http://homework-helper.azurewebsites.net/questions/${id}`,
  );
  return promise;
}

export { fetchQuestions, getQuestion };
