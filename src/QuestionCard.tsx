import { FunctionMaybe } from "voby"
import { Question } from "./question"

function QuestionCard({
  index,
  question,
}: {
  index: FunctionMaybe<number>
  question: Question
}) {
  return (
    <div class="card w-xl bg-base-200 shadow-lg">
      <div class="card-body">
        <span class="badge badge-info">
          {index}&#xFE0F;&#x20E3; Question {index}
        </span>
        <h2 class="text-3xl md:text-4xl font-bold">{question.title}</h2>
        <p class="md:text-lg">{question.description}</p>
        <div class="mt-6 flex gap-5">
          <button
            class="btn btn-error shrink w-full text-lg"
            title="Answer 'No' to this question"
          >
            No
          </button>
          <button
            class="btn btn-success shrink w-full text-lg"
            title="Answer 'Yes' to this question"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
