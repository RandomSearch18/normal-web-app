import { If } from "voby"

function getTitle(normalisationLevel: 0 | 1 | 2 | 3): string {
  if (normalisationLevel === 0) {
    return "Your database is not normalised 🙁"
  }
  if (normalisationLevel === 1) {
    return "Your database is in first normal form (1NF)"
  }
  if (normalisationLevel === 2) {
    return "Your database is in second normal form (2NF)"
  }
  if (normalisationLevel === 3) {
    return "Your database is in third normal form (3NF)"
  }
  return "[Error: Invalid normalisation level]"
}

function ResultCard({
  normalisationLevel,
  recommendedAction,
}: {
  normalisationLevel: 0 | 1 | 2 | 3
  recommendedAction?: string
}) {
  const paragraphText = ""
  const badgeStyle = normalisationLevel === 0 ? "badge-error" : "badge-success"

  return (
    <div
      class="card w-xl bg-neutral text-neutral-content shadow-lg"
      id="result"
    >
      <div class="card-body">
        <span class={`badge ${badgeStyle}`}>Result</span>
        <h2 class="text-3xl md:text-4xl font-bold">
          {getTitle(normalisationLevel)}
        </h2>
        {/* <p class="md:text-lg">{paragraphText}</p> */}
        <If when={recommendedAction}>
          <p class="md:text-lg">Tip to improve your database:</p>
          <div class="alert md:text-lg">
            <span>{recommendedAction}</span>
          </div>
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
