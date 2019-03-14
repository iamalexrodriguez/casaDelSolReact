import React, { Component } from 'react'
import axios from 'axios';
import Child from './Child';
import Awards from '../Awards/Awards'
import NewMail from '../Forms/NewMail'
import NewVisit from '../Forms/NewVisit'
import { Button, Affix } from 'antd'

// let url = "http://localhost:3000/children/sponsoredchildren"
let urlDeploy = "https://casadelsolpueblareact.herokuapp.com/children/sponsoredchildren"

export default class Children extends Component {
    state = {
        children: { sponsoredChildren: [] },
        displayAwards: false,
        displayMail: false,
        displayDates: false,
        top: 30
    }

    componentDidMount() {
        axios.get(urlDeploy, { withCredentials: true })
            .then(res =>
                this.setState({ children: res.data[0] })
            )
            .catch(e => console.log(e))
    }

    drawChild = (elem, index) => {
        return <Child key={index} pictureGallery={elem.pictureGallery} name={elem.name} profilePic={elem.profilePic} />
    }



    toggleDisplayAwards = () => {
        let { displayAwards } = this.state
        displayAwards ? displayAwards = false : displayAwards = true
        this.setState({ displayAwards })
    }

    drawDisplayAwards = () => {
        let { displayAwards, children } = this.state
        if (displayAwards === true) {
            return (<Awards children={children} toggleDisplayAwards={this.toggleDisplayAwards} user={this.props.user} />)
        } else {
            return <Button type="primary" styles={{ height: "50px" }} size={"large"} onClick={this.toggleDisplayAwards}>Ver awards</Button>
        }

    }


    toggleDisplayMail = () => {
        let { displayMail } = this.state
        displayMail ? displayMail = false : displayMail = true
        this.setState({ displayMail })
    }

    toggleDisplayVisit = () => {
        let { displayDates } = this.state
        displayDates ? displayDates = false : displayDates = true
        this.setState({ displayDates })
    }




    drawDisplayMail = () => {
        let { displayMail } = this.state

        if (displayMail === true) {
            return (<NewMail toggleDisplayMail={this.toggleDisplayMail} user={this.props.user} />)
        } else {
            return <Button size={"large"} onClick={this.toggleDisplayMail}>Enviar un mensaje</Button>
        }
    }

    drawDisplayDates = () => {
        let { displayDates } = this.state
        if (displayDates === true) {
            return (<NewVisit toggleDisplayVisit={this.toggleDisplayVisit} user={this.props.user} />)
        } else {
            return <Button size={"large"} onClick={this.toggleDisplayVisit}>Agendar una visita</Button>
        }

    }

    showNoKids = () => {

    }



    render() {
        let { children } = this.state
        let { username } = this.props.user
        if (children.sponsoredChildren.length === 0) return <div style={messageStyle}> <h1>Aún no tienes ahijados</h1></div>
        return (
            <div style={containerStyle}>
                <br/>
                <h1>¡Bienvenido, {username}!  </h1>
                <Affix offsetTop={this.state.top}>
                <div style={{ float: "right" }}>
                    {this.drawDisplayAwards()}
                    {this.drawDisplayMail()}
                    {this.drawDisplayDates()}
                </div>
                </Affix>
                <div>

                    {children.sponsoredChildren.map(this.drawChild)}
                </div>


            </div>
        )
    }
}


let messageStyle = {
    textAlign: "center"
}

let containerStyle = {
    paddingLeft:"5%"
}

