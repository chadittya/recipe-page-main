import { Young_Serif } from "next/font/google";

const youngSerif = Young_Serif({ subsets: ["latin"], weight: ["400"] });

const Ingredients = () => {
  return (
    <>
    <h2 className={`${youngSerif.className} text-3xl text-brown-800 mb-4`}>Ingredients</h2>
        <ul className="list-disc list-inside text-stone-600 mb-8">
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
        </ul>
    </>
  )
}

export default Ingredients