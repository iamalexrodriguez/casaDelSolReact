import React from "react";
import { Input , Button} from 'antd';

class Login extends React.Component {
  state = {
    auth: {},
    message: ""
  };

  handleChange = e => {
    let { auth } = this.state;
    auth[e.target.name] = e.target.value;
    this.setState({ auth });
  };

  render() {
    let { message, auth } = this.state;
    return (
      <div style={formStyle}>
      
        <form action="">
        <p>Tu email:</p>
        <Input
          style={inputStyle}
          type="email"
          name="email"
          placeholder="email"
          onChange={this.handleChange}
        />
        <br />
        <p>Tu contraseña:</p>
        <Input
          style={inputStyle}
          type="password"
          name="password"
          placeholder="password"
          onChange={this.handleChange}
        />
        <p style={{ color: "red" }}> {message} </p>
        <br />
        <div style={{textAlign:"left", color:"darkgrey"}}>
        <p> Cuenta demo: </p>
        <p> Mail: <strong>demo@ironhack.com</strong> </p>
        <p> Pass: <i>123</i></p>
        </div>
        <br/>
        <Button style={{}}onClick={() => this.props.logIn(auth)}>Log in</Button>
        </form>
        </div>
    );
  }
}

let inputStyle = {
    width: "30vw",
    padding:"8px"
}

let formStyle = {
  paddingTop:"60px",
  display:"flex",
  justifyContent: "center"
}

export default Login;