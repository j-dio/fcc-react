import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Your name</label> <br />
        <input value={name} id='name' onChange={handleChange} type='text' />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App;