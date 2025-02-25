import { useState } from "react"
import IngredientsList from "./IngredientsList"
import GeminiRecipe from "./GeminiRecipe";
import { getRecipeFromGemini } from "../ai";


function Main() {
  const [ingredients, setIngredients] = useState([])
  const [recipe, setRecipe] = useState("");

  function addIngredient(formData) {
    setIngredients((prevState) => {
      return [...prevState, formData.get("ingredient")]
    })
  }

  async function getRecipe() {
    const recipe_gen = await getRecipeFromGemini(ingredients);
    setRecipe(
      recipe_gen
    );
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          aria-label="Add ingredient"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form >
      {ingredients.length ? <IngredientsList ingredients={ingredients} onClick={getRecipe} /> : null}
      {recipe ? <GeminiRecipe recipe={recipe} /> : undefined}
    </main>
  )
}

export default Main;
