import React from 'react'
import { Button, Input  } from 'antd'

function ThankYou({ onClick, handleStep2 }) {
    const {TextArea} = Input
  return (
    <div>
      <h4>¿Qué te gustaría ver en tu ahijado?</h4>
      <Button onClick={onClick}>Siguiente paso</Button>
    </div>
  )
}

export default ThankYou