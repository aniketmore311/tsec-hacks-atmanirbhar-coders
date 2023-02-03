import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from "./components/auth/Auth";
import Home from "./components/home/Home";
import Flatmates from "./pages/Flatmates";
import Information from "./pages/information/Information";
import Landing from "./pages/Landing/Landing";
import ViewProfilePage from "./pages/viewProfilePage/ViewProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/info" element={<Information />} />
        <Route path="/profile" element={<ViewProfilePage />} />
        <Route path="/flatmates" element={<Flatmates />} />
        {/* <Route path="/map" element={<MapboxMap/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
