import React, { Component } from 'react'
import axios from 'axios'
const url = "http://localhost:3000/children/badgesAll"

export default class Awards extends Component {
    state = {
        badges: [],

    }

    componentDidMount() {
        axios.get(url)
            .then(res => this.setState({ badges: res.data }))
            .catch(e => console.log(e))
    }

    drawBadges = () => {
        let { badges } = this.state
        let { user } = this.props
        console.log(this.props)
        return badges.map((badge, key) => {
            let styles = badgeStyle.simple

            if (badge.title === "First Login") {
                styles = badgeStyle.imageBadgeStyle
            } 

            else if(user.sponsoredChildren.length > 0 && badge.title === "Primer ahijado"){
                styles = badgeStyle.imageBadgeStyle
            }

            else if(user.awards.includes("Nuevo ahijado") && badge.title === "Nuevo ahijado"){
                styles = badgeStyle.imageBadgeStyle
            }

            else if(user.awards.includes("Una carta enviada") && badge.title === "Una carta enviada"){
                styles = badgeStyle.imageBadgeStyle
            }

            else if(user.awards.includes("¡Tu primera visita!") && badge.title === "¡Tu primera visita!"){
                styles = badgeStyle.imageBadgeStyle
            }

            

        

            return <div style={badgeStyle} key={key}>
                <h3>{badge.title}</h3>

                <img src={badge.photoUrl} alt="badgeImage" style={styles} />

            </div>
        })
    }



    render() {
        console.log(this.state)
        return (
            <div style={{display:"flex"}}>
                {this.drawBadges()}
                <button onClick={this.props.toggleDisplayAwards}>Ocultar</button>
            </div>
        )
    }
}


let badgeStyle = {
    simple: {
        filter: "grayscale(100%)",
        width: "150px",
    },
    imageBadgeStyle: {
        width: "150px",
        filter: "grayscale(0%)"
    }

}

