import './App.css';
import {  Route, Routes } from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage"
import Home from './components/Home/Home';
import Details from "./components/Details/Details"
import FormCreation from './components/FormCreation/FormCreation';
import axios from 'axios';

axios.defaults.baseURL="http://localhost:3001/recipes"
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/detail/:idRecipes" element={<Details/>}/>
        <Route path="/recipe" element={<FormCreation/>}/>
    {/* <Route path="about" Component={About}/>*/}    
    </Routes>
 

    </div>
  );
}

export default App;
