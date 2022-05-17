
import './App.css';
import Home from './components/Home/Home';
import { Route, Routes} from 'react-router-dom'
import Report from './components/Report/Report';
function App() {
  return (
    <div >
  <Routes>

  <Route path ="/" exact element={<Home/>}/>
  <Route path ="/report"  exact element={<Report/>}/>


  </Routes>

  
    </div>
  );
}

export default App;
