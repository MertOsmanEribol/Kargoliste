
import { Routes, Route } from "react-router-dom"
import Ogrenci from './Ogrenci';
import Ogrencikayıt from './Ogrencikayıt'
import Login from './Login'
import FormCargo from "./FormCargo";
import ListCargo from "./ListCargo";
function App() {
return (
  <div className="App">
  <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/Ogrenci" element={<Ogrenci/>} />
    <Route path="/Ogrencikayıt" element={<Ogrencikayıt/>} />
    <Route path="/FormCargo" element={<FormCargo/>} />
    <Route path="/ListCargo" element={<ListCargo/>} />
  </Routes>
  </div>
  )
}
export default App