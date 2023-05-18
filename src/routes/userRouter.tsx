import HomePage from "@/pages/HomePage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const userRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<>Error occurred</>}>
      <Route index element={<HomePage />}></Route>
    </Route>,
  ),
);

export default userRouter;
