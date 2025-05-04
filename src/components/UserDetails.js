import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

function UserDetails() {
  const {id}=useParams()
  let [user,setUser]=useState(null)

  useEffect(() => {
    setUser(null); // ensure reset if id changes
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(err => console.error('Error:', err));
    }, 300); // artificial delay so "Loading..." is visible
  }, [id]);
  

  if (!user) return <div>Loading...</div>;
  return (
    <div>
      <h1>User Details</h1>
      <p><strong>Name: </strong>{user.name}</p>
      <p><strong>Username: </strong>{user.username}</p>
      <p><strong>Email: </strong>{user.email}</p>
      <p><strong>Phone: </strong>{user.phone}</p>
      <p><strong>Website: </strong>{user.website}</p>
    </div>
  )
}

export default UserDetails