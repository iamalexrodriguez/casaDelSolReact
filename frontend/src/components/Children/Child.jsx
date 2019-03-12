import React, { Component } from 'react';

class Child extends Component {
   
    render() {
        let { name , profilePic} = this.props
        console.log(this.props)
        return (
            <div>
                <div> <img style={{width:"200px"}} src={profilePic} alt="photochild"/></div>
                <div>{name} </div>
            </div>
        )

    }
}

export default Child;