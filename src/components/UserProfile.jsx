import React, { useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    name: "John Dio",
    age: 20,
    city: "Cebu",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevUser) => ({...prevUser, [name]: value}));
  };

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>

      <h2>Update User Age</h2>
      <input type="number" name="age" value={user.age} onChange={handleChange} />
      
      <h2>Update User Name</h2>
      <input type="text" name="name" value={user.name} onChange={handleChange} />
      
      <h2>Update User City</h2>
      <input type="text" name="city" value={user.city} onChange={handleChange} />
    </div>
  );
}

export default Profile;


  // const handleAgeChange = (e) => {
  //   setUser((prevUser) => {
  //     const updatedUser = { ...prevUser, age: e.target.value };
  //     return updatedUser;
  //   });
  // };

  // const handleNameChange = (e) => {
  //   setUser((prevUser) => ({
  //     ...prevUser,
  //     name: e.target.value,
  //   }));
  // };

  // const handleCityChange = (e) => {
  //   setUser((prevUser) => ({
  //     ...prevUser,
  //     city: e.target.value,
  //   }))
  // }