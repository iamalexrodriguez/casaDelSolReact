import React, { Component } from 'react'
import axios from 'axios';
import Child from './Child';
import Awards from '../Awards/Awards'
import NewMail from '../Forms/NewMail'
import NewVisit from '../Forms/NewVisit'
let url = "http://localhost:3000/children/childrenAll"

export default class Children extends Component {
    state = {
        children: [],
        displayAwards: false,
        displayMail: false,
        displayDates: false,
    }

    componentDidMount() {
        axios.get(url)
            .then(res => this.setState({ children: res.data }))
            .catch(e => console.log(e))
    }

    drawChild = (elem, index) => {
        return <Child key={index} children={this.state.children} name={elem.name} profilePic={elem.profilePic} />
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


    toggleDisplayMail = () =>{
        let {displayMail} = this.state
        displayMail ? displayMail = false : displayMail = true
        this.setState({displayMail})
    }

    toggleDisplayVisit = () =>{
        let {displayDates} = this.state
        displayDates ? displayDates = false : displayDates = true
        this.setState({displayDates})
    }
 



    drawDisplayMail = () => {
        let{ displayMail } = this.state

        if(displayMail === true){
            return(<NewMail toggleDisplayMail={this.toggleDisplayMail} user={this.props.user} />)
        } else {
            return <button onClick={this.toggleDisplayMail}>Enviar un mensaje</button>
        }
    } 

    drawDisplayDates = () =>{
        let { displayDates } = this.state
        if(displayDates === true){
            return(<NewVisit toggleDisplayVisit={this.toggleDisplayVisit} user={this.props.user} />)
        } else{
            return <button onClick={this.toggleDisplayVisit}>Agendar una visita</button>
        }

    }



    render() {
        let { children } = this.state
        return (
            <div>
                <h3>Tus ahijados..</h3>
                {this.drawDisplayAwards()}
                {this.drawDisplayMail()}
                {this.drawDisplayDates()}
                <div>
                    {children.map(this.drawChild)}
                </div>


            </div>
        )
    }
}
