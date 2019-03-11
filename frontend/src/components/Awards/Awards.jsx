import React, { Component } from 'react'
import axios from 'axios'
const url = "http://localhost:3000/children/badgesAll"

export default class Awards extends Component {
    state = {
        badges:[],
        firstLogin : false,
        firstSponsoredChild : false

    }

    componentDidMount() {
        axios.get(url)
            .then(res => this.setState({ badges: res.data }))
            .catch(e => console.log(e))
    }

    drawBadges = () => {
        let {badges} = this.state
        return badges.map((badge, key)=>(
            <div style={badgeStyle} key={key}>
                <h3>{badge.title}</h3>
                <img src={badge.photoUrl} alt="badgeImage" style={imageBadgeStyle} />
            
            </div>
        ))
        }
      
    updateBadges = () => {
         this.setState({
             badges: this.state.badges.map(badge =>{
                 if(badge.title === "First Login"){
                     imageBadgeStyle.filter = "grayscale(0%)"
                 }
                 return badge
             })
         }) 
    }
        


    render() {
        console.log(this.state)
        return (
            <div>
                <p>Tus awards</p>
                {this.updateBadges()}
                {this.drawBadges()}

                <button onClick={this.props.toggleDisplayAwards}>Ocultar</button>
            </div>
        )
    }
}


let badgeStyle ={
    filter: 'greyscale(1)'
    
}

let imageBadgeStyle = {
    width:"100px",
    filter: "grayscale(100%)"
}


//todos en gris
//