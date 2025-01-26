import './App.css'
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import CarRentals from "./pages/carRentals/CarRentals";
import AirportLimousineServices from "./pages/LimousineServices/AirportLimousineServices";
import WeddingLimousineServices from "./pages/LimousineServices/WeddingLimousineServices";
import PromLimousineServices from './pages/LimousineServices/PromLimousineServices';
import WineryLimousineServices from './pages/LimousineServices/WineryLimousineServices';
import NightsOutLimousineServices from './pages/LimousineServices/NightsOutLimousineServices';
import BachelorBacheloretteLimousineServices from './pages/LimousineServices/BachelorBacheloretteLimousineServices';
import CorporateTravelLimousineServices from './pages/LimousineServices/CorporateTravelLimousineServices';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CarRentals />} />
          <Route path="/limousine" element={<AirportLimousineServices />} />
          <Route path="/wedding" element={<WeddingLimousineServices />} />
          <Route path="/prom" element={<PromLimousineServices />} />
          <Route path="/winery" element={<WineryLimousineServices />} />
          <Route path="/nightsout" element={<NightsOutLimousineServices />} />
          <Route path="/bachelor" element={<BachelorBacheloretteLimousineServices />} />
          <Route path="/corporate" element={<CorporateTravelLimousineServices />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
