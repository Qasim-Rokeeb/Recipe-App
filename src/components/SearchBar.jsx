export default function SearchBar({ query, setQuery }) {
  return (
    <label className="relative block w-full max-w-xl mx-auto">
      <span className="sr-only">Search recipes</span>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes (e.g. pasta, chicken)"
        className="w-full pl-12 pr-4 py-3.5 rounded-full border border-gray-300/60
                   dark:border-gray-600/60 bg-gray-50/80 dark:bg-gray-800/50
                   backdrop-blur-md focus:outline-none focus:ring-2
                   focus:ring-emerald-400 focus:border-emerald-400
                   transition-all duration-200 text-gray-800 dark:text-gray-100
                   placeholder-gray-400 dark:placeholder-gray-500"
      />
      {/* icon */}
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </label>
  );
}