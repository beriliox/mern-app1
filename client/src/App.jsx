import { useEffect } from "react";
import "./App.css";
import CoastersDetails from "./pages/CoastersDetails/CoastersDetails";
import CoastersPage from "./pages/CoastersPage";
import IndexPage from "./pages/IndexPage";

import { Routes, Route } from "react-router-dom";

const App = () => {
  //const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Hello world");
  });

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="/gallery" element={<CoastersPage />}></Route>
        <Route path="/whatever" element={<CoastersDetails />}></Route>
      </Routes>
    </div>
  );
};

export default App;
