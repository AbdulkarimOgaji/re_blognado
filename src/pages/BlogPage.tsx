import { ArrowUturnRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import BlogCard from "./HomePage/BlogCard";
import DummyBlogCard from "./HomePage/DummyBlogCard";

export default function BlogPage(): JSX.Element {
  return (
    <div className="container mx-auto my-6 min-h-screen py-20 2xl:px-60">
      <div className="mb-40">
        <h1 className="text-5xl">
          Who is Stormy Daniels? The Woman Who Brought Down the President
        </h1>
        <time className="mt-4 text-gray-700">2 days ago</time>
        <img src="/featured.jpg" alt="" className="mt-6 w-full" />
        <div className="mt-8 flex items-center justify-between">
          <span></span>
          <div className="mr-0 flex items-center gap-2 md:mr-32">
            <div className="w-10 border border-black"></div>{" "}
            <span className="-mr-1 text-gray-500">by</span>
            <Link to="" className="underline">
              Abdulkarim Ogaji
            </Link>
          </div>
          <button>
            <ArrowUturnRightIcon className="h-6 w-6 font-bold text-gray-500" />
          </button>
        </div>
        <div className="mt-6 flex gap-2">
          <aside className="px-4">
            {" "}
            <div className="mb-6 flex justify-center">
              <span className="inline-block whitespace-nowrap rounded-pill bg-primary py-2.5 px-6 text-base uppercase tracking-insane text-white md:text-xl">
                Smart reads
              </span>
            </div>
            <div className="flex max-w-xs flex-col gap-8">
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          </aside>
          <main className="flex-grow border-t-2 pt-6">
            <p>
              US President Donald Trump has been indicted in relation to a
              corruption case involving the porn actress Stormy Daniels. While
              the former president has multiple ongoing criminal cases
              investigating his various alleged wrongdoings, the actions of one
              woman appear to be what could finally see Trump face his day in
              court.
            </p>
          </main>
        </div>
      </div>
      <div className="flex">
        <span className="inline-block whitespace-nowrap rounded-pill bg-primary py-2.5 px-6 text-base uppercase tracking-insane text-white md:text-xl">
          Recommended
        </span>
      </div>
      <div className="blogs-grid mt-8">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <DummyBlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <DummyBlogCard />
      </div>
    </div>
  );
}
