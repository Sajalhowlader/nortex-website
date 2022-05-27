import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Header from "./Pages/Shared/Header";
import { openRoutes } from "./Pages/Routes/OpenRoutes";
import Footer from "./Pages/Shared/Footer";
import Protected from "./Pages/Routes/Protected";
import { closeRoutes } from "./Pages/Routes/CloseRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrder from "./Pages/Dashboard/MyOrder";
import Feedback from "./Pages/Dashboard/Feedback";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Users from "./Pages/Dashboard/Users";
import AdminProtected from "./Pages/Routes/AdminProtected";
import AddProduct from "./Pages/Dashboard/AddProduct";
import ManageProduct from "./Pages/Dashboard/ManageProduct";

function App() {
  return (
    <div className="styles">
      <Header />
      <Routes>
        {openRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />}></Route>
        ))}

        <Route element={<Protected />}>
          {closeRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />}></Route>
          ))}
        </Route>
        <Route element={<Protected />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="myOrder" element={<MyOrder />} />
            <Route path="review" element={<Feedback />} />
            <Route path="myProfile" element={<MyProfile />} />
            <Route element={<AdminProtected />}>
              <Route path="users" element={<Users />} />
              <Route path="addProduct" element={<AddProduct />} />
              <Route path="manageProduct" element={<ManageProduct />} />
            </Route>
          </Route>
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
