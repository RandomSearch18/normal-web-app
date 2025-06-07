export interface ResultOutcome {
  normalisationLevel: 0 | 1 | 2 | 3
  recommendedAction?: string
}

export interface QuestionOutcome {
  questionId: string
}

export type Outcome = ResultOutcome | QuestionOutcome

export interface Question {
  id: string
  title: string
  description: string
  outcomes: {
    yes: Outcome
    no: Outcome
  }
}
