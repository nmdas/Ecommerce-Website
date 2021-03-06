import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';

function SigninScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;
    const dispatch = useDispatch();
 
    useEffect(() => {
      if(userInfo) {
        props.history.push("/");
      }
        return() => {
            //
        };
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    };
    return (
        <div className="form">
          <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li><h2>Sign-In</h2></li>
                <li>{loading && <div>Loading...</div>}
                  {error && <div>{error}</div>}</li>
                <li>
                    <label htmlFor="email">Email </label>
                    <input type="email" name="email" id="email" placeholder="Enter a username"
                    onChange={(e) => setEmail(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="password">Password </label>
                    <input type="password" name="password" id="password" placeholder="Enter a password"
                    onChange={(e) => setPassword(e.target.value)}></input>
                </li>
                <li>
                    <button type="submit" className="button primary">Sign in</button>
                </li>
                <li>New to NMD store?</li>
                <li>
                    <Link to="/register" className="button secondary">Create your Account</Link>
                </li>
            </ul>
          </form>
        </div>
    );
}

export default SigninScreen;