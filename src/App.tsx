import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import GalleryPage from "./pages/GalleryPage";
import PetDetailPage from "./pages/PetDetailPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<GalleryPage />} />
        <Route path="/pets/:id" element={<PetDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}
