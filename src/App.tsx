import { $ } from "voby"

function App(): JSX.Element {
  return (
    <>
      <h1 class="flex-center text-center text-6xl md:text-7xl lg:text-8xl py-8 pb-20">
        Database normalisation
      </h1>
      <main class="flex-center">
        <div class="card w-lg bg-base-200 shadow-lg">
          <div class="card-body">
            <span class="badge badge-info">1&#xFE0F;&#x20E3; Question 1</span>
            <h2 class="text-3xl font-bold">Are all field names unique?</h2>
            <p class="">
              All field names in your table should have unique names.
            </p>
            <div class="mt-6 flex gap-5">
              <button class="btn btn-error shrink w-full">No</button>
              <button class="btn btn-success shrink w-full">Yes</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
