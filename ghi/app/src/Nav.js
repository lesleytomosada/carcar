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
              <NavLink className="nav-link" aria-current="page" to="/salespersons/create">Add Sales Person</NavLink>
              <NavLink className="nav-link" aria-current="page" to="/salespersons">List Sales People</NavLink>
              <NavLink className="nav-link" aria-current="page" to="/customers">Add Potential Customer</NavLink>
              <NavLink className="nav-link" aria-current="page" to="/saleshistory">List Sales History</NavLink>
              <NavLink className="nav-link" aria-current="page" to="/sales">Create a Sale Record</NavLink>
            </ul>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Manufacturers</a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="nav-link" to="/manufacturers">List Manufacturers</NavLink>
                <NavLink className="nav-link" to="/manufacturers/new">Create Manufacturers</NavLink>
            </ul>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Models</a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink className="nav-link" to="/models">List Models</NavLink>
            </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
