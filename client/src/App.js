import './App.css';
import {  Route, Routes } from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage"
import Home from './components/Home/Home';
import Details from "./components/Details/Details"
import FormCreation from './components/FormCreation/FormCreation';
import axios from 'axios';

axios.defaults.baseURL="http://localhost3001/recipes"
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route exact path="/" Component={LandingPage}/>
        <Route path="/home" Component={Home}/>
        <Route path="/detail/:id" Component={Details}/>
        <Route path="/recipe" Component={FormCreation}/>
    {/* <Route path="about" Component={About}/>*/}    
    </Routes>
 

    </div>
  );
}

export default App;
