import RecipeCard from "./RecipeCard";

export default function RecipeGrid({ recipes, onSelect }) {
  if (!recipes.length) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400 italic">
        No recipes found. Try a different keyword.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
