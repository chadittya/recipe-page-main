import { Young_Serif } from "next/font/google";

const youngSerif = Young_Serif({ subsets: ["latin"], weight: ["400"] });

const NutricionFacts = () => {
  return (
    <>
    <h2 className={`${youngSerif.className} text-3xl text-brown-800 mb-4`}>Nutrition</h2>
        <p className="text-stone-600 mb-4">The table below shows nutritional values per serving without the additional fillings:</p>
        <table className="w-full text-stone-600 mb-8">
          <tbody>
            <tr className="border-b border-stone-150">
              <td className="py-2">Calories</td>
              <td className="py-2 font-bold">277kcal</td>
            </tr>
            <tr className="border-b border-stone-150">
              <td className="py-2">Carbs</td>
              <td className="py-2 font-bold">0g</td>
            </tr>
            <tr className="border-b border-stone-150">
              <td className="py-2">Protein</td>
              <td className="py-2 font-bold">20g</td>
            </tr>
            <tr>
              <td className="py-2">Fat</td>
              <td className="py-2 font-bold">22g</td>
            </tr>
          </tbody>
        </table>
    </>
  )
}

export default NutricionFacts