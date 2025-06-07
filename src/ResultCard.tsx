import { If } from "voby"

function ResultCard({
  normalisationLevel,
  recommendedAction,
}: {
  normalisationLevel: 0 | 1 | 2 | 3
  recommendedAction?: string
}) {
  const title =
    normalisationLevel === 0
      ? "Your database is not in normal form"
      : `Your database is in ${normalisationLevel}NF`

  const paragraphText = ""

  return (
    <div
      class="card w-xl bg-neutral text-neutral-content shadow-lg"
      id="result"
    >
      <div class="card-body">
        <span class="badge badge-success">Result</span>
        <h2 class="text-3xl md:text-4xl font-bold">{title}</h2>
        {/* <p class="md:text-lg">{paragraphText}</p> */}
        <If when={recommendedAction}>
          <p class="md:text-lg">
            Recommended action to improve your database:
            <br />
            {recommendedAction}
          </p>
        </If>
        <div class="mt-6">
          <button
            class="btn shrink w-full"
            title="Click to clear your responses and take the quiz again"
            onClick={() => window.location.reload()}
          >
            Take the quiz again
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultCard
