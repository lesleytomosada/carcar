import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianForm from './TechnicianForm';
import ServiceAppointmentForm from './ServiceAppointmentForm';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="technician/new" element={<TechnicianForm/>} />
          <Route path="serviceappointment/new" element={<ServiceAppointmentForm/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
