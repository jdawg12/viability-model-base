import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             confidence : ''
        }
    }

    // handleUsernameChange = (e) => {
    //     this.setState({
    //         username : e.target.value
            
    //     })
    //     console.log(this.username)

    // }

    handleConfidenceSelect = (e) => {
        this.setState({
            confidence : e.target.value
            
        })
        console.log(this.confidence)

    }
    

    render() {
        return (
            <form>
                {/* <div>
                    <label>Username</label>
                    <input type ='text' placeholder='Enter RSN here' value={this.state.username} onChange = {this.handleUsernameChange}/>
                </div> */}

                <div>
                    <label>Confidence</label>
                    <select value={this.state.confidence} onChange = {this.handleConfidenceSelect}>
                        <option value ="asdasd"></option>
                        <option value ="2"></option>
                        <option value ="3"></option>
                    </select>
                </div>
            </form>
            
        )
    }
}

export default Form