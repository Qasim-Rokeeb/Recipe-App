export default function Header() {
  return (
    <header className="flex flex-col items-center text-center py-6">
      <h1 className="font-['Poppins'] font-bold text-4xl md:text-5xl text-gray-900 dark:text-gray-100">
        🍳 RecipeFinder
      </h1>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Discover delicious meals from around the world
      </p>
    </header>
  );
}