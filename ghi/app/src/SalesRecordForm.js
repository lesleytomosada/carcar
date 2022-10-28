import React from 'react';


class SalesRecordForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            automobile: '',
            automobiles: [],
            sales_person: '',
            salespeople: [],
            customer: '',
            customers: [],
            price: '',
        };
        this.handleAutomobileChange = this.handleAutomobileChange.bind(this);
        this.handleSalespersonChange = this.handleSalespersonChange.bind(this);
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        data.sales_person = data.sales_person
        // delete data.salesperson
        delete data.automobile.color
        delete data.automobile.id
        delete data.automobile.model
        delete data.automobile.year
        delete data.automobiles
        delete data.customers
        delete data.salespeople
        console.log("YYYYYY", data)

        const salesUrl = 'http://localhost:8090/api/sales/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        console.log("YYYYYY", data)
        const salesresponse = await fetch(salesUrl, fetchConfig);
        console.log("after",data)
        
        if (salesresponse.ok) {
          const cleared = {
              automobile: "",
              salesperson: "",
              customer: "",
              price: "",
          };
            this.setState(cleared);
        }
    }

    handleAutomobileChange(event) {
        const value = event.target.value;
        this.setState({automobile: value});
    }

    handleSalespersonChange(event) {
        const value = event.target.value;
        this.setState({sales_person: value})
    }

    handleCustomerChange(event) {
        const value = event.target.value;
        this.setState({customer: value})
    }

    handlePriceChange(event) {
        const value = event.target.value;
        this.setState({price: value})
    }

    async componentDidMount() {
        const automobileUrl = "http://localhost:8100/api/automobiles/";
        const autoResponse = await fetch(automobileUrl);
        if (autoResponse.ok) {
            const autoData = await autoResponse.json();
            this.setState({automobiles: autoData.autos});
        }

        const salespeopleUrl = 'http://localhost:8090/api/salespersons/';
        const salesResponse = await fetch(salespeopleUrl);
        if (salesResponse.ok) {
            const data = await salesResponse.json();
            this.setState({salespeople: data.sales_person});

        }
        const customerUrl = 'http://localhost:8090/api/customers/';
        const customerResponse = await fetch(customerUrl);
        if (customerResponse.ok) {
            const data = await customerResponse.json();
            this.setState({customers: data.customers});
        }

    }
    render() {
      return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Add a new sales record</h1>
              <form
                onSubmit={this.handleSubmit}
                id="create-salesrecord-form"
              >
                <div className="form-floating mb-3">
                  <input
                    onChange={this.handlePriceChange}
                    value={this.state.price}
                    placeholder="Price"
                    required
                    type="number"
                    name="price"
                    min="0"
                    id="price"
                    className="form-control"
                  />
                  <label htmlFor="price">Price</label>
                </div>
                <div className="mb-3">
                  <select
                    onChange={this.handleAutomobileChange}
                    required name="automobile"

                    id="automobile"
                    className="form-select">
                    <option value="">Choose an automobile</option>
                    {this.state.automobiles.map((automobile) => {
                      return (
                        <option key={automobile.id}
                        value={automobile.id}>
                          {automobile.vin}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                <div className="mb-3">
                  <select onChange={this.handleSalespersonChange}
                  required name="salesperson"
                  id="salesperson"
                  className="form-select">
                 <option value="">Choose a Sales Person</option>
                 {this.state.salespeople.map(salesperson => {
                          return (
                              <option key={salesperson.id}
                              value={salesperson.id}>
                              {salesperson.name1}
                              </option>
                          );
                  })}
                  </select>
                  <div>
                      </div>
                <div className="mb-3">
                  <select
                    onChange={this.handleCustomerChange}
                    required
                    name="customer"
                    id="customer"
                    className="form-select"
                  >
                    <option value="">Choose a customer</option>
                    {this.state.customers.map((customer) => {
                      return (
                        <option key={customer.phone_number} value={customer.id}>
                          {customer.name} - {customer.phone_number}
                        </option>
                      );
                    })}
                  </select>
                </div>
                </div>
              <button className="btn btn-primary">Create</button>
              </div>
              </form>
              </div>
      </div>
    </div>

      );
                  }
  }





  export default SalesRecordForm;
