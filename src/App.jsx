import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeaturesPage from "./pages/features/fetures";
import HomePage from "./pages/home";
import AboutUsPage from "./pages/about-us";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/features" element={<FeaturesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
