import React, { Component } from "react";
import Routes from "./Routes.jsx";
import { NavLink } from "react-router-dom";
import axios from "axios";
import './App.css';
// let loginUrl = "http://localhost:3000/login";
// let logoutURL = "http://localhost:3000/logout";
// const url = "http://localhost:3000/private";

let loginUrlDeploy = "https://casadelsolpueblareact.herokuapp.com/login"
let logoutURLDeploy = "https://casadelsolpueblareact.herokuapp.com/logout"
const urldeploy = "https://casadelsolpueblareact.herokuapp.com/private"





class App extends Component {
  state = {
    isLogged: false,
    user: {}
  };

  checkLogged = () => {
    axios
      .get(urldeploy, { withCredentials: true })
      .then(res => {
        this.setState({ isLogged: true , user : res.data.user});
        this.render();
      })
      .catch(e => {
        this.setState({ isLogged: false });
        this.render();
      });
  };

  drawNavs = () => {
    let { isLogged } = this.state;
    if (isLogged) {
      return (
        <div style={navStyle}>
          <NavLink activeStyle={{ fontWeight: "bolder" }} exact to="/">
            Home
          </NavLink>

          <span> | </span>
          <NavLink activeStyle={{ fontWeight: "bolder" }} to="/sponsornew">
            Apadrinar a un niño
          </NavLink>

          <span> | </span>
          <NavLink activeStyle={{ fontWeight: "bolder" }} to="/children">
            Ahijados
          </NavLink>

          <span> | </span>
          <NavLink activeStyle={{ fontWeight: "bolder" }} to="/profile">
            Perfil
          </NavLink>

          <span> | </span>
          <NavLink activeStyle={{ fontWeight: "bolder" }} to="/logout">
            Sign Out
          </NavLink>
        </div>
      );
    } else {
      return (
        <nav style={navStyle}>
          <NavLink activeStyle={{ fontWeight: "bolder" }} exact to="/">
            Home
          </NavLink>
          <span> | </span>
          <NavLink activeStyle={{ fontWeight: "bolder" }} to="/login">
            Login
          </NavLink>
          <span> | </span>
          <NavLink activeStyle={{ fontWeight: "bolder" }} to="/signup">
            Signup
          </NavLink>
        </nav>
      );
    }
  };

  componentDidMount = () => {
    this.checkLogged();
  };



  logIn = auth => {
    axios
      .post(loginUrlDeploy, auth, { withCredentials: true })
      .then(res => {
        this.setState({ isLogged: true , user:res.data })
      })
      .catch(e => {
        let message = "Invalid username and password";
        this.setState({ message });
      });
  };

  logOut = () =>{
    axios.get(logoutURLDeploy , {withCredentials:true})
    .then(res => {
        this.setState({isLogged:false}) 
      })
    .catch(e => console.log(e))
  }

  drawFooter = () =>{
    return(
      <div>
        this is the footer
      </div>
    )
  }




  render() {
    const { isLogged ,user } = this.state;

    return (
      <div>
          <div>
          {this.drawNavs()}
              <img src="https://res.cloudinary.com/alexrodriguezcloud/image/upload/v1552451448/casaDelSol/Logo-Casa-del-Sol-jpg_1.png" style={imageStyle} alt="logo"/>
              <Routes isLogged={isLogged} logIn={this.logIn} logOut={this.logOut} user={user} />

          </div>
      </div>
    );
  }
}

export default App;



let navStyle ={
  padding:"10px",
  float:"right"

}

let imageStyle={
  height:"55px",
  padding:"5px"

}