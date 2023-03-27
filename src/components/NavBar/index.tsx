import { Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { Disclosure, Transition } from "@headlessui/react";
import { useState } from "react";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";

export default function NavBar(): JSX.Element {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="pt-4">
      <div className="mb-4 text-center">
        <Disclosure>
          <Disclosure.Button className="tracking-[0.7rem]">
            Abdulkarim <ChevronDownIcon className="inline h-6 w-6" />
          </Disclosure.Button>
          <Transition
            enter="transition-all ease duration-200"
            enterFrom="max-h-0 opacity-0"
            enterTo="max-h-[50px] opacity-100"
            leave="transition-all ease duration-200"
            leaveFrom="max-h-[50px] opacity-100"
            leaveTo="max-h-0 opacity-0">
            <Disclosure.Panel
              as="ul"
              className="mx-auto mt-2 flex max-w-sm flex-wrap gap-x-12 gap-y-2 text-gray-500">
              <li>
                <a
                  href="https://abdulkarimogaji.vercel.app"
                  className="duration-100 hover:text-black">
                  PORTFOLIO
                </a>
              </li>
              <li>
                <a
                  href="https://abdulkarimogaji.vercel.app"
                  className="duration-100 hover:text-black">
                  BLOGNADO
                </a>
              </li>
              <li>
                <a
                  href="https://abdulkarimogaji.vercel.app"
                  className="duration-100 hover:text-black">
                  FABRIC-JS
                </a>
              </li>
            </Disclosure.Panel>
          </Transition>
        </Disclosure>
      </div>
      <div className="container mx-auto flex justify-between">
        <nav className="flex flex-grow items-center justify-between">
          <h1 className="whitespace-nowrap text-4xl font-semibold">
            THE LATCH
          </h1>
          <div className="flex items-center gap-24">
            <ul className="hidden items-center gap-24 xl:flex">
              <li>
                <Link to="/" className="duration-100 hover:text-primary-dark">
                  Culture
                </Link>
              </li>
              <li>
                <Link to="/" className="duration-100 hover:text-primary-dark">
                  Entertainment
                </Link>
              </li>
              <li>
                <Link to="/" className="duration-100 hover:text-primary-dark">
                  Music
                </Link>
              </li>
              <li>
                <Link to="/" className="duration-100 hover:text-primary-dark">
                  Games
                </Link>
              </li>
              <button className="rounded-pill bg-primary px-4 py-2 text-white">
                Subscribe
              </button>
            </ul>
            <div className="flex gap-16">
              <button onClick={() => setSearchOpen(true)}>
                <MagnifyingGlassIcon className="h-6 w-6" />
              </button>
              <button onClick={() => setSideBarOpen(true)}>
                <Bars3Icon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>
      </div>
      <SideBar isOpen={sideBarOpen} closeModal={() => setSideBarOpen(false)} />
      <SearchBar isOpen={searchOpen} closeModal={() => setSearchOpen(false)} />
    </header>
  );
}
