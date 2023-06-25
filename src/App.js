import { Routes, Route, BrowserRouter } from "react-router-dom";
import MachiningApp from "./pages/machiningApp";
import CuttingSpeed from "./pages/cutting-speed";
import FeedRate from "./pages/feed-rates";
import RPM from "./pages/rpm";
import IPT from "./pages/ipt";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MachiningApp />}>
          <Route path="cutting-speed" element={<CuttingSpeed />} />
          <Route path="feed-rates" element={<FeedRate />} />
          <Route path="rpm" element={<RPM />} />
          <Route path="ipt" element={<IPT />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
