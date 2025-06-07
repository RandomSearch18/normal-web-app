import { $ } from "voby"
import { appendFirstQuestion } from "./App"
import ThemeSwitcher from "./ThemeSwitcher"

function IntroCard() {
  const hasStarted = $(false)

  return (
    <div class="card w-xl max-w-[90vw] bg-base-200 shadow-lg" id="result">
      <div class="card-body @container">
        <h2 class="text-3xl md:text-4xl font-bold">Introduction</h2>
        <p class="md:text-lg">
          Database normalisation can be a difficult topic to wrap your head
          around, so I made this tool to present the requirements of first,
          second, and third normal form as an online quiz.
        </p>
        {/* <p class="md:text-lg">
          Source code for this tool is available on{" "}
          <a
            class="link link-primary"
            href="https://github.com/RandomSearch18/normal-web-app"
          >
            its GitHub repository
          </a>
          . Give it a star!
        </p> */}
        <p class="md:text-lg">
          <a
            class="link link-primary"
            href="https://github.com/RandomSearch18/normal-web-app"
          >
            Give it a star on GitHub
          </a>
        </p>
        <div class="mt-6 flex gap-2 items-center justify-between">
          <span class="text-lg">Switch themes</span>
          <ThemeSwitcher />
        </div>

        <div class="mt-6">
          <button
            class="btn btn-primary shrink w-full"
            title="Click to clear your responses and take the quiz again"
            onClick={() => appendFirstQuestion()}
            disabled={hasStarted}
          >
            Start the quiz
          </button>
        </div>
      </div>
    </div>
  )
}

export default IntroCard
