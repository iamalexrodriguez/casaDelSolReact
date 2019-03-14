import React, { Component } from 'react'
import { Steps } from 'antd'
import toastr from 'toastr'
import axios from 'axios'
import Slide from 'react-reveal/Slide'
import AboutYou from './SponsorNewComp/AboutYou';
import AboutChild from './SponsorNewComp/AboutChild'
import AboutCommitment from './SponsorNewComp/AboutCommitment'
// let emailUrl = "http://localhost:3000/sendnewmail";
const emailurldeploy = "https://casadelsolpueblareact.herokuapp.com/sendnewmail"


class App extends Component {

    state = {
        info1: {},
        info2: {},
        info3: {},
        current: 0,
        steps: [
            {
                title: 'Acerca de ti',
                content: () => (
                    <div>
                        <AboutYou onClick={this.next} handleStep1={this.handleStep1} />
                    </div>
                )
            },
            {
                title: 'Tu ahijado',
                content: () => (
                    <div>
                        <AboutChild onClick={this.next} handleStep2={this.handleStep2} />
                    </div>
                )
            },
            {
                title: 'Tu compromiso',
                content: () => (
                    <div>
                        <AboutCommitment onSubmit={this.onSubmit} onClick={this.next} handleStep3={this.handleStep3} user={this.props} />
                    </div>
                )
            }
        ]
    }

    next = () => {
        const current = this.state.current + 1
        this.setState({ current })
    }

    handleStep1 = e => {
        const { info1 } = this.state
        const key = e.target.name
        info1[key] = e.target.value
        this.setState({ info1 })
    }

    handleStep2 = e => {
        const { info2 } = this.state
        const key = e.target.name
        info2[key] = e.target.value
        this.setState({ info2 })
    }

    handleStep3 = e => {
        const { info3 } = this.state
        const key = e.target.name
        info3[key] = e.target.value
        this.setState({ info3 })
    }



    onSubmit = () => {
        const current = this.state.current + 1
        let { user } = this.props
        user.awards.push("Nuevo ahijado")
        let { info1, info2, info3 } = this.state
        let form = {}
        form['about'] = info1.text
        form['ahijado'] = info2.text
        form['compromiso'] = info3.text
        this.setState({ current })
        const data = {
            user,
            form
        }
        toastr.success('Solicitud enviada, ganaste un award!');

        console.log(data)
        axios.post(emailurldeploy, data, { withCredentials: true })
            .then(res => console.log(res))
            .catch(e => console.log(e));
    }

    render() {
        const { current, steps } = this.state
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100vw',
                    height: '100vh',
                    padding: '10%',
                    flexDirection: 'column'
                }}
            >

                <Slide down>
                <Steps current={current}>
                    {steps.map(step => (
                        <Steps.Step key={step.title} title={step.title} />
                    ))}
                </Steps>
                </Slide>


                {current === 0 && steps[current].content()}
                {current === 1 && steps[current].content()}
                {current === 2 && steps[current].content()}
            </div>
        )
    }
}

export default App