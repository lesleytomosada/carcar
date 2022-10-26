import React from "react";


class SalesPersonForm extends React.Component {
    constructor(props) {
        super(props) ;
        this.state = {
            name: "",
            employee_number: "",
        }
        // This is what allows me to type in the form boxes
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmployeeNumberChange = this.handleEmployeeNumberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

//This is what handle the submit button
    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        // Making sure it is getting the new data I want
        console.log(data);



        const salespersonUrl = "http://localhost:8090/api/salespersons/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(salespersonUrl, fetchConfig);
        //
        console.log("TEST")
        console.log(response)

        if (response.ok) {
            const cleared = {
                name: '',
                employee_number: '',
            };
            this.setState(cleared);
        }
    }


    // This handles the change from current state and DOM
    handleNameChange(event) {
        const value = event.target.value;
        this.setState({ name: value });
    }

    handleEmployeeNumberChange(event) {
        const value = event.target.value;
        this.setState({ employee_number: value });
    }


    render() {
        return (
            <div className="row">
                <div className="offset-3 col-5">
                    <div className="shadow p-4 mt-4">
                        <h1 class = "text-center">Add a New Sales Person</h1>
                        <form onSubmit={this.handleSubmit} id="create-salesperson-form">
                            <div className="form-floating mb-3">
                                <input
                                  className="form-control"
                                  onChange={this.handleNameChange}
                                  value={this.state.name}
                                  placeholder="Sales Person Name"
                                  required
                                  type="text"
                                  name="name"
                                  id="name"
                                />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                  className="form-control"
                                  onChange={this.handleEmployeeNumberChange}
                                  value={this.state.employee_number}
                                  placeholder="Employee number"
                                  required
                                  type="number"
                                  name="employee_number"
                                  id="employee_number"
                                />
                                <label htmlFor="name">Employee Number</label>
                            </div>
                            < div class= "d-flex justify-content-center">
                            <button className="btn btn-success btn-default " type="submit" data-toggle="button">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SalesPersonForm;
