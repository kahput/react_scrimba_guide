import { useEffect, useRef, useState } from "react"
import IngredientsList from "./IngredientsList"
import GeminiRecipe from "./GeminiRecipe";
import { getRecipeFromGemini } from "../ai";


function Main() {
  const [ingredients, setIngredients] = useState(["chicken", "rice", "eggs", "all the main spices"])
  const [recipe, setRecipe] = useState("");
  let recipeSection = useRef(null);
  console.log(recipeSection);

  useEffect(() => {
    if (recipeSection.current) {
      recipeSection.current.scrollIntoView({
        behavior: "smooth"
      });
    }

  }, [recipe])

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
      {ingredients.length ? <IngredientsList ingredients={ingredients} onClick={getRecipe} ref={recipeSection} /> : null}
      {recipe ? <GeminiRecipe recipe={recipe} /> : undefined}
    </main>
  )
}

export default Main;
