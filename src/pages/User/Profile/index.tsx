import BlogCard from "@/pages/HomePage/BlogCard";
import DummyBlogCard from "@/pages/HomePage/DummyBlogCard";
import {
  EnvelopeIcon,
  FaceSmileIcon,
  MapPinIcon,
  PaperClipIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/solid";

export default function UserProfilePage() {
  return (
    <div className="container mx-auto mt-12 flex flex-wrap gap-6">
      <div className="h-96 w-full max-w-xs">
        <div className="relative">
          <img
            src="/featured.jpg"
            alt=""
            className="mx-auto h-72 w-72 rounded-circle object-cover"
          />
          <button className="group absolute bottom-8 left-[75%] flex items-center whitespace-nowrap rounded-pill border border-gray-200 bg-white p-2 text-xs font-medium text-gray-600 hover:text-primary">
            <FaceSmileIcon className="h-5 w-5" strokeWidth={2} />
            <span className="ml-0 w-0 opacity-0 transition-all duration-75 group-hover:ml-2 group-hover:w-14 group-hover:opacity-100">
              Edit avatar
            </span>
          </button>
        </div>
        <h2 className="mt-5 text-3xl font-semibold">Abdulkarim</h2>
        <h3 className="text-2xl font-medium text-gray-400">AbdulkarimOgaji</h3>
        <button className="mt-4 w-full rounded-sm border border-gray-200 bg-gray-100 py-1 text-center font-medium text-gray-700 shadow-sm">
          Edit profile
        </button>
        <div className="mt-3 flex items-center gap-2 text-sm text-gray-700">
          <button className="flex items-center gap-1 hover:underline">
            <UserGroupIcon className="h-3.5 w-3.5" strokeWidth={2} />
            <span className="font-bold text-black">2</span>
            Followers
          </button>
          <span>.</span>
          <button className="hover:underline">
            <span className="font-bold text-black">2</span> Following
          </button>
        </div>

        <div className="mt-4 space-y-1.5 text-gray-700">
          <div className="flex items-center gap-2">
            <MapPinIcon className="h-4 w-4" strokeWidth={2} />
            Lagos, Nigeria
          </div>
          <div className="flex items-center gap-2">
            <EnvelopeIcon className="h-4 w-4" strokeWidth={2} />
            <a
              href="mailto:abdulkarimogaji002@gmail.com"
              target="_blank"
              className="hover:text-primary hover:underline" rel="noreferrer">
              abdulkarimogaji002@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <PaperClipIcon className="h-4 w-4" strokeWidth={2} />
            <a
              href="https://abdulkarimogaji.vercel.app"
              target="_blank"
              className="hover:text-primary hover:underline" rel="noreferrer">
              https://abdulkarimogaji.vercel.app
            </a>
          </div>
          <div className="flex items-center gap-2">
            <EnvelopeIcon className="h-4 w-4" strokeWidth={2} />
            <a
              href="mailto:abdulkarimogaji002@gmail.com"
              target="_blank"
              className="hover:text-primary hover:underline" rel="noreferrer">
              @twitter
            </a>
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex justify-end">
          <button className="flex items-center gap-2 whitespace-nowrap rounded-pill bg-primary px-6 py-2.5 text-base font-medium text-white md:text-xl">
            <PlusIcon className="h-5 w-5" strokeWidth={2} />
            New blog
          </button>
        </div>
        <h3 className="mt-4 text-lg font-semibold">Pinned</h3>
        <div className="blogs-grid mt-2">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <DummyBlogCard />
        </div>

        <h3 className="mt-4 text-lg font-semibold">Recent</h3>
        <div className="blogs-grid mt-2">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <DummyBlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <DummyBlogCard /> <BlogCard />
          <BlogCard />
          <BlogCard />
          <DummyBlogCard />
        </div>
      </div>
    </div>
  );
}
