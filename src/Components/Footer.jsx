import { NavLink } from "react-router-dom";
const Footer = () =>{
    return(
      <>
<footer className="text-body-secondary py-3 bg-light border-top">
  <div className="container">
    <p className=" mb-1">
    <ul className="nav justify-content-center ">
      <li className="nav-item"><NavLink href="#" className="nav-link px-2 text-body-secondary">Home</NavLink></li>
      <li className="nav-item"><NavLink href="#" className="nav-link px-2 text-body-secondary">Features</NavLink></li>
      <li className="nav-item"><NavLink href="#" className="nav-link px-2 text-body-secondary">Pricing</NavLink></li>
      <li className="nav-item"><NavLink href="#" className="nav-link px-2 text-body-secondary">FAQs</NavLink></li>
      <li className="nav-item"><NavLink href="#" className="nav-link px-2 text-body-secondary">About</NavLink></li>
    </ul>
    <p className="text-center text-body-secondary">© 2023 Company, Inc <br /> <a href="#">Back to top</a></p>  
    </p>
  </div>
</footer>
      </>
    )
}
export default Footer;