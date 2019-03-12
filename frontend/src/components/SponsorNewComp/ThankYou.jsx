import React from 'react'
import { Button, Input  } from 'antd'

function ThankYou({ onClick, handleStep2 }) {
  return (
    <div>
      <h4>Gracias</h4>
      <Button onClick={onClick}>Siguiente paso</Button>
    </div>
  )
}

export default ThankYou