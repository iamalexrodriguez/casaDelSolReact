import React, {Component} from 'react'
import { DatePicker} from 'antd'
import toastr from 'toastr'
import axios from 'axios'
import locale from 'antd/lib/date-picker/locale/es_ES';
let updateUrl = "http://localhost:3000/updateuser"

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
        axios.post(updateUrl, data, { withCredentials: true })
        .then(res => console.log(res))
        .catch(e => console.log(e));


    }




    render(){
        return(
            <div>
                <p>The dates will go here</p>
                <DatePicker locale={locale} onChange={this.onChange} />
                <button onClick={this.onSubmit}>Enviar</button>
            </div>
        )
    }
}


export default NewVisit