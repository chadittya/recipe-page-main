import { Young_Serif } from "next/font/google";

const youngSerif = Young_Serif({ subsets: ["latin"], weight: ["400"] });

const RecipeTitle = () => {
  return (
    <h1 className={`${youngSerif.className} text-4xl text-stone-900 mb-6`}>Simple Omelette Recipe</h1>

  )
}

export default RecipeTitle