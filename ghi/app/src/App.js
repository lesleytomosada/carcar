import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';

// Service
import TechnicianForm from './TechnicianForm';
import ServiceAppointmentForm from './ServiceAppointmentForm';
import AppointmentList from './AppointmentList';
import ServiceHistory from './ServiceHistory';
import SalesPersonForm from './SalesPersonForm' ;
import CustomerForm from './CustomerForm';
import SalesRecordForm from './SalesRecordForm';
import SalesPersonHistory from './SalesPersonHistory';
import SalesRecordList from './SalesRecordList' ;
import ManufacturersList from './ManufacturersList';
import ManufacturerForm from './ManufacturersForm' ;
import ModelsList from './ModelsList';

//Inventory
import AutomobilesList from './AutomobilesList';
import AutomobileForm from './AutomobileForm';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers">
              <Route path="" element={<ManufacturersList />} />
              <Route path="new" element={<ManufacturerForm />} />
          </Route>
          <Route path="models">
              <Route path="" element={<ModelsList/>} />
          </Route>
          <Route path="automobiles/" element={<AutomobilesList/>}/>
          <Route path="automobiles/new" element={<AutomobileForm/>}/>

          <Route path="technician/new" element={<TechnicianForm/>} />
          <Route path="serviceappointment/new" element={<ServiceAppointmentForm/>} />
          <Route path="serviceappointment/list" element={<AppointmentList/>} />
          <Route path="serviceappointment/history" element={<ServiceHistory/>} />

          <Route path="salespersons/create" element={<SalesPersonForm />} />
          <Route path="salespersons" element={<SalesPersonHistory />} />
          <Route path="customers" element={<CustomerForm/>}/>
          <Route path="saleshistory" element={<SalesRecordList/>}/>
          <Route path="sales" element={<SalesRecordForm/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
 }






export default App;
