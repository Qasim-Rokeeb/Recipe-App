import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="p-2 rounded-full text-gray-600 dark:text-gray-300
                 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition"
    >
      {darkMode ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
}