import React from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import { useSelector, useDispatch } from 'react-redux'
import { storeDetails, userLogin, userLogout, storeMenu } from '../ReduxToolkit/userSlice';


function Login() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [error, setError] = useState('')
    const [show, setShow] = useState(true);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userEmail = useSelector((state) => state.user.email);

    function sendPostrequest(e)
    {
        e.preventDefault();
        console.log('sent post request');

        axios.post('/auth/signin', {
            email: email,
            password: password,
          })
          .then(function(response) {
              dispatch(userLogin()) //setting the login status of user to true
              console.log(response);
              dispatch(storeDetails(response.data)) //storing the logged in user in store.
            navigate("/home")
          })
          .catch(function (error) {
            if(error?.response?.data.message)
            {
                setError(error.response.data.message);
            }
            console.log(error);
          });


        
    }
    function cancelCourse(){
        setemail('')
        setpassword('')
        setShow(false)
      }

  return (
    <div style={{padding: '20px'}}>
        {error && (
            <Alert show={show} key= "danger" variant="danger">
                {error}
                <div className="d-flex justify-content-end">
                <button onClick={cancelCourse} className="btn btn-danger">
                    Close
                </button>
                </div>
            </Alert>
        )}
        <Card style={{ width: '40rem', padding: '20px' }} bg='secondary'>
        <form onSubmit={sendPostrequest}>
            <h3>Login</h3>
            
            <div className="mb-3">
            <label>Email</label>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}
            />
            </div>

            <div className="mb-3">
            <label>Password</label>
            <input
                type="text"
                className="form-control"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setpassword(e.target.value)}
            />
            </div>

            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </div>

        </form>
        </Card>
    </div>
  )
}

export default Login