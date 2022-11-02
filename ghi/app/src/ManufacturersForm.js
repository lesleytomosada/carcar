import React from 'react';
import { NavLink } from 'react-router-dom';

class ManufacturerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeManufacturer = this.handleChangeManufacturer.bind(this);
  }



  async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};

    const manufacturerURL = 'http://localhost:8100/api/manufacturers/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const manufacturersResponse = await fetch(manufacturerURL, fetchConfig);
    if (manufacturersResponse.ok) {
      const successTag = document.getElementById("success")
      successTag.classList.remove("d-none")
      this.setState({
        name: "",
      });
    }
  }

  handleChangeManufacturer(event) {
    const value = event.target.value;
    this.setState({ name: value });
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <br></br>
        <p class="alert alert-success d-none" id= "success"> Manufacturer successfully completed!</p>
          <div className="shadow p-4 mt-4">
            <h1 className= 'text-center'>Create a Manufacturer</h1>
            <form onSubmit={this.handleSubmit} id="create-manufacturer-form">
                <div className="form-floating mb-3">
                    <input onChange={this.handleChangeManufacturer}
                    value={this.state.name}
                    placeholder="Manufacturer"
                    required type="text"
                    name="manufacturer"
                    id="manufacturer"
                    className="form-control" />
                    <label htmlFor="manufacturer">Manufacturer</label>
                </div>
                <div className= "d-flex justify-content-center">
                    <button className="btn btn-success btn-default m-1"  type="submit" data-toggle="button">Submit</button>
                    <NavLink className="btn btn-success btn-default m-1" type="submit" to="/manufacturers" data-toggle="button">Manufacturer List</NavLink>
                </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ManufacturerForm;
