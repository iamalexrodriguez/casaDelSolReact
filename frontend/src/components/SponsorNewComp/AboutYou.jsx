import React from 'react'
import { Button, Input  } from 'antd'

function AboutYou({ onClick, handleStep1 }) {
    const {TextArea} = Input
  return (
    <div>
      <h4>¿Porque quieres apadrinar a un niño?</h4>
      <TextArea rows={4} type="text" name="text" onChange={handleStep1} />
      <Button onClick={onClick}>Siguiente paso</Button>
    </div>
  )
}

export default AboutYou