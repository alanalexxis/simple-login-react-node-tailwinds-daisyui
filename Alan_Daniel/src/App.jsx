import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/admin";
function App() {
  return (
    <Routes>
      <Route path="/*" element={<MainLayout />} />
    </Routes>
  );
}

export default App;
