import React, { Component } from 'react'
import axios from 'axios';
import Child from './Child';
import Awards from '../Awards/Awards'
import { element } from 'prop-types';
let url = "http://localhost:3000/children/childrenAll"

export default class Children extends Component {
    state = {
        children: [],
        displayAwards: false,
        
    }

    componentDidMount() {
        axios.get(url)
            .then(res => this.setState({ children: res.data }))
            .catch(e => console.log(e))
    }

    drawChild = (elem, index) => {
        return <Child key={index} name={elem.name} profilePic={elem.profilePic} />
    }

    toggleDisplayAwards = () => {
        let { displayAwards } = this.state
        displayAwards ? displayAwards = false : displayAwards = true
        this.setState({ displayAwards })
    }

    drawDisplayAwards = () => {
        let { displayAwards, children } = this.state
        if (displayAwards === true) {
            return (<Awards  children={children} toggleDisplayAwards={this.toggleDisplayAwards} user={this.props.user}/>)
        } else {
            return <button onClick={this.toggleDisplayAwards}>Ver awards</button>
        }

    }




    render() {
        let { children } = this.state
        console.log(this.state)
        return (
            <div>
                <h3>Tus ahijados..</h3>
                {this.drawDisplayAwards()}
                <div>
                    {children.map(this.drawChild)}
                </div>


            </div>
        )
    }
}
