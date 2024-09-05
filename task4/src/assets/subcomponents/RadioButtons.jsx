import React, { act } from 'react'
import RadioButton from './RadioButton'

const RadioButtons = ({active, setActive}) => {

    
  return (
    <div>
        <RadioButton active={active} setActive={setActive} value={"AC"} num={"1"} />
        <RadioButton active={active} setActive={setActive} value={"BC"} num={"2"}/>
        <RadioButton active={active} setActive={setActive} value={"ALL"} num={"3"}/>
    </div>
  )
}

export default RadioButtons