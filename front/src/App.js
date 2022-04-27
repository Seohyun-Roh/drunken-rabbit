import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import IndexPage from "./pages/IndexPage";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import WorldMapPage from "./pages/WorldMapPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<IndexPage />} />
        <Route path="/main" exact element={<MainPage />} />
        <Route path="/detail/:index" exact element={<DetailPage />} />
        <Route path="/world_map" exact element={<WorldMapPage />} />
        <Route path="/about" exact element={<AboutPage />} />
        <Route path="/user/login" exact element={<LoginPage />} />
        <Route path="/user/register" exact element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
