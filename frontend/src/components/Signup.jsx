import React from 'react'
import axios from 'axios'
import {Input, Button} from 'antd'
// let url = 'http://localhost:3000/signup'
import toastr from 'toastr'
let urldeploy = "https://casadelsolpueblareact.herokuapp.com/signup"

class Signup extends React.Component {
    state = {
        newUser : {},
        errors : {},
        bottom: 0
    }
    
    handleChange = e => {
        let { newUser, errors} = this.state
        newUser[e.target.name] = e.target.value
        //validations
        errors = {}
        if (newUser.password !== newUser.password2) errors.password = "Tus contraseñas no coinciden"
        this.setState({newUser, errors})
    }
    
    sendToServer = () => {
        let {newUser, errors} = this.state
        if(errors === {}) return 
        axios.post(urldeploy, newUser)
        .then(res =>{
            this.props.history.push('/login')
            toastr.success('Cuenta creada, haz login con ella');
            
        })
        .catch(e => console.log(e))
    }

    render() {
        let {errors} = this.state
        return (
            <div>
                    <div style={formStyle}>
                    <form action="">
                    <br/>
                        <h3>Crea tu cuenta</h3>
                        <br/>
                        <Input style={inputStyle} type="text" name="username" placeholder="Nombre de usuario" onChange={this.handleChange}/>
                        <br/><br/>
                    
                        <Input style={inputStyle} type="email" name="email" placeholder="Correo electrónico" onChange={this.handleChange}/>
                        <br/><br/>
                    
                        <Input style={inputStyle} type="password" name="password" placeholder="Contraseña" onChange={this.handleChange}/>
                        <br/><br/>
                        
                        <Input style={inputStyle} type="password" name="password2" placeholder="Confirma tu contraseña" onChange={this.handleChange}/>
                        <p style={{color:"red"}}>{errors.password}</p>
                        <Button onClick={this.sendToServer}>Sign Up</Button>
                        </form>
                    </div>

                    {/* <div style={footerStyle}>
                            . 
                        </div> */}
            </div>

            
        )
    }
}

let inputStyle = {
    width: "30vw",
    padding:"10px"
}

let formStyle = {
  paddingTop:"60px",
  display:"flex",
  justifyContent: "center"
}


// let footerStyle ={
//     background:"#0297FF",
//     marginTop:"40vh",
//     height:"5vh"
// }



export default Signup