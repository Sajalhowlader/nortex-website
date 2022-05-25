import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Header from "./Pages/Shared/Header";
import { openRoutes } from "./Pages/Routes/OpenRoutes";
import Footer from "./Pages/Shared/Footer";
import Protected from "./Pages/Routes/Protected";
import { closeRoutes } from "./Pages/Routes/CloseRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
