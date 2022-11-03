import React, { Component } from 'react';
    
    
class PropItUp extends Component {
    render() {
        return (
            <div>
                <h3>{ this.props.firstName }</h3>
                <h3>{ this.props.lastName }</h3>
                <h3>{ this.props.age }</h3>
                <h3>{ this.props.hairColor }</h3>
            </div>
        )
    }
}
    
export default PropItUp;