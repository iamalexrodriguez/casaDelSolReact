import React from 'react'
import { Button, Input  } from 'antd'

function AboutChild({ onClick, handleStep2 }) {
    const {TextArea} = Input
  return (
    <div>
      <h4>¿Qué te gustaría ver en tu ahijado?</h4>
      <TextArea rows={4} type="text" name="text" onChange={handleStep2} />
      <Button onClick={onClick}>Siguiente paso</Button>
    </div>
  )
}

export default AboutChild