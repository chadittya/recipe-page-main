import RecipeImage from "./RecipeImage";
import RecipeTitle from "./RecipeTitle";
import RecipeDescription from "./RecipeDescription";
import PreparationTime from "./PreparationTime";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import NutricionFacts from "./NutricionFacts";

const Main = () => {
  return (
    <main className="min-h-screen flex justify-center items-center p-4">
      <div className="bg-white max-w-4xl rounded-3xl p-10 shadow-lg">
        <RecipeImage />
        <RecipeTitle />
        <RecipeDescription />
        <PreparationTime />
        <Ingredients />
        <Instructions />
        <NutricionFacts />        
      </div>
    </main>
  )
}

export default Main