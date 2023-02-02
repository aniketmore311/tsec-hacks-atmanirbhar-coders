import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from "./components/auth/Auth";
import Home from "./components/home/Home";
import Flatemates from "./pages/Flatemates";
import Information from "./pages/information/Information";
import Landing from "./pages/Landing/Landing";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/landing" element={<Landing />} />
                <Route path="/flatmates" element={<Flatemates />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/info" element={<Information />} />
                {/* <Route path="/map" element={<MapboxMap/>}/> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
