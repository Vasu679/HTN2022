import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Home } from "./pages/Home"
import { Recipe } from "./pages/Recipe"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/recipe/:recipe" element={<Recipe/>}/>
    </Routes>
  );
}

export default App;
