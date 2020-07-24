import React, { Component } from 'react'

export class QList extends Component {
    render() {

        const { test, index } = this.props; 
        return (
            <div>
                <p>Question {index+1}: {test[index]}</p>
            </div>
        )
    }
}

export default QList