import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./pages/DefaultLayout";
import NotFound from "./pages/NotFound";

import "./App.css";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}