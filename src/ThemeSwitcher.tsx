// Note: this component was mostly written by GitHub Copilot.
function ThemeSwitcher() {
  return (
    <div class="join @max-xs:join-vertical">
      <input
        type="radio"
        name="theme"
        aria-label="System"
        class="btn join-item"
        checked={!document.documentElement.hasAttribute("data-theme")}
        onClick={() => {
          document.documentElement.removeAttribute("data-theme")
          localStorage.removeItem("theme")
        }}
      />
      <input
        type="radio"
        name="theme"
        aria-label="Light"
        class="btn join-item"
        checked={
          document.documentElement.getAttribute("data-theme") === "caramellatte"
        }
        onClick={() => {
          document.documentElement.setAttribute("data-theme", "caramellatte")
          localStorage.setItem("theme", "caramellatte")
        }}
      />
      <input
        type="radio"
        name="theme"
        aria-label="Dark"
        class="btn join-item"
        checked={
          document.documentElement.getAttribute("data-theme") === "night"
        }
        onClick={() => {
          document.documentElement.setAttribute("data-theme", "night")
          localStorage.setItem("theme", "night")
        }}
      />
    </div>
  )
}

export default ThemeSwitcher
