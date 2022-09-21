import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NoPageFound from "./components/NoPageFound";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/netflix-home" element={<Home />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </>
  );
}

export default App;
