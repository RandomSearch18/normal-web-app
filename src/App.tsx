import { $, $$, For } from "voby"
import QuestionCard from "./QuestionCard"
import { getQuestion, Question, questions } from "./questions"
import ResultCard from "./ResultCard"

export const currentQuestions = $([questions[0]])

export function appendQuestion(id: string) {
  const question = getQuestion(id)
  if (!question) {
    throw new Error(`Question with id ${id} not found`)
  }
  currentQuestions([...currentQuestions(), question])
  setTimeout(() => {
    document.getElementById(question.id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }, 100)
  // location.hash = question.id
}

function App(): JSX.Element {
  return (
    <>
      <h1 class="flex-center text-center text-6xl md:text-7xl lg:text-8xl py-8 pb-20">
        Database normalisation
      </h1>
      <main class="flex-center">
        <div class="flex flex-col gap-8">
          <For values={currentQuestions}>
            {(question, index) => (
              <QuestionCard index={() => $$(index) + 1} question={question} />
            )}
          </For>
          <ResultCard normalisationLevel={0} />
        </div>
      </main>
    </>
  )
}

export default App
