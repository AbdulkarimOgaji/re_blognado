import publicRouter from "@/routes/publicRouter";
import { RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import adminRouter from "./routes/adminRouter";
import userRouter from "./routes/userRouter";

function renderRoutes(role: string) {
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
  return (
    <div className="">
      <RouterProvider
        router={true ? renderRoutes("none") : renderRoutes("user")}
        fallbackElement={<h1>Fallback element</h1>}
      />
    </div>
  );
}
