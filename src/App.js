import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Components/About";
import Home from "./Components/Home";
import AppointmentForm from "./Components/AppointmentForm";
import AppointmentList from "./Components/AppointmentList";
import Footer from "./Components/Footer";
import './App.css'


const App = () =>{
  return<>
    <Router>
      <Header/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/appointmentform" element={<AppointmentForm/>} />
          <Route path="/appointmentlist" element={<AppointmentList/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  </>
}
export default App;
