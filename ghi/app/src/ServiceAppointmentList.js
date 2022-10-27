import React from "react"

class AppointmentList extends React.Component {

async componentDidMount(){
    const url ='http://localhost:8080/api/serviceappointments/'
    const response= await fetch (url)
    console.log(response)
    if (response.ok) {
        const data = await response.json()
        this.setState({service_appointments: data.service_appointments})
        console.log("state",this.state)
    }
}

async deleteServiceAppointment(service_appointment){
    const url = `http://localhost:8080/api/serviceappointments/${service_appointment.id}`
    const fetchConfig = {
        method:"delete"
    }
    const response = await fetch (url, fetchConfig)
    if (response.ok){
        const remServiceAppointment = this.state.service_appointments.filter((i) => service_appointment.id !== i.id)
        this.setState({service_appointments:remServiceAppointment})
    }   
}

// async handleCompletion(service_appointment){

// }

render(){
    return (
        <div className="container">
            <h1>Appointment List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>FOR TESTING: Completed</th>
                            <th>VIN</th>
                            <th>Owner Name</th>
                            <th>VIP</th>
                            <th>Date and Time </th>
                            <th>Technician</th>
                            <th>Service Reason</th>
                            <th>Actions</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.state?.service_appointments.map(service_appointment => {
                            return(
                                <tr key={service_appointment.id}>
                                    <td>{String(service_appointment.is_completed)}</td>
                                    <td>{service_appointment.vin}</td>
                                    <td>{service_appointment.owner_name}</td>
                                    <td>{service_appointment.is_vip===true? "*":""}</td>
                                    <td>{service_appointment.date_and_time}</td>
                                    <td>{service_appointment.technician}</td>
                                    <td>{service_appointment.service_reason}</td>
                                    <td>
                                        <button type="button" onClick={() => this.deleteServiceAppointment(service_appointment)} className="btn btn-danger">Cancel</button>
                                        <button type="button" className="btn btn-success">Complete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
        </div>
    )
}

}

export default AppointmentList