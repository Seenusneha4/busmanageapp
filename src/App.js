import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addbus from './Components/Addbus';
import Searchbus from './Components/Searchbus';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewbus from './Components/Viewbus';


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
       <Route path="/" exact element={<Addbus/>}/>
       <Route path="/search" exact element={<Searchbus/>}/>
       <Route path="/view" exact element={<Viewbus/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
