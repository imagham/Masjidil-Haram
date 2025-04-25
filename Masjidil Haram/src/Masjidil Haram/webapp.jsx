import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailPage from "./detail"; // Ensure the path is correct
import Herosection from "./homepage"; // Ensure the path is correct
import AboutMasjidilHaram from "./About";

function Webapp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Herosection />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/About" element={<AboutMasjidilHaram />} />
      </Routes>
    </Router>
  );
}

export default Webapp;
