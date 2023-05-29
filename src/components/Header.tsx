import React from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <header className="flex items-center justify-between bg-blue-500 text-white h-20 px-4">
      <h1 className="text-lg font-bold cursor-pointer" onClick={handleClick}>
        Indication Guru
      </h1>
      <button
        className="px-4 py-2 bg-white text-blue-500 rounded-md"
        onClick={() => router.push("/add")}
      >
        New
      </button>
    </header>
  );
};

export default Header;
