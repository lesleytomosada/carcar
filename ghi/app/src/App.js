import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianForm from './TechnicianForm';
import ServiceAppointmentForm from './ServiceAppointmentForm';
import AppointmentList from './AppointmentList';
import ServiceHistory from './ServiceHistory';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="technician/new" element={<TechnicianForm/>} />
          <Route path="serviceappointment/new" element={<ServiceAppointmentForm/>} />
          <Route path="serviceappointment/list" element={<AppointmentList/>} />
          <Route path="serviceappointment/history" element={<ServiceHistory/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
