import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddProduct from "./Pages/Dashboard/AddProduct";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Feedback from "./Pages/Dashboard/Feedback";
import ManageProduct from "./Pages/Dashboard/ManageProduct";
import MyOrder from "./Pages/Dashboard/MyOrder";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Payment from "./Pages/Dashboard/Payment";
import Users from "./Pages/Dashboard/Users";
import AdminProtected from "./Pages/Routes/AdminProtected";
import { closeRoutes } from "./Pages/Routes/CloseRoutes";
import { openRoutes } from "./Pages/Routes/OpenRoutes";
import Protected from "./Pages/Routes/Protected";
import Footer from "./Pages/Shared/Footer";
import Header from "./Pages/Shared/Header";
import "./styles.css";

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
            <Route path="payment/:paymentId" element={<Payment />} />
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
