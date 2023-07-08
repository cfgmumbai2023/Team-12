import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import UserSignUpPage from "../components/UserSignUpPage";
import CreatorSignUpPage from "../components/CreatorSignUpPage";
import SignIn from "../components/LoginPage";
import { ChannelDetail, VideoDetail, SearchFeed,Navbar, Feed } from '../components';
import { RootLayout } from "../components/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/register" element={<UserSignUpPage />} />
      <Route path="/creator/register" element={<CreatorSignUpPage />} />
      <Route path="/login" element={<SignIn />} />
      <Route exact path='/user' element={<Feed />} />
    <Route path='/user/video/:id' element={<VideoDetail />} />
    <Route path='/user/channel/:id' element={<ChannelDetail />} />
    <Route path='/user/search/:searchTerm' element={<SearchFeed />} />
    </Route>

  )
);

export default router;
