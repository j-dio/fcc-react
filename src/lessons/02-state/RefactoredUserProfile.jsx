import React, { useState } from 'react';

function Profile() {
  const [user, setUser] = useState({
      name: "John Dio",
      age: 20,
      city: "Cebu", 
    })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({...prevUser, [name]: value}))
  }
  
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>

      <h1>Update Name</h1>
      <input type='text' name='name' value={user.name} onChange={handleChange} />
      
      <h1>Update Age</h1>
      <input type='number' name='age' value={user.age} onChange={handleChange} />
      
      <h1>UpdateCity</h1>
      <input type='text' name='city' value={user.city} onChange={handleChange} />
    </div>
  )
}

export default Profile