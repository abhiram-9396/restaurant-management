import React from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";


function Signup() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    // const [error, setError] = useState('')

    const navigate = useNavigate();

    function sendPostrequest(e)
    {
        e.preventDefault();
        // console.log('sent post request')

        //posting the data to the backend server
        axios.post('/auth/signup', {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        navigate("/auth/login");
    }
   
  return (
    <div style={{padding: '20px'}}>
        <Card style={{ width: '40rem', padding: '20px' }} bg='secondary'>
        <form onSubmit={sendPostrequest}>
            <h3>Sign up</h3>
            
            <div className="mb-3">
            <label>Email</label>
            <input
                type="text"
                value= {email}
                className="form-control"
                placeholder="Email"
                required
                onChange={(e) => setemail(e.target.value)}
            />
            </div>

            <div className="mb-3">
            <label>Password</label>
            <input
                type="text"
                value={password}
                className="form-control"
                placeholder="Password"
                required
                onChange={(e) => setpassword(e.target.value)}
            />
            </div>

            <div className="mb-3">
            <label>First name</label>
            <input
                type="text"
                value={firstName}
                className="form-control"
                placeholder="First name"
                onChange={(e) => setfirstName(e.target.value)}
            />
            </div>

            <div className="mb-3">
            <label>Last name</label>
            <input
                type="text"
                value={lastName}
                className="form-control"
                placeholder="Last name"
                onChange={(e) => setlastName(e.target.value)}
            />
            </div>

            <div className="d-grid">
                <button type="submit" className="btn btn-primary" >
                    Sign Up
                </button>
            </div>

        </form>
        </Card>
    </div>
  )
}

export default Signup
