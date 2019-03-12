import React, { Component } from 'react'
import { Input, Cascader } from 'antd'
import toastr from 'toastr'
import axios from 'axios'
let url = "http://localhost:3000/children/childrenAll"
let updateUrl = "http://localhost:3000/updateuser"

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
        axios.get(url)                                                              
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
        console.log(this.state)
    }


      

    onSubmit = () =>{
        let {user} = this.props
        user.awards.push("Una carta enviada")
        const data = {
            user
        }
        toastr.success('Solicitud enviada, ganaste un award!');

        this.props.toggleDisplayMail()
        axios.post(updateUrl, data, { withCredentials: true })
        .then(res => console.log(res))
        .catch(e => console.log(e));


    }






    render() {

        return (
            <div>
                <p>¿A quién le damos tu mensaje?</p>
                <Cascader options={this.state.options} onChange={this.onChange} placeholder="¿A quién le enviamos tu mensaje?" />

                <p>Tu mensaje:</p>
                <TextArea placeholder="Tus ahijados" autosize={{ minRows: 2, maxRows: 20 }} />
                <button onClick={this.onSubmit}>Enviar</button>



            </div>
        )
    }
}


export default NewMail