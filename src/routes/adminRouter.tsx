import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const adminRouter = createBrowserRouter(
  createRoutesFromElements(<Route errorElement={<>Error occurred</>}></Route>),
);

export default adminRouter;
