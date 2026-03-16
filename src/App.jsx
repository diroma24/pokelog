import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import PokemonDetail from './pages/PokemonDetail';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link> | 
        <Link to="/buscar"> Buscar</Link> | 
        <Link to="/perfil"> Mi Perfil</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buscar" element={<Search />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
        <Route path="/perfil" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;