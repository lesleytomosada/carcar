// import './Main.css'
import carMainPage from "./bg.png" 

function MainPage() {
  return (
    <>
    <body className='homepage' style = {{backgroundImage: `url(${carMainPage})`, height: "100vh"}}>
     
    {/* <img src= {carMainPage} alt=""/> */}
      <div className="py-5 text-center">
        <h1 className="display-5 fw-bold"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-car-front-fill" viewBox="0 2 16 16">
    <path fill-rule="evenodd" d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189l.956-1.913A.5.5 0 0 1 4.309 3h7.382a.5.5 0 0 1 .447.276l.956 1.913a.51.51 0 0 1-.497.731c-.91-.073-3.35-.17-4.597-.17-1.247 0-3.688.097-4.597.17a.51.51 0 0 1-.497-.731Z"/>
  </svg> CarCar</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            The premiere solution for automobile dealership
            management!
          </p>
          
          <div className= "d-flex justify-content-center">
            <a href = "/sales" class = "btn btn-light">Create a Sale Record</a>&nbsp;&nbsp;
            <a href = "/serviceappointment/new/" class = "btn btn-light">Create a Service Appointment</a>&nbsp;&nbsp;
            
          </div>
          
        </div>
      </div>
  
      </body>
      </>
  );
}

export default MainPage;
