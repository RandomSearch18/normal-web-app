import { currentQuestions } from "./App"

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
  description?: string
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
      yes: { questionId: "primary_key" },
      no: {
        normalisationLevel: 0,
      },
    },
  },
  {
    id: "primary_key",
    title: "Does the table have a primary key?",
    outcomes: {
      yes: { questionId: "values_have_same_domain" },
      no: {
        normalisationLevel: 0,
        recommendedAction:
          "Add a primary key to the table, or create a composite key using multiple fields.",
      },
    },
  },
  {
    id: "values_have_same_domain",
    title: "Are all the values from the same domain?",
    description:
      "If different types of data are stored in the same field, the values are not from the same domain.",
    outcomes: {
      yes: { questionId: "atomic_values" },
      no: {
        normalisationLevel: 0,
        recommendedAction:
          "Split fields that contain different types of data into separate fields.",
      },
    },
  },
  {
    id: "atomic_values",
    title: "Are all values atomic?",
    description:
      'Values are atomic if there is only a single value in each "cell" (i.e. intersection of field and record).',
    outcomes: {
      yes: { questionId: "single_purpose_tables" },
      no: {
        normalisationLevel: 0,
        recommendedAction:
          "Split the values up into atomic values by creating new records (note that the new records will have some repeated values, causing redundancy).",
      },
    },
  },
  {
    id: "single_purpose_tables",
    title: "Does each table serve a single purpose?",
    description: "",
    outcomes: {
      yes: { questionId: "no_partial_dependencies" },
      no: {
        normalisationLevel: 1,
        recommendedAction:
          "Split the table into multiple tables, create relationships between them, and fix any many-to-many relationships that have arisen by creating a linking table..",
      },
    },
  },
  {
    id: "partial_dependencies",
    title: "Does the table contain any partial dependencies?",
    description:
      "A partial dependency can occur when using composite keys. It means that a field is only dependent on part of the primary key.",
    outcomes: {
      yes: {
        normalisationLevel: 1,
        recommendedAction:
          "Split the table into multiple tables (with relationships). This also removes redundancy. Any many-to-many relationships that arise must be fixed by creating a linking table.",
      },
      no: { questionId: "no_transitive_dependencies" },
    },
  },
  {
    id: "no_transitive_dependencies",
    title: "Does the table contain any transitive dependencies?",
    description:
      "A transitive dependency is when a field depends on a non-primary key field. In other words, all keys should depend only on the primary key.",
    outcomes: {
      no: {
        normalisationLevel: 3,
      },
      yes: {
        normalisationLevel: 2,
        recommendedAction:
          "Split the table into multiple tables as appropriate to remove the transitive (non-key) dependencies.",
      },
    },
  },
]

export function getQuestion(id: string): Question | undefined {
  return questions.find((q) => q.id === id)
}
