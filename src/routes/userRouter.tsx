import ErrorLogger from "@/components/ErrorLogger";
import PublicLayout from "@/layouts/PublicLayout";
import HomePage from "@/pages/HomePage";
import UserProfilePage from "@/pages/User/Profile";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const userRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorLogger />} element={<PublicLayout />}>
      <Route index element={<HomePage />}></Route>
      <Route path="/profile" element={<UserProfilePage />}></Route>
    </Route>,
  ),
);

export default userRouter;
