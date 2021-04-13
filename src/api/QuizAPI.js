export default class QuizAPI {
  static async fetchQuizzes() {
    const response = await fetch(`http://localhost:8080/quizzes`, {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      mode: "cors",
      method: "GET",
    });

    const result = await response.json();
    if (response.status >= 400) {
      throw new Error(
        `failed to fetch quizzes (status: ${response.status} [${response.statusText}])`
      );
    }
    return { response, body: result };
  }
}
