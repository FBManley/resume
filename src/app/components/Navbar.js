import Link from "next/link";

const Navbar = () => {
return (
    <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">Portfolio</h1>
      <ul className="space-x-4">
        <li className="inline-block">
          <Link className="text-blue-500" href="/">Home</Link>
        </li>
        <li className="inline-block">
          <Link className="text-blue-500" href="/projects">Projects</Link>
        </li>
        <li className="inline-block">
          <Link className="text-blue-500" href="/resume">Resume</Link>
        </li>
      </ul>
    </div>
  </nav>
);
}

export default Navbar;