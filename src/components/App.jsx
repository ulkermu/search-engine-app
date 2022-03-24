import Home from "./Home";
import MoreList from "./MoreList"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/showmore" element={<MoreList />} />
      </Routes>
    </Router>
  );
};

export default App;
