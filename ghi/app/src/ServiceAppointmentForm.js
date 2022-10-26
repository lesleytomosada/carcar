import React from 'react'

class ServiceAppointmentForm extends React.Component {

constructor(props){
    super(props)
    this.state={
        vin: '',
        ownerName:'',
        dateAndTime:'',
        serviceReason:'',
        technician:'',
        technicians:[],
    }
    this.handleVinChange=this.handleVinChange.bind(this)
    this.handleOwnerNameChange=this.handleOwnerNameChange.bind(this)
    this.handleDateAndTimeChange=this.handleDateAndTimeChange.bind(this)
    this.handleServiceReasonChange=this.handleServiceReasonChange.bind(this)
    this.handleTechnicianChange=this.handleTechnicianChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
}

handleVinChange(event){
    const value = event.target.value;
    this.setState({vin:value})
}

handleOwnerNameChange(event){
    const value = event.target.value;
    this.setState({ownerName:value})
}

handleDateAndTimeChange(event){
    const value = event.target.value;
    this.setState({dateAndTime:value})
}

handleServiceReasonChange(event){
    const value = event.target.value;
    this.setState({serviceReason:value})
}

handleTechnicianChange(event){
    const value = event.target.value;
    this.setState({technician:value})
}

async handleSubmit(event){
    event.preventDefault();
    const data = {...this.state}
    console.log("Mickey Mouse", data)
    data.owner_name=data.ownerName
    data.service_reason=data.serviceReason
    data.date_and_time=data.dateAndTime
    delete data.dateAndTime
    delete data.ownerName
    delete data.serviceReason
    delete data.technicians
    const technicianUrl="http://localhost:8080/api/serviceappointments/"
    const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }
    const response = await fetch(technicianUrl, fetchConfig)
    if (response.ok) {
        const newServiceAppointment = await response.json()
        console.log(newServiceAppointment)

        const cleared = {
            vin: '',
            ownerName:'',
            dateAndTime:'',
            serviceReason:'',
            technician:'',
        }
        this.setState(cleared);
    }
    
}

async componentDidMount() {
    const url = 'http://localhost:8080/api/technicians/';

    const response = await fetch(url);
    console.log(response)

    if (response.ok) {
        const data = await response.json();
        console.log(data)
        this.setState({technicians: data.technicians})
    }
};

render() {
    return (
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1>Create a New Service Appointment</h1>
            <form onSubmit={this.handleSubmit} id="create-service-appointment-form">
                <div className="form-floating mb-3">
                <input onChange={this.handleVinChange} placeholder="Vin" required type="text" name="vin" id="vin" className="form-control"/>
                <label htmlFor="vin">VIN</label>
                </div>
                <div className="form-floating mb-3">
                <input onChange={this.handleOwnerNameChange} placeholder="Owner Name" required type="text" name="owner_name" id="owner_name" className="form-control"/>
                <label htmlFor="owner_name">Owner Name</label>
                </div>
                <div className="form-floating mb-3">
                <input onChange={this.handleDateAndTimeChange} placeholder="Date and Time" required type="datetime-local" name="date_and_time" id="date_and_time" className="form-control"/>
                <label htmlFor="date_and_time">Date and Time</label>
                </div>
                <div className="form-floating mb-3">
                <input onChange={this.handleServiceReasonChange} placeholder="Service Reason" required type="text" name="service_reason" id="service_reason" className="form-control"/>
                <label htmlFor="service_reason">Service Reason</label>
                </div>
                <div className="mb-3">
                <select onChange={this.handleTechnicianChange} required id="technician" name="technician" className="form-select">
                  <option value="">Technician</option>
                  {this.state?.technicians?.map(technician => {
                    return(
                        <option key={technician.name} value={technician.employee_number}>
                            {technician.name}
                        </option>
                    )
                  })}
                </select>

              </div>
                <button className="btn btn-primary">Create</button>
            </form>
            </div>
        </div>
        </div>
    )
}
}

export default ServiceAppointmentForm;