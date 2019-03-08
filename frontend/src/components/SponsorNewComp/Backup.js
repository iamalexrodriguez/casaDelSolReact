import React from 'react'

import { Steps, Button, message, Checkbox, Slider } from 'antd';

const Step = Steps.Step;



class SponsorNew extends React.Component {

    state = {
        current: 0,
    }

    Step = Steps.Step;

    onChangeStep1(e) {
        console.log(`checked = ${e.target.checked}`);
      }

    drawCheckBoxes = ()=>{
            return <div className="steps">
                <p>Me gustaría que mi nuevo ahijado fuera..</p>
                <Checkbox name="checkbox1" onChange={this.onChangeStep1}>Creativo</Checkbox>
                <Checkbox name="checkbox2" onChange={this.onChangeStep1}>Deportivo</Checkbox>
                <Checkbox name="checkbox3" onChange={this.onChangeStep1}>Estudioso</Checkbox>   
                <Checkbox name="checkbox3" onChange={this.onChangeStep1}>Juguetón</Checkbox>             
            </div>
    }

    onChangeStep2(e) {
        console.log(`checked = ${e.target.checked}`);
      }

      drawAgeBoxes = () =>{
        return <div>
            <Checkbox name="checkbox1" onChange={this.onChangeStep1}>Niña</Checkbox>
                <Checkbox name="checkbox2" onChange={this.onChangeStep1}>Niño</Checkbox>

        </div>
    }

    
    steps = [{
      title: 'Intereses',
      content: 
       this.drawCheckBoxes(),
    }, {
      title: 'Edad',
      content: 
       this.drawAgeBoxes(),
    }, {
      title: 'Escolaridad',
      content: 'Last-content',
    }];



  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }



  render() {
    const { current } = this.state;
    return (
      <div>
        <Steps current={current}>
          {this.steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content">{this.steps[current].content}</div>
        <div className="steps-action">
        {
            current > 0
            && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
            )
          }
          {
            current < this.steps.length - 1
            && <Button type="primary" onClick={() => this.next()}>Next</Button>
          }
          {
            current === this.steps.length - 1
            && <Button type="primary" onClick={() => message.success('Gracias!')}>Done</Button>
          }
          
        </div>
      </div>
    )
  }
}


export default SponsorNew;
