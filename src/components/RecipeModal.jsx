export default function RecipeModal({ recipe, onClose }) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
      <div className="bg-white dark:bg-gray-900 max-w-2xl w-full p-6 rounded shadow-xl overflow-y-auto max-h-[90vh] relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl text-gray-700 dark:text-gray-300"
        >
          ✖
        </button>

        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-60 object-cover rounded"
        />
        <h2 className="text-2xl font-bold mt-4">{recipe.strMeal}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {recipe.strArea} | {recipe.strCategory}
        </p>

        <div className="mt-4">
          <h3 className="font-semibold mb-1">🍽 Ingredients:</h3>
          <ul className="list-disc ml-5 space-y-1">
            {ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold mb-1">📝 Instructions:</h3>
          <p className="whitespace-pre-line leading-relaxed">
            {recipe.strInstructions}
          </p>
        </div>
      </div>
    </div>
  );
}
