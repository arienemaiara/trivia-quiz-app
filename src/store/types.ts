import { Action } from 'redux'

export interface QuizQuestion {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export interface QuestionAnswer {
  questionIndex: number
  correct: boolean
}

export interface QuizQuestionList {
  results: QuizQuestion[]
}

export interface ApplicationState {
  quizQuestionList: QuizQuestion[]
  questionsQuantity: number
  answers: QuestionAnswer[]
  difficulty: string
  currentQuestionIndex: number
  score: number
  loading: boolean
}

export interface LoadQuizRequest extends Action {
  type: 'getQuizQuestionsRequest'
}

export interface LoadQuizSuccess extends Action {
  type: 'getQuizQuestionsSuccess'
  questions: QuizQuestion[]
}

export interface LoadQuizError extends Action {
  type: 'getQuizQuestionsError'
}

export interface SetDifficulty extends Action {
  type: 'setDifficulty'
  difficulty: string
}

export interface UpdateQuestionAnswer extends Action {
  type: 'updateQuestionAnswer'
  answer: QuestionAnswer
}

export interface UpdateScore extends Action {
  type: 'updateScore'
  score: number
}

export interface SetNextQuestion extends Action {
  type: 'setNextQuestion'
}

export interface RestartGame extends Action {
  type: 'restartGame'
}

export type ApplicationAction =
  | LoadQuizRequest
  | LoadQuizSuccess
  | LoadQuizError
  | SetDifficulty
  | UpdateQuestionAnswer
  | UpdateScore
  | SetNextQuestion
  | RestartGame
