export default function RecipeCard({ recipe, onSelect }) {
  return (
    <article
      onClick={() => onSelect(recipe)}
      className="group cursor-pointer rounded-2xl bg-white/80 dark:bg-gray-800/60 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,.06)]
                 dark:shadow-[0_8px_32px_rgba(0,0,0,.2)] hover:shadow-[0_16px_48px_rgba(0,0,0,.12)]
                 dark:hover:shadow-[0_16px_48px_rgba(0,0,0,.35)]
                 transition-all duration-300 ease-out transform hover:-translate-y-1"
    >
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5 space-y-1">
        <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 leading-tight">
          {recipe.strMeal}
        </h3>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {recipe.strArea} • {recipe.strCategory}
        </p>
      </div>
    </article>
  );
}