import React from 'react'
import { Button, Input  } from 'antd'

function AboutCommitment({ onClick, handleStep3, onSubmit }) {
    const {TextArea} = Input
  return (
    <div>
      <h4>¿Si fueras a escribir un par de compromisos con tu nuevo ahijado cuales serían?</h4>
      <TextArea rows={4} type="text" name="text" onChange={handleStep3} />
      <Button onClick={onSubmit} message={'Listo'}>Finalizar</Button>
    </div>
  )
}

export default AboutCommitment


// message.success('Gracias!')