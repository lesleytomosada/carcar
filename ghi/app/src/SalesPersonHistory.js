import React from 'react';

class SalesPersonHistory extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            salesperson: '',
            salespeople:[],
            sales_history: [],
            sale_records:[],
            sale_records:"",
            sale_record:[],
            sale_record:"",
        };
    this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this);

    }
    async componentDidMount(){
        const salePeopleurl = 'http://localhost:8090/api/salespersons/';
        const response = await fetch(salePeopleurl);
        if (response.ok){
            const data = await response.json();
            this.setState({salespeople: data.sales_person})
        }
        const saleHistoryUrl = 'http://localhost:8090/api/sales/';
        const saleHistoryResponse = await fetch(saleHistoryUrl);
        if (saleHistoryResponse.ok) {
            const saleData = await saleHistoryResponse.json();
        }
    }

    async handleSalesPersonChange(event){

        const value = event.target.value;
        this.setState({ salesperson: value })

        const saleHistoryUrl = 'http://localhost:8090/api/sales/';
        const saleHistoryResponse = await fetch(saleHistoryUrl);

        if (saleHistoryResponse.ok) {
            const saleHistoryData = await saleHistoryResponse.json();
            console.log("THIS IS THE SALES HISTORY", saleHistoryData)

            if (this.state.salesperson === "") {
                this.setState({sales_history: saleHistoryData.sales_history});

            } else {
                let filteredSaleRecordList = [];
                console.log("yyyyyyyyyyyy",saleHistoryData.sales_history,)
                for (const sale_record of saleHistoryData.sales_history) {

                    if (String(sale_record.sales_person.id) === this.state.salesperson) {
                        filteredSaleRecordList.push(sale_record);
                    }
                }
                this.setState({sales_history: filteredSaleRecordList});
            }
        }
    }




    render() {
        return (
            <div>
                <h1>Sales Person's History</h1>
                <div className="row">
                    <select onChange={this.handleSalesPersonChange}
                    className="form-select"
                    name="salesperson"
                    value={this.state.salesperson}
                    id="salesperson" >
                    <option value="">Choose a Sales Person to View History</option>
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
                    <table className="table .table-bordered table-striped table-success text-left">
                        <thead>
                            <tr>
                            <th>Sales Person</th>
                            <th>Sale Price</th>
                            <th>Customer</th>
                            <th>VIN</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.sales_history.map(sale =>(
                                    <tr key={sale.id}>
                                        <td>{ sale.sales_person.name1 }</td>
                                        <td>{ sale.price }</td>
                                        <td>{ sale.customer.name }</td>
                                        <td>{ sale.automobile.vin }</td>
                                    </tr>
                                    )
                            )
                            }
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>

        );
    }
}
export default SalesPersonHistory;
