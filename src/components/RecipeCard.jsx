export default function RecipeCard({ recipe, onSelect }) {
  return (
    <div
      onClick={() => onSelect(recipe)}
      className="cursor-pointer bg-white dark:bg-gray-800 shadow rounded overflow-hidden transition hover:scale-[1.02] hover:shadow-lg"
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{recipe.strMeal}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {recipe.strArea} | {recipe.strCategory}
        </p>
      </div>
    </div>
  );
}
