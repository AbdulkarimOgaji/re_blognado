import publicRouter from "@/routes/publicRouter";
import { RouterProvider } from "react-router-dom";

if (import.meta.hot != null) {
  import.meta.hot.dispose(() => {
    publicRouter.dispose();
  });
}

export default function App(): JSX.Element {
  return (
    <div className="">
      <RouterProvider
        router={publicRouter}
        fallbackElement={<h1>Fallback element</h1>}
      />
    </div>
  );
}
