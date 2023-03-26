import { useLocation, useRouteError } from "react-router";

export default function ErrorLogger() {
  const error = useRouteError();
  const { pathname } = useLocation();
  console.log(`ERROR(${pathname})`, error);
  return <h1>Error Logger</h1>;
}
