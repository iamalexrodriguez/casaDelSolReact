import React, { Component } from 'react'
import { Input, Cascader, Button } from 'antd'
import toastr from 'toastr'
import axios from 'axios'
import Slide from 'react-reveal/Slide'
// let url = "http://localhost:3000/children/childrenAll"
// let updateUrl = "http://localhost:3000/updateuser"
let urlDeploy = "https://casadelsolpueblareact.herokuapp.com/children/childrenAll"
let updateUrlDeploy = "https://casadelsolpueblareact.herokuapp.com/updateuser"


const { TextArea } = Input

class NewMail extends Component {
    state = {
        children: [],
        options: [],
        childToSend: "",
        messageToSend: ""
    }


    componentDidMount() {
        const { options } = this.state
        axios.get(urlDeploy)                                                              
            .then(res => {
                const children = res.data
                children.map(child => options.push({ value: child.name, label: child.name }))
                this.setState({ children: res.data, options })
            })
            .catch(e => console.log(e))
    }


    onChange = (value) => {
        let {childToSend} = this.state
        childToSend = value
        this.setState({ childToSend })
    }


      

    onSubmit = () =>{
        let {user} = this.props
        user.awards.push("Una carta enviada")
        const data = {
            user
        }
        toastr.success('Solicitud enviada, ganaste un award!');

        this.props.toggleDisplayMail()
        axios.post(updateUrlDeploy, data, { withCredentials: true })
        .then(res => console.log(res))
        .catch(e => console.log(e));


    }






    render() {

        return (
            <div  >
                <Slide right>
                <form style={formStyle}>
                <p>¿A quién le damos tu mensaje?</p>
                <br/>
                <Cascader options={this.state.options} onChange={this.onChange} placeholder="Busca aquí" />
                <br/>
                <p>Tu mensaje:</p>
                <TextArea placeholder="Tus ahijados" autosize={{ minRows: 2, maxRows: 20 }} />
                <Button onClick={this.onSubmit} type="primary" ghost>Enviar</Button>
                </form>
                </Slide>

            </div>
        )
    }
}


let formStyle = {
    paddingTop:"20px",
    display:"flex",
    flexWrap: "wrap",
    width:"30vw"

  }

export default NewMail