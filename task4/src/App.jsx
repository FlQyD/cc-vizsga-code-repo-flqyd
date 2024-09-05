import React, { useState } from 'react'
import Title from './assets/subcomponents/Title'
import RadioButtons from './assets/subcomponents/RadioButtons';
import Books from './assets/subcomponents/Books';

const App = ({books}) => {
  const [filter, setFilter] = useState("AC")

  return (
    <>
      <Title />
      <RadioButtons active={filter} setActive={setFilter}/>
      <Books books={books} active={filter}/>
    </>
  )
}

export default App

