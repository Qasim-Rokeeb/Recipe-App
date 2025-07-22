import { X } from "lucide-react";
import { useEffect } from "react";

export default function RecipeModal({ recipe, onClose }) {
  /* 1.  Guard: don’t render if no recipe is passed */
  if (!recipe) return null;

  /* 2.  Build ingredients list safely */
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = recipe[`strIngredient${i}`];
    const meas = recipe[`strMeasure${i}`];
    if (ing?.trim()) ingredients.push(`${meas} ${ing}`.trim());
  }

  /* 3.  Close on Escape key */
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="recipe-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm animate-fade-in"
      />

      {/* Modal surface */}
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden animate-scale-in flex flex-col">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 p-2 rounded-full text-gray-600 dark:text-gray-300 bg-white/40 dark:bg-gray-800/40 hover:bg-white/80 dark:hover:bg-gray-700/80 transition"
        >
          <X size={20} />
        </button>

        {/* Hero image */}
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-60 object-cover"
        />

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {/* Title + tags */}
          <header>
            <h2 id="recipe-title" className="text-3xl font-bold font-poppins text-gray-900 dark:text-gray-100">
              {recipe.strMeal}
            </h2>
            <div className="mt-2 flex gap-2">
              <span className="px-3 py-1 text-sm rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200">
                {recipe.strArea}
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-sky-100 dark:bg-sky-900/60 text-sky-800 dark:text-sky-200">
                {recipe.strCategory}
              </span>
            </div>
          </header>

          {/* Ingredients */}
          <section>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
              <span>🥕</span> Ingredients
            </h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300 columns-2 sm:columns-3 gap-x-6">
              {ingredients.map((item, idx) => (
                <li key={idx} className="break-inside-avoid">
                  • {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Instructions */}
          <section>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
              <span>📝</span> Instructions
            </h3>
            <p className="mt-2 text-sm leading-relaxed whitespace-pre-line text-gray-700 dark:text-gray-300">
              {recipe.strInstructions}
            </p>
          </section>
        </div>
      </div>

      {/* Inline key-frame helpers */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scale-in {
          from { transform: scale(.94); opacity: 0; }
          to   { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in  { animation: fade-in .25s ease-out forwards; }
        .animate-scale-in { animation: scale-in .25s ease-out forwards; }
      `}</style>
    </div>
  );
}