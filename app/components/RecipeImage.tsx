import Image from "next/image";

const RecipeImage = () => {
  return (
    <Image
          src="/assets/images/image-omelette.jpeg"
          alt="Omelette"
          width={1440}
          height={300}
      className="rounded-xl mb-8"
    />
  )
};

export default RecipeImage