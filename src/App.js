import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './component/home';
import Dis from './component/dis';


function App() {
  return (
    <div className="App">

      <Router>
   <Routes>

   <Route path='/' element={<Home/>}/>
   <Route path='/p/:id' element={<Dis/>}/>

   </Routes>


      </Router>
    


    </div>
  );
}

export default App;
