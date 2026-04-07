import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import PokemonDetail from "./pages/PokemonDetail";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        
        <Nav /> 
        <div className="max-w-7xl mx-auto pb-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;