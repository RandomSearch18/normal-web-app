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

export const questions: Question[] = [
  {
    id: "unique_field_names",
    title: "Are all field names unique?",
    description: "All field names in your table should have unique names.",
    outcomes: {
      yes: { questionId: "TODO" },
      no: {
        normalisationLevel: 0,
      },
    },
  },
]

export function getQuestion(id: string): Question | undefined {
  return questions.find((q) => q.id === id)
}
