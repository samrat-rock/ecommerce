"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    
    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-100 rounded-md flex-1 p-2"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
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
