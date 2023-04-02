import BlogCard from "./BlogCard";
import DeepDivesSlider from "./DeepDivesSlider";
import DummyBlogCard from "./DummyBlogCard";

export default function HomePage(): JSX.Element {
  return (
    <div className="container my-6 mx-auto">
      <section
        id="featured-blogs"
        className="mb-20 flex flex-wrap gap-6 px-8 md:flex-nowrap">
        <div className="w-full md:w-7/12">
          <div className="w-full">
            <img src="/featured.jpg" className="mb-4 w-full" alt="image" />
            <h3 className="mb-2 text-2xl font-semibold xl:text-3xl">
              Indigenous Leaders Celebrate the Wording of the Voice to
              Parliament Referendum
            </h3>
            <p className="text-gray-500">
              The Australian people have something to get behind. We know this
              is the pathway to a better future.
            </p>
          </div>
        </div>
        <div className="w-full md:w-5/12">
          <div className="mb-4 w-full">
            <img src="/featured.jpg" className="mb-4 w-full" alt="image" />
            <h3 className="mb-2 text-2xl font-semibold">
              Indigenous Leaders Celebrate the Wording of the Voice to
              Parliament Referendum
            </h3>
            <p className="text-gray-500">
              The Australian people have something to get behind. We know this
              is the pathway to a better future.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 xl:flex-nowrap">
            <div className="w-full">
              <img src="/featured.jpg" className="mb-4 w-full" alt="image" />
              <h3 className="mb-2 text-2xl font-semibold">
                Indigenous Leaders Celebrate the Wording of the Voice to
                Parliament Referendum
              </h3>
              <p className="text-gray-500">
                The Australian people have something to get behind. We know this
                is the pathway to a better future.
              </p>
            </div>
            <div className="w-full">
              <img src="/featured.jpg" className="mb-4 w-full" alt="image" />
              <h3 className="mb-2 text-2xl font-semibold">
                Indigenous Leaders Celebrate the Wording of the Voice to
                Parliament Referendum
              </h3>
              <p className="text-gray-500">
                The Australian people have something to get behind. We know this
                is the pathway to a better future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="deep-dives" className="mb-20">
        <div className="mb-8 flex items-center gap-4 md:-ml-6">
          <div className="block flex-grow border md:hidden"></div>
          <span className="whitespace-nowrap rounded-pill bg-primary py-2.5 px-6 text-base uppercase tracking-insane text-white md:text-xl">
            Deep Dives
          </span>
          <div className="flex-grow border"></div>
        </div>
        <DeepDivesSlider />
      </section>

      <section id="recent" className="mb-20">
        <div className="mb-8 flex items-center gap-4 md:-ml-6">
          <div className="block flex-grow border md:hidden"></div>
          <span className="whitespace-nowrap rounded-pill bg-primary py-2.5 px-6 text-base uppercase tracking-insane text-white md:text-xl">
            Recent
          </span>
          <div className="flex-grow border"></div>
        </div>
        <div className="blogs-grid">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <DummyBlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <DummyBlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <DummyBlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>
    </div>
  );
}
