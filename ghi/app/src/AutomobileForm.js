import React from "react";

class AutomobileForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            vin: '',
            color:'',
            year:'',
            models:[],
        }
        this.handleVinChange=this.handleVinChange.bind(this)
        this.handleColorChange=this.handleColorChange.bind(this)
        this.handleYearChange=this.handleYearChange.bind(this)
        this.handleModelChange=this.handleModelChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    async componentDidMount(){
        const url='http://localhost:8100/api/models/'
        const response = await fetch(url)
        if (response.ok){
            const data = await response.json()
            this.setState({models:data.models})
        }
    }

    handleVinChange(event){
        const value = event.target.value;
        this.setState({vin:value})
    }

    handleColorChange(event){
        const value = event.target.value;
        this.setState({color:value})
    }

    handleYearChange(event){
        const value = event.target.value;
        this.setState({year:value})
    }

    handleModelChange(event){
        const value = event.target.value;
        this.setState({model:value})
    }

    async handleSubmit(event){
        event.preventDefault();
        const data = {...this.state}
        data.model_id=data.model
        delete data.models
        delete data.model

        const autoUrl="http://localhost:8100/api/automobiles/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            header:{
                "Content-Type": "application/json",
            },
        };

        const autoresponse = await fetch(autoUrl, fetchConfig)
        console.log("RESPONSEEE",autoresponse)
        if (autoresponse.ok){
            const newAutomobile = await autoresponse.json()
            this.setState({
                vin: "",
                color:"",
                year:"",
                models:[],
            });

        }
    }

    render(){
        return(
            <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                <h1>Create a New Automobile</h1>
                <form onSubmit={this.handleSubmit} id="create-service-appointment-form">
                    <div className="form-floating mb-3">
                    <input onChange={this.handleVinChange} placeholder="Vin" required type="text" name="vin" id="vin" value= {this.state.vin} className="form-control"/>
                    <label htmlFor="vin">VIN</label>
                    </div>
                    <div className="form-floating mb-3">
                    <input onChange={this.handleColorChange} placeholder="color" required type="text" name="color" value= {this.state.color} id="color" className="form-control"/>
                    <label htmlFor="owner_name">Color</label>
                    </div>
                    <div className="form-floating mb-3">
                    <input onChange={this.handleYearChange} placeholder="Year" required type="text" name="year" value= {this.state.year} id="year" className="form-control"/>
                    <label htmlFor="year">Year</label>
                    </div>
                    <div className="mb-3">
                    <select onChange={this.handleModelChange} required id="model" name="model"  className="form-select">
                      <option value="">Model</option>
                      {this.state.models?.map(model => {
                        return(
                            <option key={model.name} value={model.id}>
                                {model.name}
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

export default AutomobileForm
