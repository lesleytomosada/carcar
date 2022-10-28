import React from "react";

class ModelForm extends React.Component{

    constructor(props){
        super(props)
        this.state={
            name: '',
            pictureUrl:'',
            manufacturers:[],
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(event){
        const value = event.target.value;
        this.setState({[event.target.id]:value})
    }

async handleSubmit(event){
    event.preventDefault();
    const {
        name, pictureUrl, manufacturer
    } = this.state

    const data = {
        name,
        "picture_url": pictureUrl,
        "manufacturer_id": manufacturer,
    }

    const modelUrl="http://localhost:8100/api/models/"
    const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }
    const response = await fetch(modelUrl, fetchConfig)
    if (response.ok) {
           const cleared = {
            name: '',
            pictureUrl:'',
            manufacturers:[],
        }
        this.setState(cleared);
    }

}


async componentDidMount() {
    const url = 'http://localhost:8100/api/manufacturers/'

    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        this.setState({manufacturers: data.manufacturers})

    }
};

    render(){
        return(
            <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                <h1>Create a New Model</h1>
                <form onSubmit={this.handleSubmit} id="create-service-appointment-form">
                    <div className="form-floating mb-3">
                    <input onChange={this.handleChange} placeholder="name" required type="text" name="name" value= {this.state.name} id="name" className="form-control"/>
                    <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                    <input onChange={this.handleChange} placeholder="Picture url" required type="text" name="picture_url" value= {this.state.pictureUrl} id="pictureUrl" className="form-control"/>
                    <label htmlFor="picture_ur;">Picture URL</label>
                    </div>
                    <div className="mb-3">
                    <select onChange={this.handleChange} required id="manufacturer" name="manufacturer" className="form-select">
                      <option value="">Manufacturer</option>
                      {this.state?.manufacturers?.map(manufacturer => {
                        return(
                            <option key={manufacturer.name} value={manufacturer.id}>
                                {manufacturer.name}
                            </option>
                        )
                      })}
                    </select>

                  </div>
                  <div className= "d-flex justify-content-center">
                            <button className="btn btn-success btn-default">Create</button>
                 </div>
                </form>
                </div>
            </div>
            </div>
        )
    }

}

export default ModelForm
