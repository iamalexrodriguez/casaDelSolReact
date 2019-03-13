import React, {Component} from 'react'
import { DatePicker, Button} from 'antd'
import toastr from 'toastr'
import axios from 'axios'
import locale from 'antd/lib/date-picker/locale/es_ES';
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
                <h2>¡Programa tu visita!</h2>
                <DatePicker locale={locale} onChange={this.onChange} />
                <Button onClick={this.onSubmit}>Enviar</Button>
            </div>
        )
    }
}


export default NewVisit