import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const publicRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<>Error occurred</>}>
      <Route index element={<h1>Here</h1>}></Route>
    </Route>,
  ),
);

export default publicRouter;
