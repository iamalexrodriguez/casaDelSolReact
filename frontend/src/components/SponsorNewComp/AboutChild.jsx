import React from 'react'
import { Button, Input, Icon  } from 'antd'

function AboutChild({ onClick, handleStep2 }) {
    const {TextArea} = Input
  return (
    <div>
      <h4>¿Qué te gustaría ver en tu ahijado?</h4>
      <TextArea rows={4} type="text" name="text" onChange={handleStep2} />
      <br/> <br/>
      <Button onClick={onClick} type="primary" ghost>Siguiente paso <Icon type="right"/> </Button>
    </div>
  )
}

export default AboutChild