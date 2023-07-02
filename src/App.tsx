import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/home-page/Home";
import About from "./components/about-page/About";
import Layout from "./components/Layout/Layout";
import HowTo from "./components/how/HowTo";
import Sign from "./components/sign in/Sign";
import SignUp from "./components/sign-Up/SignUp";
import Search from "./components/search/Search";
import{CircleArrow as ScrollUpButton }from "react-scroll-up-button";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/how" element={<HowTo />} />
      <Route path="/signIn" element={<Sign />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/search" element={<Search />} />
    </Route>
  )
);


function App() {
  return (
    <div className="App">
      <ScrollUpButton />
          <RouterProvider router={router} />
    </div>
  );
}

export default App;
