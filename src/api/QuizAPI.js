export default class QuizAPI {
  static async fetchQuiz(quizId) {
    const response = await fetch(`http://localhost:8080/quizzes/${quizId}`, {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      mode: "cors",
      method: "GET",
    });

    if (response.status >= 400) {
      throw new Error(
        `failed to fetch quiz (quiz_id: ${quizId}, status: ${response.status} [${response.statusText}])`
      );
    }

    const body = await response.json();
    return { response, body };
  }

  static async fetchQuizzes() {
    const response = await fetch(`http://localhost:8080/quizzes`, {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      mode: "cors",
      method: "GET",
    });

    if (response.status >= 400) {
      throw new Error(
        `failed to fetch quizzes (status: ${response.status} [${response.statusText}])`
      );
    }

    const body = await response.json();
    return { response, body };
  }

  static async postQuiz(payload) {
    const response = await fetch(`http://localhost:8080/quizzes`, {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      mode: "cors",
      method: "POST",
      body: JSON.stringify(payload),
    });

    if (response.status >= 400) {
      throw new Error(`failed to post quiz (status: ${response.status} [${response.statusText}])`);
    }

    const body = await response.json();
    return { response, body };
  }
}
