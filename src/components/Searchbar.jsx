"use client";

import Image from "next/image";
import React, { useState } from "react";

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // Add search function here (e.g., API call or routing logic)
  };

  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-100 rounded-md flex-1 p-2"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Search here..."
        className="flex-1 bg-transparent outline-none p-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="cursor-pointer">
        <Image src="/search.png" alt="Search" width={26} height={26} />
      </button>
    </form>
  );
}

export default Searchbar;
