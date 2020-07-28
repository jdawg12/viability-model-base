import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
        
    
        this.state = {
             simple : '',
             confidence : '',
             completed : 'false'
        }
    }
    
    
    render() {
        const index = this.props.index;
        const answers = this.props.answers;
        console.log("Form data: ", answers)

        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <p>{index}</p>
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
                <button onClick={this.handlePrev}>Previous</button>
                <button type = "submit" onClick = {this.handleNext}>Next</button>
                
            </form>

            </div>
            
        )
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
            
        })
    }

    handlePrev = () => {
        this.props.prevIndexFn()
    }

    handleNext = () => {
        this.setState({
            completed : "true"
        
        })
        this.props.updateIndexFn()
    }

    handleSubmit = async (e) => {
        // alert(`${this.state.username} ${this.state.confidence}`)
        e.preventDefault()

        

        // if (this.state.confidence === '' || this.state.simple === ''){
        //     alert('Please select all fields')
        // }
        // else {
        
            const data = this.state
            // console.log("Final data is: ", data)
            this.props.addAnswerFn(this.state)
            this.setState({
                simple : '',
                confidence : '',
                completed : 'false'
            })

            
        // }
    }
}


    // handleConfidenceSelect = (e) => {
    //     this.setState({
    //         confidence : e.target.value
            
    //     })
    //     console.log(this.confidence)

    // }
export default Form

//index should not be updated on submit, should be updated onclick. onsubmit should save the data to the form and that's it