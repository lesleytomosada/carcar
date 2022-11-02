import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-car-front-fill" viewBox="0 2 16 16">
  <path fill-rule="evenodd" d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189l.956-1.913A.5.5 0 0 1 4.309 3h7.382a.5.5 0 0 1 .447.276l.956 1.913a.51.51 0 0 1-.497.731c-.91-.073-3.35-.17-4.597-.17-1.247 0-3.688.097-4.597.17a.51.51 0 0 1-.497-.731Z"/>
</svg> CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-0 mb-lg-0">
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Sales</a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink className="nav-link text-dark" aria-current="page" to="/salespersons/create">Create a Sales Person</NavLink>
              <NavLink className="nav-link text-dark" aria-current="page" to="/salespersons">List Sales People</NavLink>
              <NavLink className="nav-link text-dark" aria-current="page" to="/customers">Create a Potential Customer</NavLink>
              <NavLink className="nav-link text-dark" aria-current="page" to="/saleshistory">List Sales History</NavLink>
              <NavLink className="nav-link text-dark" aria-current="page" to="/sales">Create a Sale Record</NavLink>
            </ul>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Service</a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink className="nav-link text-dark" aria-current="page" to="/technician/new">Create a Technician</NavLink>
              <NavLink className="nav-link text-dark" aria-current="page" to="serviceappointment/new">Create a Service Appointment</NavLink>
              <NavLink className="nav-link text-dark" aria-current="page" to="serviceappointment/list">Service Appointments List</NavLink>
              <NavLink className="nav-link text-dark" aria-current="page" to="serviceappointment/history">Service Appointment History</NavLink>
            </ul>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Inventory</a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="nav-link text-dark" to="/manufacturers">List Manufacturers</NavLink>
                <NavLink className="nav-link text-dark" to="/manufacturers/new">Create a Manufacturer</NavLink>
                <NavLink className="nav-link text-dark" to="/models">List Models</NavLink>
                <NavLink className="nav-link text-dark" to="/models/new">Create a Model</NavLink>
                <NavLink className="nav-link text-dark" to="/automobiles">List Automobiles</NavLink>
                <NavLink className="nav-link text-dark" to="/automobiles/new">Create an Automobile</NavLink>

            </ul>
            </li>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
