import ReactMarkdown from "react-markdown"
import PropTypes from "prop-types";

function GemeniRecipe(props) {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2>Chef Gemini Recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  )
}

GemeniRecipe.propTypes = {
  recipe: PropTypes.string
}

export default GemeniRecipe
