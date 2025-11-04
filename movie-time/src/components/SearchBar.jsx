import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // send text to Home
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleSearch}
      placeholder="Search movies..."
      className="p-2  md:mt-30 border-2 border-green-800 text-gray-100 mt-2 rounded-full md:w-[300px]"
    />
  );
}
