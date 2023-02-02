import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from "./components/auth/Auth";
import Home from "./components/home/Home";
import Information from "./pages/information/Information";
import ViewProfilePage from "./pages/viewProfilePage/ViewProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/info" element={<Information />} />
        <Route path="/profile" element={<ViewProfilePage />} />

        {/* <Route path="/map" element={<MapboxMap/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
