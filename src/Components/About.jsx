import { NavLink } from "react-router-dom";

const About = () =>{
    return(
      <>
      <section class="container mt-4 mb-4 bg-light rounded ">
    <div class="row ">
      <div class="col-md-6 ">
        <img src="/image/aboutdoc.png" alt="Doctor's Image" class="img-fluid rounded"/>
      </div>
      <div class="col-md-6 my-4">
        <h1 class="mb-4 "> Dr. Danial Roa</h1>
        <p className="fw-bolder">A physician specialist is a physician that focuses on one area of medicine or a group of patients. They practice within a single field and become experts who can diagnose, prevent, manage, or treat symptoms and conditions affecting a specific patient population.</p>
        <p className="fw-bolder">Phasellus euismod lacus auctor, sagittis turpis nec, dignissim nunc. Aenean sit amet urna eu leo lacinia
          fringilla a in ex. Donec blandit justo ac purus imperdiet, nec efficitur felis sagittis. In hac habitasse
          platea dictumst. Nullam id vestibulum libero. Lorem ipsum dolor sit amet.</p>
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#contactModal"><NavLink to="/" className="nav-link">Contact Us</NavLink></button>
      </div>
    </div>

    {/* Modal  */}
    <div className="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Contact US</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputName1"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="form-group mb-3">
              <label for="exampleFormControlTextarea1">Example textarea</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary ">Send</button>
          <button type="submit" className="btn btn-secondary mx-1">Cancle</button>
        </form>
      </div>
    </div>
  </div>
</div> 
  </section>
<div class="card-group my-5 mx-5">
  <div class="card mx-1">
    <img src="/image/1.png.webp" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Eye Care</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <NavLink to="/" class="card-link">Learn More</NavLink>
    </div>
  </div>
  <div class="card mx-1">
    <img src="/image/2.png.webp" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Physical Therapy</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <NavLink to="/" class="card-link">Learn More</NavLink>    </div>
  </div>
  <div class="card mx-1">
    <img src="/image/3.png.webp" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Dental Care</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <NavLink to="/" class="card-link">Learn More</NavLink>    </div>
  </div>
</div>

<div class="card-group my-5 mx-5">
  <div class="card mx-1">
    <img src="/image/4.png.webp" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Diagnostic Test</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <NavLink to="/" class="card-link">Learn More</NavLink>
    </div>
  </div>
  <div class="card mx-1">
    <img src="/image/5.png.webp" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Skin Surgery</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <NavLink to="/" class="card-link">Learn More</NavLink>    </div>
  </div>
  <div class="card mx-1">
    <img src="/image/6.png.webp" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Surgery Service</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <NavLink to="/" class="card-link">Learn More</NavLink>    </div>
  </div>
</div>
  

      </>
    )
  }
  export default About;