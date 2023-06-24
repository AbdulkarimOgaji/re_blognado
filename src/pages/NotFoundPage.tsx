import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="bg-light flex min-h-screen w-full justify-center">
      <div className="mx-auto mt-32 max-w-md text-center">
        {" "}
        <h1 className="mb-3 text-3xl font-semibold">
          404: Page not found
        </h1>{" "}
        <p>
          It seems like the page you are looking for does not exist.{" "}
          <Link to={""} className="font-medium hover:text-primary">
            Go Back
          </Link>
        </p>{" "}
      </div>{" "}
    </div>
  );
}
