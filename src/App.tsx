import { Routes, Route } from "react-router-dom";
import Inicio from "./Inicio"; 
import Nosotros from "./Nosotros";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/nosotros" element={<Nosotros />} />
    </Routes>
  );
}