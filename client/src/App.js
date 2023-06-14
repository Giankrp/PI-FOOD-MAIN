import './App.css';
import { Route} from "react-router-dom"
import axios from "axios"
import LandingPage from './components/LandingPage/LandingPage';
function App() {
  return (
    <div className="App">
  
        <Route exact path="/" Component={LandingPage}/>
        <Route path="home" Component={Home}/>
        <Route path="/detail/:id" Component={Detail}/>
        <Route path="/recipe" Component={FormCreation}/>
    {/* <Route path="about" Component={About}/>*/}  
    
    </div>
  );
}

export default App;
