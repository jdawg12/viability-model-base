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
                            {qNum: '4', text: '!!!', simple: 'null', confidence: 'null'},
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
                <Form addAnswerFn = {this.addAnswer} updateIndexFn = {this.updateIndex} prevIndexFn={this.prevIndex} index={this.state.index} answers={this.state.answers} />
                
            </div>
        )
    }

    componentDidMount() {
        const questions  = localStorage.getItem('questions');
        console.log('questions: ', questions)
    }

    addAnswer = async (answer) => {
        if (this.state.answers.length < 4){
        await this.setState({answers: [...this.state.answers, answer]})
        localStorage.setItem('answers', JSON.stringify(this.state.answers))
        // console.log('Local storage:', localStorage.getItem('answers'));
        }
        console.log("App data: ", this.state.answers)
    }

    updateIndex = async() => {
        if (this.state.index < 3){
            await this.setState({index : this.state.index + 1})
        }

        else {
            await this.setState({index : 0})
        }
        console.log("Index: ", this.state.index)

    }

    prevIndex = async() => {
        if (this.state.index > 0){
            await this.setState({index : this.state.index - 1})
        }

        else {
            await this.setState({index : 3})
        }
        console.log("Index: ", this.state.index)

    }
    
}

export default App
