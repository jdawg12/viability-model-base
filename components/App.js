import Form from 'components/Form'
import QList from 'components/qList'
import React, { Component } from 'react'


export class App extends Component {
    constructor(){
        super();
        this.state = {
            questions : [
                            {qNum: '1', text: 'IT', simple: 'null', confidence: 'null'},
                            {qNum: '2', text: 'IS', simple: 'null', confidence: 'null'},
                            {qNum: '3', text: 'WORKING', simple: 'null', confidence: 'null'},
                        ],

            answers: [],

            test: ['john', 'gabanna'],

            index : 0
                    }
    }
    


    render() {
        return (
            <div>
                <QList test={this.state.questions.map(_q => _q.text)} index={this.state.index}/>
                <Form addAnswerFn = {this.addAnswer} updateIndexFn = {this.updateIndex} />
                
            </div>
        )
    }

    componentDidMount() {
        const questions  = localStorage.getItem('questions');
        console.log('questions: ', questions)
    }

    addAnswer = async (answer) => {
        await this.setState({answers: [...this.state.answers, answer]})
        localStorage.setItem('answers', JSON.stringify(this.state.answers))
        // console.log('Local storage:', localStorage.getItem('answers'));
        console.log(this.state.answers)
    }

    updateIndex = () => {
        if (this.state.index < 2){
            this.setState({index : this.state.index + 1})
        }

        else {
            this.setState({index : 0})
        }
        console.log("Index: ", this.state.index)

    }

    
}

export default App
