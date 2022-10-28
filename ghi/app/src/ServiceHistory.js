import React from "react";

class ServiceHistory extends React.Component {

    async componentDidMount() {
        const url = 'http://localhost:8080/api/serviceappointments/'
        const response = await fetch(url)
            (response)
        if (response.ok) {
            const data = await response.json()
            this.setState({ service_appointments: data.service_appointments })
        }
    }

    render() {
        return (
            <>
                <br></br>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search VIN" aria-label="Search VIN" aria-describedby="button-addon2" />
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
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
                                        <td>{service_appointment.date_and_time}</td>
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
