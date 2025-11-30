import React, { useState } from 'react';

function Counter() {
  const initialValue = 0;

  const [count, setCount] = useState(initialValue);

  return (
    <div>
      {/*Displays the current state value.*/}
      <h2>{count}</h2>

      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Counter;

/*
manage multiple pieces of state by calling the useState hook multiple times. This is especially important when you have unrelated state variables:

function UserProfile() {
  const [isOnline, setIsOnline] = useState(false);
  const [notifications, setNotifications] = useState(0);  
}

You can also call the useState hook multiple times when managing multiple states that update separately, like form fields:
function SignUpForm() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
}

But in this case, it's best to combine the states since they're all part of the same form:
*/

// function SignUpForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     userName: "",
//     email: "",
//   })
// }