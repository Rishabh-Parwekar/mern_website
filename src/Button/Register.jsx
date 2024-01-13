const Register = () =>{
    return(
        <>
        <div className="max-2 my-1"> 
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signupModal">Register</button>
      </div>

      {/* Modal  */}
      <div className="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Register i-Hospital</h1>
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
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mb-3">
            <label htmlFor="cexampleInputPassword1" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="cexampleInputPassword1"/>
          </div>
          <button type="submit" className="btn btn-primary">Create Account</button>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save</button> 
      </div>
    </div>
  </div>
</div>
        </>
    )
}
export default Register;