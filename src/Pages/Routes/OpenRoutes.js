import Home from "../Home/Home";
import AllProducts from "../Shared/AllProducts";
import Blogs from "../Shared/Blogs";
import PortFolio from "../Shared/PortFolio";
import SingIn from "../User/SingIn";
import SingUp from "../User/SingUp";

export const openRoutes = [
  { path: "/", Component: Home },
  { path: "home", Component: Home },
  { path: "singIn", Component: SingIn },
  { path: "singUp", Component: SingUp },
  { path: "blogs", Component: Blogs },
  { path: "allProducts", Component: AllProducts },
  { path: "protFolio", Component: PortFolio },
];
