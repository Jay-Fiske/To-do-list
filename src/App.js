import "./App.css";
import Complete from "./Components/Complete";
import Deleted from "./Components/Deleted";
import Header from "./Components/Header";
import Important from "./Components/Important";
import NoPage from "./Components/NoPage";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/important" element={<Important />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/delete" element={<Deleted />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );  
}

export default App;