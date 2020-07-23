import Form from 'components/Form'
import QList from 'components/qList'
import React, { Component } from 'react'


export class App extends Component {
    constructor(){
        super();
        this.state = {
            questions : [
                            {qNum: '1', text: 'one'},
                            {qNum: '2', text: 'two'},
                            {qNum: '3', text: 'three'},
                        ]
                    }
    }
    


    render() {
        return (
            <div>
                <form>
                <QList />
                <Form />
                </form>
            </div>
        )
    }
}

export default App
