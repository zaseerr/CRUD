import React, { useState, useEffect } from 'react'
import { Form, Button } from 'semantic-ui-react'
import axios from 'axios';

export default function Update() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [ID, setID] = useState(null);

    console.log(firstName);
    console.log(lastName)
    
    const sendDataToAPI =() =>{
axios.put(`https://637b59b810a6f23f7fa64158.mockapi.io/crud/${ID}`, {
    firstName,
    lastName
})
 }

 useEffect(() =>{
setFirstName(localStorage.getItem('firstName'));
setFirstName(localStorage.getItem('lastName'));
setID(localStorage.getItem('ID'))
 }, [])
    
  return (
    <div>
      <Form>
    <Form.Field>
      <label>First Name</label>
      <input name= "fname" 
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
       placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      value={lastName}
      <input name= "lame"
      onChange={(e) => setLastName(e.target.value)}
      placeholder='Last Name' />
    </Form.Field>
    
    <Button type='submit' onClick={sendDataToAPI} >Update</Button>
  </Form>
    </div>
  )
}
