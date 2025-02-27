import PropTypes from "prop-types"

function IngredientsList(props) {
  return (
    <section>
      <h2 >Ingredients on hand:</h2>
      <div className="ingredient-list-box">
        <ul className="ingredients-list" aria-live="polite">
          {props.ingredients.map((element) => {
            return <li key={element}>{element}</li>
          })}
        </ul>
      </div>

      {props.ingredients.length >= 3 ? <div className="get-recipe-container">
        <div ref={props.ref}>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button onClick={props.onClick}>Get a recipe</button>
      </div> : null}
    </section>

  )
}

IngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  ref: PropTypes.object
};

export default IngredientsList;
