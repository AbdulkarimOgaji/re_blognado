import ErrorLogger from "@/components/ErrorLogger";
import PublicLayout from "@/layouts/PublicLayout";
import BlogPage from "@/pages/BlogPage";
import HomePage from "@/pages/HomePage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const publicRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorLogger />} element={<PublicLayout />}>
      <Route index element={<HomePage />}></Route>
      <Route path="/blogs/:slug" element={<BlogPage />}></Route>
    </Route>,
  ),
);

export default publicRouter;
