import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home-app/home.js';
import SW from './components/stopwatch-app/stopwatch.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/stopwatch" element={<SW />} />
      </Routes>
    </Router>
  );
}

export default App;
