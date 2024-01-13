import {NavLink} from 'react-router-dom'
import Login from '../Button/Login';
import Register from '../Button/Register';
const Header = () =>{
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"><img src="/image/logo.png" alt="hospital  logo" style={{width: '150px' , height: '50px'}}/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2  mb-lg-0 h5  col-10 justify-content-center">
        <li className="nav-item me-2">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item me-2">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item me-2">
          <NavLink className="nav-link" to="/appointmentform">Book Appointments</NavLink>
        </li>
        <li className="nav-item me-2">
          <NavLink className="nav-link" to="/appointmentlist">List of Appointments</NavLink>
        </li>
      </ul>
    <Login/>
    <Register/>
    </div>
  </div>
</nav>
        </>
    )
};
export default Header;