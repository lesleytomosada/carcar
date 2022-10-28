import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Sales</a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink className="nav-link" aria-current="page" to="/salespersons/create">Create a Sales Person</NavLink>
              <NavLink className="nav-link" aria-current="page" to="/salespersons">List Sales People</NavLink>
              <NavLink className="nav-link" aria-current="page" to="/customers">Create a Potential Customer</NavLink>
              <NavLink className="nav-link" aria-current="page" to="/saleshistory">List Sales History</NavLink>
              <NavLink className="nav-link" aria-current="page" to="/sales">Create a Sale Record</NavLink>
            </ul>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Service</a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink className="nav-link" aria-current="page" to="/technician/new">Create a Technician</NavLink>
              <NavLink className="nav-link" aria-current="page" to="serviceappointment/new">Create a Service Appointment</NavLink>
              <NavLink className="nav-link" aria-current="page" to="serviceappointment/list">Service Appointments List</NavLink>
              <NavLink className="nav-link" aria-current="page" to="serviceappointment/history">Service Appointment History</NavLink>
            </ul>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Inventory</a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="nav-link" to="/manufacturers">List Manufacturers</NavLink>
                <NavLink className="nav-link" to="/manufacturers/new">Create a Manufacturers</NavLink>
                <NavLink className="nav-link" to="/models">List Models</NavLink>
                <NavLink className="nav-link" to="/models/new">Create a Model</NavLink>
                <NavLink className="nav-link" to="/automobiles">List Automobiles</NavLink>
                <NavLink className="nav-link" to="/automobiles/new">Create an Automobiles</NavLink>

            </ul>
            </li>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
