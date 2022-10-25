import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';

////// Sales //////////
import SalesPersonForm from './SalesPersonForm' ;
import CustomerForm from './CustomerForm';
import SalesRecordForm from './SalesRecordForm';
import SalesPersonHistory from './SalesPersonHistory';
import SalesRecordList from './SalesRecordList' ;

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          
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
