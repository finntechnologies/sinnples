import React from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <header className="flex items-center justify-between bg-gray-800 text-purple-800 h-20 px-4">
      <h1 className="text-lg font-bold cursor-pointer" onClick={handleClick}>
        Sinnples
      </h1>
      <button
        className="px-4 py-2 bg-white text-purple-800 rounded-md"
        onClick={() => router.push("/add")}
      >
        New
      </button>
    </header>
  );
};

export default Header;
