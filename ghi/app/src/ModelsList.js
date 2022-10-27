import React from "react";


function ModelTable(props) {
    return (
        <tr className="card-group ">
            <td className="card col-3 my-2 mx-2 border-success mb-3">
                {props.model.picture_url && (
                    <img src={props.model.picture_url} className="card-img-top" />
                )}
                <b className="card-body text-center">
                    <h5 className="card-title">{props.model.name}</h5>
                    <h6 className="card-subtitle text-muted">Manufacturer: {props.model.manufacturer.name}</h6>
                </b>
            </td>
        </tr>
    );
}


class ModelsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            models: [],
        };

    }


    async componentDidMount() {
        const url = "http://localhost:8100/api/models/";


            const response = await fetch(url);
            const data = await response.json();

            if (response.ok) {
                this.setState({ models: data.models });
            }

    }


    render() {
        return (
            <>
                <div className="px-4 py-5 my-5">
                    <h1 className="display-2 fw-bold text-center">Models</h1>
                    <table className="table .table-bordered table-striped table-success text-right">
                        <tbody>
                            {this.state.models.map((model) => {
                                return (<ModelTable model={model} key={model.id}/>);
                            })}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

  export default ModelsList;
