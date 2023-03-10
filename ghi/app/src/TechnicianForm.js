import React from 'react'

class TechnicianForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            employeeNumber: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleEmployeeNumberChange = this.handleEmployeeNumberChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({ name: value })
    }

    handleEmployeeNumberChange(event) {
        const value = event.target.value;
        this.setState({ employeeNumber: value })
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state }
        data.employee_number = data.employeeNumber
        delete data.employeeNumber
        const technicianUrl = "http://localhost:8080/api/technicians/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }
        const response = await fetch(technicianUrl, fetchConfig)
        if (response.ok) {
            const successTag = document.getElementById("success")
            successTag.classList.remove("d-none")
            const cleared = {
                name: '',
                employeeNumber: ''
                
            }
            this.setState(cleared);
        }

    }

    render() {
        return (
            <div className="row">
                
                <div className="offset-3 col-6">
                    <br></br>
                <p class="alert alert-success d-none" id= "success"> Technician successfully created!</p>
                    <div className="shadow p-4 mt-4 bg-light">
                        <h1>Create a New Technician</h1>
                        <form onSubmit={this.handleSubmit} id="create-technician-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleNameChange} placeholder="Name" required type="text" name="name" id="name" value={this.state.name} className="form-control" />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleEmployeeNumberChange} placeholder="Employee Number" required type="text" value={this.state.employeeNumber} name="employee_number" id="employee_number" className="form-control" />
                                <label htmlFor="employee_number">Employee Number</label>
                            </div>
                            <div className= "d-flex justify-content-center">
                            <button className="btn btn-success btn-default">Create</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default TechnicianForm;
