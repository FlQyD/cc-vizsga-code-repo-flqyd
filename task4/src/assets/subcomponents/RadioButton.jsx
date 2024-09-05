import React from 'react'

const RadioButton = ({active, setActive, value, num}) => {


  return (
    
        active === value ? 
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="exampleRadios" id={"\"exampleRadios"+num+"\""} value="option1" onChange={setActive(value)} checked/>
                <label class="form-check-label" for="exampleRadios1">{value}</label>
            </div>
        : 
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="exampleRadios" id={"\"exampleRadios"+num+"\""} value="option1" onChange={setActive(value)} />
                <label class="form-check-label" for="exampleRadios1">{value}</label>
            </div>
    
  )
}

export default RadioButton