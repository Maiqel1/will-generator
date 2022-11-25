import logo from '../../src/logo.png'

function Header() {
  return (
    <div>
        <div className="container  col-10 p-3">
            <div className='d-flex justify-content-center'>
                <img src={logo} className="img-fluid" alt="" />
            </div>
      <h1 className="text-center mt-3 mb-3">Will Generator</h1>
      <center>
        <div className="headerCard text-center col-8 col-md-6 p-2">
          <h3 className="text-danger will">Make a will</h3>
        </div>
      </center>
      </div>
    </div>
  )
}
export default Header