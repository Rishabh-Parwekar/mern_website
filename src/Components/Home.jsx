import { NavLink } from "react-router-dom";
import Facility from "./Facility";
const Home = () =>{
    return(
  <>
  <main className="">
  <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className="" aria-current="true"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/image/doc2.jpg" alt="" width="100%" style={{height:'500px'}}  />
        <div className="container">
          <div className="carousel-caption text-start">
            <h1 className="text-dark">Dr. Danial Roa (Physician specialist)</h1>
            <p className="text-dark fw-bolder">Physicians work to maintain, promote, and restore health by studying, diagnosing, and treating injuries and diseases. Physicians generally have six core skills: Patient care Physicians have to provide compassionate, appropriate, and effective care to promote health and treat health problems in their patients.</p>
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"> <NavLink className="nav-link" to="/appointmentform">Book Appointments</NavLink></button>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/image/doc3.jpg" alt="" width="100%" style={{height:'500px'}}  />
        <div className="container">
          <div className="carousel-caption text-start">
            <h1 className="text-dark fw-bolder">Dr. Danial Roa (Physician specialist)</h1>
            <p className="text-dark">Physicians work to maintain, promote, and restore health by studying, diagnosing, and treating injuries and diseases. Physicians generally have six core skills: Patient care Physicians have to provide compassionate, appropriate, and effective care to promote health and treat health problems in their patients..</p>
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"> <NavLink className="nav-link" to="/about">About</NavLink></button>
          </div>
        </div>
      </div>
      <div className="carousel-item ">
        <img className="opacity-100" src="/image/home1.jpg" alt="" width="100%" style={{height:'500px'}}  />
        <div className="container">
          <div className="carousel-caption text-start">
            <h1 className="text-dark">Dr. Danial Roa (Physician specialist)</h1>
            <p className="text-dark fw-bolder">Physicians work to maintain, promote, and restore health by studying, diagnosing, and treating injuries and diseases. Physicians generally have six core skills: Patient care Physicians have to provide compassionate, appropriate, and effective care to promote health and treat health problems in their patients.</p>
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"> <NavLink className="nav-link" to="/">Facility</NavLink></button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <Facility/>

  </main>
  </>
    )
  }
  export default Home;