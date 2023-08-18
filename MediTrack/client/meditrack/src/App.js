
import './App.css';
import Landing from './Views/Landing/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from './Views/Home/Home';
import NavBarComp from './Components/NavBarComp';
import MedicalRecords from './Views/MyMedicalRecords/MedicalRecords';
function App() {
  const location = useLocation()
  const [active, setActive] = useState(false)

 useEffect(() => {
  if(location.pathname !== '/'){
    setActive(true)
  }else{
    setActive(false)
  }
 }, [location])
  return (
    <div className="App">
      {active ? <NavBarComp></NavBarComp> : <></>}
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/medicalrecords' element={<MedicalRecords/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
