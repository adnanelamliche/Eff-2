
import Employe from "./api";
import Add from "./add";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Add />} />
      <Route path="/api" element={<Employe />} />
    </Routes>
    </BrowserRouter>
  );
}
