import Image from "next/image"
import SearchBar from "./Search"
import React from "react"

const Navbar = () => {
  return (
    <nav className="px-2 sm:px-4 py-2.5 rounded h-32 z-10">
      <div className="container md:flex flex-wrap items-center md:justify-between mx-auto">
        <a href="#" className="flex items-center">
          <Image src="/logo.png" width="100" height="54" />
        </a>
        <div
          className="w-auto md:block md:w-auto py-5 h-32"
          id="navbar-default"
        >
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar
