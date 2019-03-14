import React, {Component} from 'react'
import { DatePicker, Button} from 'antd'
import toastr from 'toastr'
import axios from 'axios'
import locale from 'antd/lib/date-picker/locale/es_ES';
import Slide from 'react-reveal/Slide'
// let updateUrl = "http://localhost:3000/updateuser"

const updateurldeploy = "https://casadelsolpueblareact.herokuapp.com/private"

class NewVisit extends Component{
    state = {
        dateToVisit: ""
    }

    onChange(date, dateString) {
        console.log(date, dateString);
    }

    onSubmit = () =>{
        let {user} = this.props
        user.awards.push("¡Tu primera visita!")
        const data = {
            user
        }
        toastr.success('Fecha agendada, ganaste un award!');

        this.props.toggleDisplayVisit()
        axios.post(updateurldeploy, data, { withCredentials: true })
        .then(res => console.log(res))
        .catch(e => console.log(e));


    }




    render(){
        return(
            <div>
                <Slide collapse right>
                <form style={formStyle} action="">
                <h2>¡Programa tu visita!</h2>
                <p>¿Cuando te gustaría visitarnos?</p>
                <DatePicker locale={locale} onChange={this.onChange} />
                <Button onClick={this.onSubmit} type="primary" ghost>Enviar</Button>
                </form>
                </Slide>
            </div>
        )
    }
}


let formStyle = {
    paddingTop:"20px",
    paddingRight:"40px",
    flexWrap: "wrap",
    width:"30vw"

  }

export default NewVisit