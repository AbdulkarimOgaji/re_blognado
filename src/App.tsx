import publicRouter from "@/routes/publicRouter";
import { useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import adminRouter from "./routes/adminRouter";
import userRouter from "./routes/userRouter";
import { RootState } from "./store/store";

function renderRoutes(role: RootState["auth"]["role"]) {
  switch (role) {
  case "admin":
    return adminRouter;

  case "user":
    return userRouter;

  default:
    return publicRouter;
  }
}

if (import.meta.hot != null) {
  import.meta.hot.dispose(() => {
    publicRouter.dispose();
  });
}

export default function App(): JSX.Element {
  const authState = useSelector((state: RootState) => state.auth);

  return (
    <div className="">
      <RouterProvider
        router={
          authState.isAuthenticated
            ? renderRoutes(authState.role)
            : renderRoutes("none")
        }
        fallbackElement={<h1>Fallback element</h1>}
      />
    </div>
  );
}
