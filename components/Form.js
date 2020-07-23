import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             simple : '',
             confidence : ''
        }
    }
    
    render() {
        // const {fullName} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Simple Answer</label>
                    <select value={this.state.simple} onChange = {this.handleChange} name='simple'>
                    <option value ='' disabled></option>
                        <option value ="Yes">Yes</option>
                        <option value ="No">No</option>
                    </select>
                </div>

                <div>
                    <label>Confidence</label>
                    <select value={this.state.confidence}  onChange = {this.handleChange} name='confidence'>
                        <option value ='' disabled></option>
                        <option value ="1">1</option>
                        <option value ="2">2</option>
                        <option value ="3">3</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
            
        )
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
            
        })
        // console.log(this.username)

    }

    // handleConfidenceSelect = (e) => {
    //     this.setState({
    //         confidence : e.target.value
            
    //     })
    //     console.log(this.confidence)

    // }

    handleSubmit = (e) => {
        // alert(`${this.state.username} ${this.state.confidence}`)
        e.preventDefault()
        const data = this.state
        console.log("Final data is: ", data)
    }
}

export default Form