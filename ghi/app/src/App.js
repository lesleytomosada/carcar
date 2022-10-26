import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';

// Service
import TechnicianForm from './TechnicianForm';
import ServiceAppointmentForm from './ServiceAppointmentForm';
import AppointmentList from './AppointmentList';
import ServiceHistory from './ServiceHistory';


////// Sales //////////
import SalesPersonForm from './SalesPersonForm' ;
import CustomerForm from './CustomerForm';
import SalesRecordForm from './SalesRecordForm';
import SalesPersonHistory from './SalesPersonHistory';
import SalesRecordList from './SalesRecordList' ;
import AutomobilesList from './AutomobilesList';


//Inventory

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
    {/* Service */}
          <Route path="technician/new" element={<TechnicianForm/>} />
          <Route path="serviceappointment/new" element={<ServiceAppointmentForm/>} />
          <Route path="serviceappointment/list" element={<AppointmentList/>} />
          <Route path="serviceappointment/history" element={<ServiceHistory/>} />
    {/* Sales */}
            <Route path="salespersons/create" element={<SalesPersonForm />} />
            <Route path="salespersons" element={<SalesPersonHistory />} />
            <Route path="customers" element={<CustomerForm/>}/>
            <Route path="saleshistory" element={<SalesRecordList/>}/>
            <Route path="sales" element={<SalesRecordForm/>}/>
    {/* Inventory */}
            <Route path="automobiles/" element={<AutomobilesList/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
 }






export default App;
