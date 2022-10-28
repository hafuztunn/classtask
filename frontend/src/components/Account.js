import React from 'react'
import styled from "styled-components";
import stylesignup from './stylesignup.css'
import  {useState,setState} from 'react';
import Axios, { HttpStatusCode } from "axios";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

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
  height: 20%
  border: 70%;
  padding: 5px 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
export function Account  ({customer})  {

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  
 
  async function postData(url='',data){

  
    const x = axios({
      method:'post',
      url: 'http://localhost:3001/Update',
      data:{
      
        email:customer.email,
        firstName:firstName,
        lastName:lastName
      }
    }).catch(err=>{
      console.log("err")
    })
 
  }


  





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
 



}



async function postData2(url='',data){

  
  const x = axios({
    method:'post',
    url: 'http://localhost:3001/Delete',
    data:{
    
      email:customer.email,
      firstName:firstName,
      lastName:lastName
    }
  }).catch(err=>{
    console.log("err")
  })

}

const handleSubmit = () =>{

     postData2('http://localhost:3001/Account/update','abdullah')
  
 }



 const handleSubmit2 = () =>{

  postData('http://localhost:3001/Account/update','abdullah')

}


 
  return (

<Container>



    <div className="form">
          <div className="form-body">
       
              <div className="username">
                  <label className="form__label" htmlfor="firstName">firstname</label>
                  <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder={customer.firstname}/>
              </div>
          
              <div className="lastname">
                  <label className="form__label" htmlfor="lastName">lastname </label>
                  <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder={customer.lastname}/>
              </div>
              <div className="email">
                  <label className="form__label" htmlfor="email">email </label>
                  <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder={customer.email} readOnly/>
              </div>

            
          </div>
          <div class="footer">
            <Button>
            <div class="footer">
                <button onClick={handleSubmit} formaction="/update" type="submit" class="btn" style={{color:'white'}}>Delete</button>
            </div>
            </Button>


            <Button>
            <div class="footer">
                <button onClick={handleSubmit2} formaction="/delete"type="submit" class="btn" style={{color:'white'}}>Edit</button>
            </div>
            </Button>
              
          </div>
          
      </div>    
     
      </Container>
  
  )
  }