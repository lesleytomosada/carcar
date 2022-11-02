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
    if (response.ok) {
        const data = await response.json()
        this.setState({service_appointments: data.service_appointments})
    }
}

async deleteServiceAppointment(service_appointment){
    const url = `http://localhost:8080/api/serviceappointments/${service_appointment.id}`
    const fetchConfig = {
        method:"delete"
    }
    const response = await fetch (url, fetchConfig)
    if (response.ok){
        const cancelTag = document.getElementById("cancellation")
        const successTag = document.getElementById("success")
        cancelTag.classList.remove("d-none")
        successTag.classList.add("d-none")
        const remServiceAppointment = this.state.service_appointments.filter((i) => service_appointment.id !== i.id)
        this.setState({service_appointments:remServiceAppointment})
    }   
}

async handleCompletion(service_appointment){
 const data = {
        "is_completed": true,
    }
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
        const successTag = document.getElementById("success")
        const cancelTag = document.getElementById("cancellation")
        cancelTag.classList.add("d-none")
        successTag.classList.remove("d-none")
        this.getData()
    }

}

render(){
    return (
        <div className="container">
            <br></br>
            <p class="alert alert-success d-none" id= "success"> Appointment completed!</p>
            <p class="alert alert-danger d-none" id= "cancellation"> Appointment Cancelled</p>
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
                                    <td>{service_appointment.is_vip===true? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E0AA3E" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>:""}</td>
                                    <td>{new Date(service_appointment.date_and_time).toLocaleDateString()}&nbsp;
                                        {new Date(service_appointment.date_and_time).toLocaleTimeString()}</td>
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