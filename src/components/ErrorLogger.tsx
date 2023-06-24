import { useRouteError } from "react-router";

export default function ErrorLogger() {
  const error = useRouteError();
  return (
    <div className="bg-light flex min-h-screen w-full justify-center">
      <div className="mx-auto mt-32 max-w-md text-center">
        {" "}
        <h1 className="mb-3 text-3xl font-semibold">An Error occurred</h1>{" "}
        <p>{(error as { data: string }).data}</p>{" "}
      </div>{" "}
    </div>
  );
}
