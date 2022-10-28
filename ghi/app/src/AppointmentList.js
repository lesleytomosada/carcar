import React from "react"

class AppointmentList extends React.Component {

async componentDidMount(){
    const url ='http://localhost:8080/api/serviceappointments/'
    const response= await fetch (url)
    if (response.ok) {
        const data = await response.json()
        this.setState({service_appointments: data.service_appointments})

    }
}

render(){
    return (
        <div className="container">
            <h1>Appointment List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
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
                                    <td>{service_appointment.vin}</td>
                                    <td>{service_appointment.owner_name}</td>
                                    <td>{service_appointment.is_vip}</td>
                                    <td>{service_appointment.date_and_time}</td>
                                    <td>{service_appointment.technician}</td>
                                    <td>{service_appointment.service_reason}</td>
                                    <td>
                                        <button type="button" className="btn btn-danger">Cancel</button>
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
