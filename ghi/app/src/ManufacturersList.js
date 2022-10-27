import React from "react";
import { NavLink } from 'react-router-dom';

function ManufacturerTable(props) {
    return (
        <tr key={props.manufacturer.id}>
            <th>{ props.manufacturer.name }</th>
        </tr>
    )
}

class ManufacturersList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            manufacturers: [],
        };

    }

    async componentDidMount() {
        const url = "http://localhost:8100/api/manufacturers/";
            const response = await fetch(url);
            const data = await response.json();

            if (response.ok) {
                this.setState({ manufacturers: data.manufacturers });
            }

    }

    render() {
        return (
            <div>
                <div className="px-4 py-5 my-5">
                    <h1 className="display-2 fw-bold text-center">Manufacturers</h1>
                    <table className="table .table-bordered table-striped table-success text-left">
                        <thead>
                            <tr>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.manufacturers.map((manufacturer) => {
                                return (
                                    <ManufacturerTable
                                    manufacturer={manufacturer}
                                    key={manufacturer.id}
                                    />
                                );
                            })}
                            {/* <tr className= "d-flex justify-content-center">
                                <NavLink className="btn btn-success btn-default " type="submit" to="/manufacturers/new" data-toggle="button">Add New Manufacturer</NavLink>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

  export default ManufacturersList;
