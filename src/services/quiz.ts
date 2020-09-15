import { HttpClient } from '../infra/httpClient'
import { QuizQuestionList } from '../store/types'

const httpClient = new HttpClient('https://opentdb.com/api.php')

export function fetchQuizQuestions(difficulty: string, quantity: number) {
  return new Promise<QuizQuestionList>((resolve, reject) => {
    const url = `?amount=${quantity}&difficulty=${difficulty}&type=boolean`
    httpClient.instance
      .get<QuizQuestionList>(url)
      .then((data) => resolve(data))
      .catch((error) => reject(error))
  })
}
