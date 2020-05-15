import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';

function RegisterScreen(props) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
            <li><h2>Create Account</h2></li>
            <li>{loading && <div>Loading...</div>}
              {error && <div>{error}</div>}</li>
            <li>
                <label htmlFor="name">Name</label>
                <input type="name" name="name" id="name" placeholder="Name"
                onChange={(e) => setName(e.target.value)}></input>
            </li>
            <li>
                <label htmlFor="email">Email </label>
                <input type="email" name="email" id="email" placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}></input>
            </li>
            <li>
                <label htmlFor="password">Password </label>
                <input type="password" name="password" id="password" placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}></input>
            </li>
            <li>
                <label htmlFor="rePassword">Confirm Password </label>
                <input type="rePassword" name="rePassword" id="rePassword" placeholder="Confirm Password"
                onChange={(e) => setRePassword(e.target.value)}></input>
            </li>
            <li>
                <button type="submit" className="button primary">Register</button>
            </li>
            <li className="user-signin">Already have an account? <Link to="/signin">Sign-In</Link></li>
        </ul>
      </form>
    </div>
  );
}
export default RegisterScreen;