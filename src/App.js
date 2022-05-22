import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Shared/Header";
import { openRoutes } from "./Pages/Routes/OpenRoutes";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {openRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />}></Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;
