import { NavLink } from "react-router-dom"

const Facility = () =>{
    return(
        <>
        <div className="row px-5 py-5" >
  <div className="col-sm-4 mb-3 mb-sm-0 ">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title"> <i className="fa fa-hospital-o" aria-hidden="true"></i> Hospitality</h5>
        <p className="card-text">Clinical excellence must be the priority for any health care service provider.</p>
        <button type="button" className="btn btn-primary"><NavLink to="/" className="nav-link">Apply For A Bed</NavLink></button>
      </div>
    </div>
  </div>
  <div className="col-sm-4 mb-3 mb-sm-0">
    <div className="card ">
      <div className="card-body">
        <h5 className="card-title"><i className="fa fa-phone" aria-hidden="true"></i> Emergency Care</h5>
        <p className="card-text">Clinical excellence must be the priority for any health care service provider..</p>
        <button type="button" className="btn btn-primary"><NavLink to="/" className="nav-link">+22345678678</NavLink></button>
      </div>
    </div>
  </div>
  <div className="col-sm-4 mb-2 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title"><i className="fa fa-medkit" aria-hidden="true"></i> Chamber Service</h5>
        <p className="card-text">Clinical excellence must be the priority for any health care service provider.</p>
        <button type="button" className="btn btn-primary"><NavLink to="/" className="nav-link">Make An Appointment</NavLink></button>
      </div>
    </div>
  </div>
  <div className="col-sm-4 mt-2 mb-2 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title"><i className="fa fa-medkit" aria-hidden="true"></i> Medicine</h5>
        <p className="card-text">Clinical excellence must be the priority for any health care service provider.</p>
        <button type="button" className="btn btn-primary"><NavLink to="/" className="nav-link">Order</NavLink></button>
      </div>
    </div>
  </div>
  <div className="col-sm-4 mt-2 mb-2 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title"><i className="fa fa-medkit" aria-hidden="true"></i> Chamber Service</h5>
        <p className="card-text">Clinical excellence must be the priority for any health care service provider.</p>
        <button type="button" className="btn btn-primary"><NavLink to="/" className="nav-link">Make An Appointment</NavLink></button>
      </div>
    </div>
  </div>
  <div className="col-sm-4 mt-2 mb-2 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title"><i class="fa fa-clock-o" aria-hidden="true"></i> 24 hours Service</h5>
        <p className="card-text">Clinical excellence must be the priority for any health care service provider.</p>
        <button type="button" className="btn btn-primary"><NavLink to="/" className="nav-link">Make An Appointment</NavLink></button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}
export default Facility