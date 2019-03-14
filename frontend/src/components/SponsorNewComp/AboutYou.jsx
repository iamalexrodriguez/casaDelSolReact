import React from 'react'
import { Button, Input, Icon  } from 'antd'

function AboutYou({ onClick, handleStep1 }) {
    const {TextArea} = Input
  return (
    <div>
      <h4>¿Porque quieres apadrinar a un niño?</h4>
      <TextArea rows={4} type="text" name="text" onChange={handleStep1} />
      <br/> <br/>
      <Button onClick={onClick} type="primary" ghost>Siguiente paso <Icon type="right"/> </Button>
    </div>
  )
}

export default AboutYou