import "./App.css";
import CoastersDetails from "./pages/CoastersDetails/CoastersDetails";
import CoastersPage from "./pages/CoastersPage";
import IndexPage from "./pages/IndexPage";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/coasters" element={<CoastersPage />} />
        <Route path="/coasters/:coaster_id" element={<CoastersDetails />} />
      </Routes>
    </div>
  );
};

export default App;
