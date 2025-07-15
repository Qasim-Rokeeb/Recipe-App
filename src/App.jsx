import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import RecipeGrid from "./components/RecipeGrid";
import ThemeToggle from "./components/ThemeToggle";
import Header from "./components/Header";
import RecipeModal from "./components/RecipeModal";

export default function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    if (!query.trim()) return;

    const fetchRecipes = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        const data = await res.json();
        setRecipes(data.meals || []);
      } catch (err) {
        console.error(err);
        setRecipes([]);
      }
    };

    fetchRecipes();
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <Header />
          <ThemeToggle />
        </div>

        <SearchBar query={query} setQuery={setQuery} />
        <RecipeGrid
          recipes={recipes}
          onSelect={(recipe) => setSelectedRecipe(recipe)}
        />

        {selectedRecipe && (
          <RecipeModal
            recipe={selectedRecipe}
            onClose={() => setSelectedRecipe(null)}
          />
        )}
      </div>
    </div>
  );
}
