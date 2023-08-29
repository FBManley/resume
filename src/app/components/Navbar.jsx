import React from "react";
import Link from "next/link";
// q. why am I getting a 404 error when I click on the links in the navbar?
// a. You need to add the href attribute to the Link component. For example: <Link href="/">Home</Link>
// q. i did that and it still doesn't work

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Portfolio</h1>
        <ul className="space-x-4">
          <li className="inline-block">
            <Link className="text-blue-500" href="/">
              Home
            </Link>
          </li>
          <li className="inline-block">
            <Link className="text-blue-500" href="/Projects">
              Projects
            </Link>
         
          </li>
          <li className="inline-block">
            <Link className="text-blue-500" href="/resume">
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
