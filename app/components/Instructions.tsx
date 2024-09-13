import { Young_Serif } from "next/font/google";

const youngSerif = Young_Serif({ subsets: ["latin"], weight: ["400"] });

const Instructions = () => {
  return (
    <>
    <h2 className={`${youngSerif.className} text-3xl text-brown-800 mb-4`}>Instructions</h2>
        <ol className="list-decimal list-inside text-stone-600 mb-8">
          <li className="mb-2">Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
          <li className="mb-2">Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.</li>
          <li className="mb-2">Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
          <li className="mb-2">Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
          <li className="mb-2">Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
          <li>Enjoy: Serve hot, with additional salt and pepper if needed.</li>
        </ol>
    </>
  )
}

export default Instructions