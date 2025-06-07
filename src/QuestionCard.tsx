import { $, FunctionMaybe, Observable } from "voby"
import { Outcome, Question } from "./questions"
import { appendQuestion, currentResult, showResult } from "./App"

function handleQuestionOutcome(outcome: Outcome) {
  if ("questionId" in outcome) {
    appendQuestion(outcome.questionId)
  } else if ("normalisationLevel" in outcome) {
    showResult(outcome)
  }
}

function QuestionCard({
  index,
  question,
}: {
  index: FunctionMaybe<number>
  question: Question
}) {
  const selectedOption = $<"yes" | "no">(undefined)

  return (
    <div class="card max-w-xl bg-base-200 shadow-lg" id={question.id}>
      <div class="card-body">
        <span class="badge badge-info">
          {index}&#xFE0F;&#x20E3; Question {index}
        </span>
        <h2 class="text-3xl md:text-4xl font-bold">{question.title}</h2>
        <p class="md:text-lg">{question.description}</p>
        <div class="mt-6 flex gap-1 sm:gap-5">
          <button
            class={[
              "btn",
              "btn-error",
              "shrink",
              "w-full",
              "text-lg",
              () => selectedOption() === "no" && "btn-always-colored",
            ]}
            title="Answer 'No' to this question"
            disabled={() => !!selectedOption()}
            onClick={() => {
              selectedOption("no")
              handleQuestionOutcome(question.outcomes.no)
            }}
          >
            No
          </button>
          <button
            class={[
              "btn",
              "btn-success",
              "shrink",
              "w-full",
              "text-lg",
              () => selectedOption() === "yes" && "btn-always-colored",
            ]}
            title="Answer 'Yes' to this question"
            disabled={() => !!selectedOption()}
            onClick={() => {
              selectedOption("yes")
              handleQuestionOutcome(question.outcomes.yes)
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
