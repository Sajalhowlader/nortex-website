import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Header from "./Pages/Shared/Header";
import { openRoutes } from "./Pages/Routes/OpenRoutes";
import Footer from "./Pages/Shared/Footer";
function App() {
  return (
    <div className="styles">
      <Header />
      <Routes>
        {openRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />}></Route>
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
