import Home from "../Home/Home";
import SingIn from "../User/SingIn";
import SingUp from "../User/SingUp";

export const openRoutes = [
  { path: "/", Component: Home },
  { path: "home", Component: Home },
  { path: "singIn", Component: SingIn },
  { path: "singUp", Component: SingUp },
];
