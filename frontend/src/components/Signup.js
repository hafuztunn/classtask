import React from 'react'
import styled from "styled-components";
import stylesignup from './stylesignup.css'
import  {useState,setState} from 'react';
import Axios, { HttpStatusCode } from "axios";
import axios from 'axios';

const Container = styled.div`
width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;



const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;



const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
export function Signup  ()  {

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password,setPassword] = useState(null);
  const [confirmPassword,setConfirmPassword] = useState(null);
  

  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "firstName"){
        setFirstName(value);
    }
    if(id === "lastName"){
        setLastName(value);
    }
    if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }
    if(id === "confirmPassword"){
        setConfirmPassword(value);
    }


}
async function postData(url='',data){

  axios({
    method:'post',
    url: 'http://localhost:3001/Signup',
    data:{
      firstName:firstName,
      lastName:lastName,
      email:email,
      password:password,
      confirmPassword:confirmPassword
    }
  })
}
const handleSubmit = () =>{

      postData('http://localhost:3001/Signup','abdullah')
      console.log('ji');
    
      
      
      /*      
  const newPostKey = push(child(ref(database), 'posts')).key;
  const updates = {};
  updates['/' + newPostKey] = obj
  return update(ref(database), updates);
    */}
  return (

<Container>



    <div className="form">
          <div className="form-body">
       
              <div className="username">
                  <label className="form__label" htmlfor="firstName">First Name </label>
                  <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
              </div>
          
              <div className="lastname">
                  <label className="form__label" htmlfor="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
              </div>
              <div className="email">
                  <label className="form__label" htmlfor="email">Email </label>
                  <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" htmlfor="password">Password </label>
                  <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" htmlfor="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
              </div>
            
          </div>
          <div class="footer">
            <Button>
            <div class="footer">
                <button onClick={handleSubmit} type="submit" class="btn" style={{color:'white'}}>Register</button>
            </div>
            </Button>
              
          </div>
          
      </div>    
     
      </Container>
  
  )
  }
