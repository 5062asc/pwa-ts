import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import PokemonList from "./components/PokemonList";
// import PokemonDetails from "./components/PokemonDetails";
// import MovieList from "./components/MoviesList";
// import Products from "./components/Products";
import Users from "./molecules/users/Users";
import Navbar from "./atoms/Navbar/Navbar";
import Products from "./molecules/products/Products";

const App: React.FC = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/users" />} />
        {/* <Route path="/pokemon/:name" element={<PokemonDetails />} />
        <Route path="/movies" element={<MovieList />} /> */}
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
};

export default App;
