import React from "react";


class CustomerForm extends React.Component {
    constructor(props) {
        super(props) ;
        this.state = {
            name: "",
            address: "",
            phone_number: "",
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        console.log(data);



        const customersUrl = "http://localhost:8090/api/customers/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(customersUrl, fetchConfig);
        console.log("TEST")
        console.log(response)

        if (response.ok) {
            const cleared = {
                name: '',
                address: '',
                phone_number: '',
            };
            this.setState(cleared);
        }
    }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({ name: value });
    }

    handleAddressChange(event) {
        const value = event.target.value;
        this.setState({ address: value });
    }
    handlePhoneNumberChange(event) {
        const value = event.target.value;
        this.setState({phone_number: value})
    }

    render() {
        return (
            <div className="row">
                <div className="offset-3 col-5">
                    <div className="shadow p-4 mt-4">
                        <h1 class = "text-center">Add a Potential Customer</h1>
                        <form onSubmit={this.handleSubmit} id="create-salesperson-form">
                            <div className="form-floating mb-3">
                                <input
                                  className="form-control"
                                  onChange={this.handleNameChange}
                                  value={this.state.name}
                                  placeholder="Customer's Name"
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
                                  onChange={this.handleAddressChange}
                                  value={this.state.address}
                                  placeholder="Customer's Address"
                                  required
                                  type="text"
                                  name="address"
                                  id="address"
                                />
                                <label htmlFor="name">Address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                  className="form-control"
                                  onChange={this.handlePhoneNumberChange}
                                  value={this.state.phoneNumber}
                                  placeholder="Customer's phone_number"
                                  required
                                  type="text"
                                  name="phone_number"
                                  id="phone_number"
                                />
                                <label htmlFor="name">Phone Number</label>
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

export default CustomerForm;
