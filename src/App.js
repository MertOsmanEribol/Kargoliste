
import { Routes, Route } from "react-router-dom"
import Ogrenci from './Ogrenci';
import Ogrencikayıt from './Ogrencikayıt'
import Login from './Login'
import FormCargo from "./FormCargo";
import ListCargo from "./ListCargo";
import MusteriForm from './MusteriForm'
import MusteriList from './MusteriList'
import ListProduct from './ListProduct'
import Siparis from "./Siparis";
import SiparisListe from "./SiparisListe";
import NewProduct from "./NewProduct";
function App() {
return (
  <div className="App">
  <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/Ogrenci" element={<Ogrenci/>} />
    <Route path="/Ogrencikayıt" element={<Ogrencikayıt/>} />
    <Route path="/FormCargo" element={<FormCargo/>} />
    <Route path="/ListCargo" element={<ListCargo/>} />
    <Route path="/MusteriForm" element={<MusteriForm/>} />
    <Route path="/MusteriList" element={<MusteriList/>} />
    <Route path="/ListProduct" element={<ListProduct/>} />
    <Route path="/Siparis" element={<Siparis/>} />
    <Route path="/SiparisListe" element={<SiparisListe/>} />
    <Route path="/NewProduct" element={<NewProduct/>} />
  </Routes>
  </div>
  )
}
export default App