export interface Outcome {
  questionId: string
}

export interface Question {
  id: string
  title: string
  description: string
  outcomes: {
    yes: Outcome
    no: Outcome
  }
}
