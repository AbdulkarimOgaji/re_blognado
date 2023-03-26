import { Link } from "react-router-dom";

export default function NavBar(): JSX.Element {
  return (
    <header className="bg-red-400">
      <div>Disclosure section</div>
      <div className="container mx-auto flex justify-between">
        <nav className="flex flex-grow justify-between border-2 bg-blue-300">
          <h1 className="text-3xl">Logo</h1>
          <ul>
            <li>
              <Link to="/">Culture</Link>
            </li>
            <li>
              <Link to="/">Entertainment</Link>
            </li>
            <li>
              <Link to="/">Music</Link>
            </li>
            <li>
              <Link to="/">Death</Link>
            </li>
          </ul>
        </nav>
        <div className="border border-red-500"></div>
      </div>
    </header>
  );
}
