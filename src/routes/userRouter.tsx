import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const userRouter = createBrowserRouter(
  createRoutesFromElements(<Route errorElement={<>Error occurred</>}></Route>),
);

export default userRouter;
