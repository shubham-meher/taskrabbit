import React,{useState} from 'react';
import './Login.css';

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [token, setToken] = useState();
  const loginUser= async (credentials)=>  {
       return await fetch('http:localhost:8080/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
       })
       .then(data=>data.json())
  }

  const handleSubmit = async(e)=>{
        e.preventDefault();
        const token =  await loginUser({
          username,
          password
        });
        setToken(token);
  }

  return (
    <div className="login-wrapper">
      <h1>Please Login</h1>
      <form onSubmit={handleSubmit} >
        <label>
          <p>Username</p>
             <input type="username" onChange={e=>setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Email</p>
             <input type="email" onChange={e=>setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
             <input type="password" onChange={e=>setPassword(e.target.value)}/>
        </label>
       <div className="button">
        <button type="submit">Submit</button>
       </div>
        </form>
    </div>
  )
}



