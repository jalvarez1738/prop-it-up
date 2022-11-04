import React, { Component } from 'react';
    
export default class PropItUp extends Component {

    render() {
    console.log(this.props)
    const {firstName, lastName, age, hairColor} = this.props
        return (
            <fieldset>
                <h3>{firstName} {lastName}</h3>
                <h3>Age: {age}</h3>
                <h3>Hair color: {hairColor}</h3>
                <button onClick={() => {age++}}>Happy Birthday {firstName}</button>
            </fieldset>
        )
    }
}