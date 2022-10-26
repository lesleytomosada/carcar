import React from "react";

class AutomobilesList extends React.Component{

    async componentDidMount(){
        const url='http://localhost:8100/api/automobiles/'
        const response = await fetch(url)
        if (response.ok){
            const data = await response.json()
            this.setState({autos:data.autos})
        }
    }
render(){
    return(
        <div className="container">
            <h1>Automobiles List</h1>
            <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>VIN</th>
                            <th>Color</th>
                            <th>Year</th>
                            <th>Model</th>
                            <th>Manufacturer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state?.autos?.map(automobile => {
                            return(
                                <tr key={automobile.id}>
                                    <td>{automobile.vin}</td>
                                    <td>{automobile.color}</td>
                                    <td>{automobile.year}</td>
                                    <td>{automobile.model.name}</td>
                                    <td>{automobile.model.manufacturer.name}</td>
                              </tr>
                            )
                        })}
                    </tbody>
                </table>
        </div>
    )
}
}

export default AutomobilesList