import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import UserSignUpPage from "../components/UserSignUpPage";
import CreatorSignUpPage from "../components/CreatorSignUpPage";
import SignIn from "../components/LoginPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/user/register" element={<UserSignUpPage />} />
      <Route path="/creator/register" element={<CreatorSignUpPage />} />
      <Route path="/login" element={<SignIn />} />
    </Route>
  )
);

export default router;
