import { $, $$, For } from "voby"
import QuestionCard from "./QuestionCard"
import { Question } from "./question"

const questions: Question[] = [
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

function App(): JSX.Element {
  const currentQuestions = $([questions[0]])

  return (
    <>
      <h1 class="flex-center text-center text-6xl md:text-7xl lg:text-8xl py-8 pb-20">
        Database normalisation
      </h1>
      <main class="flex-center">
        <For values={currentQuestions}>
          {(question, index) => (
            <QuestionCard index={() => $$(index) + 1} question={question} />
          )}
        </For>
      </main>
    </>
  )
}

export default App
