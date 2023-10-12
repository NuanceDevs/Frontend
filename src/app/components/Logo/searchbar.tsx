import React, { useState } from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 p-2 rounded-l-md"
      />
      <button className="bg-blue-500 text-white p-2 rounded-r-md">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
