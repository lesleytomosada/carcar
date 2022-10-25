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
      //console.log("THIS IS SALES HISTORY", saleRecordsData.sales_history)
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
                <tr key={ history.pk }>
                  <td>{ history.sales_person.name }</td>
                  <td>{ history.sales_person.employee_number }</td>
                  <td>{ history.customer.name }</td>
                  <td>{ history.automobile.vin }</td>
                  <td>{ history.price }</td>
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


