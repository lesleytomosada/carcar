import React from "react";

class ServiceHistory extends React.Component {
    constructor(props){
        super(props)
        this.state={
            vin:'',
            service_appointments:[]
        }
        this.handleSearch=this.handleSearch.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    async componentDidMount() {
        const url = 'http://localhost:8080/api/serviceappointments/'
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            this.setState({ service_appointments: data.service_appointments })
        }
    }

    async handleSearch(event){
        const value = event.target.value;
        this.setState({vin:value})

    }

    async handleSubmit(event){
        event.preventDefault()
        const url='http://localhost:8080/api/serviceappointments/'
        const response = await fetch(url)
        const vin = this.state.vin
        if (response.ok) {
            const data = await response.json()
            const service_appointments = data.service_appointments;
            let service_appointment = service_appointments.filter((appointment) =>
                appointment.vin.includes(vin)
            )
            this.setState({ service_appointments: service_appointment })
        }
    }

    render() {
        return (
            <>
                <br></br>
                <div className="input-group mb-3">
                    <input type="text" onChange={this.handleSearch} className="form-control" placeholder="Search VIN" aria-label="Search VIN" aria-describedby="button-addon2" />
                    <button onClick={this.handleSubmit} className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                </div>
                <div className="container">
                    <h1>Service History</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>VIN</th>
                                <th>Owner Name</th>
                                <th>Date and Time </th>
                                <th>Technician</th>
                                <th>Service Reason</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state?.service_appointments.map(service_appointment => {
                                return (
                                    <tr key={service_appointment.id}>
                                        <td>{service_appointment.vin}</td>
                                        <td>{service_appointment.owner_name}</td>
                                        <td>{new Date(service_appointment.date_and_time).toLocaleDateString()}&nbsp;
                                        {new Date(service_appointment.date_and_time).toLocaleTimeString()}</td>
                                        <td>{service_appointment.technician}</td>
                                        <td>{service_appointment.service_reason}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default ServiceHistory;
