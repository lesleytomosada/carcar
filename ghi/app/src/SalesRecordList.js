import React from 'react';

class SaleRecordList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sales_history: []
    };
  }

  async componentDidMount() {
    const saleRecordsUrl = 'http://localhost:8090/api/sales/';
    const saleRecordsResponse = await fetch(saleRecordsUrl);

    if (saleRecordsResponse.ok) {
      const saleRecordsData = await saleRecordsResponse.json();
      this.setState({sales_history: saleRecordsData.sales_history});
    }
  }
  async deleteHistory(history){
    const url = `http://localhost:8090/api/sales/${history.id}`
    const fetchConfig = {
        method:"delete"
    }
    const response = await fetch (url, fetchConfig)
    if (response.ok){
        const remHistory = this.state.sales_history.filter((i) => history.id !== i.id)
        this.setState({sales_history:remHistory})
    }
}

  render() {
    return (
      <div className="container">
        <h1>All Sales</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Sales Person Name</th>
              <th>Sales Person Employee Number</th>
              <th>Purchaser's Name</th>
              <th>VIN</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.sales_history.map(history => {
              return (
                <tr key={ history.id }>
                  <td>{ history.sales_person.name1 }</td>
                  <td>{ history.sales_person.employee_number }</td>
                  <td>{ history.customer.name }</td>
                  <td>{ history.automobile.vin }</td>
                  <td>{ history.price }</td>
                  <td>
                    <button type="button" className="btn btn-danger" onClick={() => this.deleteHistory(history)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SaleRecordList;
