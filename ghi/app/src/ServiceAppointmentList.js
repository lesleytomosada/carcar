import React from "react"

class AppointmentList extends React.Component {

constructor(props){
    super(props)
    this.state={
        service_appointments:[],
    }
    this.deleteServiceAppointment=this.deleteServiceAppointment.bind(this)
    this.handleCompletion=this.handleCompletion.bind(this)
    this.getData=this.getData.bind(this)

}

async componentDidMount(){
this.getData()
}

async getData(){
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

async handleCompletion(service_appointment){
 const data = {
        "is_completed": true,
    }
    console.log(data)
    const url = `http://localhost:8080/api/serviceappointments/${service_appointment.id}/`
    const fetchConfig={
        method:"put",
        body: JSON.stringify(data),
        headers:{
            "Content-Type": "application/json",
        }
    }
    const response = await fetch(url, fetchConfig)
    if (response.ok){
        const completedAppointment = await response.json()
        console.log(completedAppointment)
        // window.location.reload()
        this.getData()
    }

}

render(){
    return (
        <div className="container">
            <h1>Upcoming Appointment List</h1>
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
                        {this.state?.service_appointments.filter(service_appointment => service_appointment.is_completed === false).map(service_appointment => {
                            return(
                                <tr key={service_appointment.id}>
                                    <td>{service_appointment.vin}</td>
                                    <td>{service_appointment.owner_name}</td>
                                    <td>{service_appointment.is_vip===true? "*":""}</td>
                                    <td>{service_appointment.date_and_time}</td>
                                    <td>{service_appointment.technician}</td>
                                    <td>{service_appointment.service_reason}</td>
                                    <td>
                                        <button type="button" onClick={() => this.deleteServiceAppointment(service_appointment)} className="btn btn-danger">Cancel</button>
                                        <button type="button" onClick={() => this.handleCompletion(service_appointment)} className="btn btn-success">Complete</button>
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