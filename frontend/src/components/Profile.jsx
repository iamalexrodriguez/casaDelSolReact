import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {Button} from 'antd';
// let url = "http://localhost:3000/private";
const urldeploy = "https://casadelsolpueblareact.herokuapp.com/private"



export default class Profile extends React.Component {
    state = {user:{}}

    componentDidMount(){
        axios.get(urldeploy, {withCredentials: true})
            .then(res => {
                this.setState({user: res.data.user})
                this.forceUpdate()
            })
            .catch(e=> this.history.push("/login" ))
    }
                    
    componentWillReceiveProps(){
        axios.get(urldeploy, {withCredentials: true})
        .then(res => {
            this.setState({user: res.data.user})
            this.forceUpdate()})
            .catch(e=> this.history.push("/login" ))                               
    }

    render() {
        let { profilePic, username, email } = this.state.user
        return (
            <div style={formStyle}>
                <img src={profilePic} alt="profilepic" style={{height:"40vh", borderRadius: "10px"}} />
                <h3>  <strong>Nombre de usuario :</strong>   {username}</h3>
                <p> <strong>Email:</strong>  {email}</p>
                <Link to="/profile/edit"><Button>Edit</Button></Link>
            </div>
        )
    }
}


let formStyle = {
    paddingTop:"60px",
    display:"flex",
    flexDirection:"column",
    alignItems: "center"
  }