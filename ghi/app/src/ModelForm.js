import React from "react";

class ModelForm extends React.Component{

    constructor(props){
        super(props)
        this.state={
            name: '',
            pictureUrl:'',
            manufacturer:'',
            manufacturers:[],
        }
        this.handleNameChange=this.handleNameChange.bind(this)
        this.handlePictureUrlChange=this.handlePictureUrlChange.bind(this)
        this.handleManufacturerChange=this.handleManufacturerChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleNameChange(event){
        const value = event.target.value;
        this.setState({name:value})
    }
    
    handlePictureUrlChange(event){
        const value = event.target.value;
        this.setState({pictureUrl:value})
    }
    
    handleManufacturerChange(event){
        const value = event.target.value;
        this.setState({manufacturer:value})
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

    console.log("DATA::::",data)
    const modelUrl="http://localhost:8100/api/models/"
    const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }
    const response = await fetch(modelUrl, fetchConfig)
    console.log("RESPONSE:",response)
    if (response.ok) {
        const newModel = await response.json()
        console.log(newModel)

        const cleared = {
            name: '',
            pictureUrl:'',
            manufacturer:'',
        }
        this.setState(cleared);
    }
    
}


async componentDidMount() {
    const url = 'http://localhost:8100/api/manufacturers/'

    const response = await fetch(url);
    console.log(response)

    if (response.ok) {
        const data = await response.json();
        console.log(data)
        this.setState({manufacturers: data.manufacturers})
        console.log("THIS.STATE.MANUF",this.state.manufacturers)
    }
};

    render(){
        return(
            <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                <h1>Create a New Vehicle Model</h1>
                <form onSubmit={this.handleSubmit} id="create-service-appointment-form">
                    <div className="form-floating mb-3">
                    <input onChange={this.handleNameChange} placeholder="name" required type="text" name="name" value= {this.state.name} id="name" className="form-control"/>
                    <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                    <input onChange={this.handlePictureUrlChange} placeholder="Picture url" required type="text" name="picture_url" value= {this.state.pictureUrl} id="picture_url" className="form-control"/>
                    <label htmlFor="picture_ur;">Picture URL</label>
                    </div>
                    <div className="mb-3">
                    <select onChange={this.handleManufacturerChange} required id="manufacturer" name="manufacturer" className="form-select">
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
                    <button className="btn btn-primary">Create</button>
                </form>
                </div>
            </div>
            </div>
        )
    }

}

export default ModelForm