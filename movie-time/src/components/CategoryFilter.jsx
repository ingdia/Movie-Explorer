import React from "react";

export default function CategoryFilter({ onSelectCategory }) {
  const categories = ["Animation", "Action", "Drama", "Comedy", "Fantasy"];

  return (
    <div className="grid  grid-cols-3 md:grid-cols-6 gap-4 justify-center mt-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className="px-4 py-2 border border-green-600 rounded-full text-white hover:bg-green-600 transition"
        >
          {cat}
        </button>
      ))}
      <button
        onClick={() => onSelectCategory("")}
        className="px-4 py-2 border border-gray-500 rounded-full text-white hover:bg-gray-600 transition"
      >
        All
      </button>
    </div>
  );
}
