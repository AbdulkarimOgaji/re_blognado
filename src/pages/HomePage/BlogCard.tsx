import { Link } from "react-router-dom";

export default function BlogCard(): JSX.Element {
  return (
    <Link to={"/blogs/slug"} className="block w-full">
      <div className="relative mb-4 h-[142px] w-full after:absolute after:top-0 after:left-0 after:block after:h-full after:w-full after:bg-white after:opacity-0 after:duration-200 hover:after:opacity-25">
        <img
          src="/featured.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <h4 className="text-lg font-semibold">
        Is Uber’s Car share Better Than a Regular Ol’ Car Rental? We
        Investigated
      </h4>
    </Link>
  );
}
