import styled from "styled-components";
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
    url("https://wallpapercave.com/wp/aNjqEmf.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const contain = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 50%;
  height: 200px
  border: none;
  padding: 15px 32px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 1px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

export function Login ({setcustomer}) {



  const [email, setEmail] = useState(null);
  const [password,setPassword] = useState(null);


  const handleInputChange = (e) => {
    const {id , value} = e.target;
  
    if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }
    


}


const navigate = useNavigate();


  async function postData(url='',data){

    const x = axios({
      method:'post',
      url: 'http://localhost:3001/Login',
      data:{
      
        email:email,
        password:password
      }
    }).then(response=>{
      console.log(response.data)
      const details=response.data
      setcustomer(details);
      if(response.data.email!=null){
        navigate('/Account')
        }
        else{
          console.log("invalid credentials")
        }
    

    }).catch(err=>{
      console.log("err")
    })
  if(x){
   // navigate('/Account')
    
  }
  }
  

  const handleSubmit = () =>{
   
    
     postData('http://localhost:3001/Login','abdullah')
     
    
  }
  
  return (
    <Container>



    <div className="form">
          <div className="form-body">
       
            
          
            
              <div className="email">
                  <label className="form__label" htmlfor="email">Email </label>
                  <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" htmlfor="password">Password </label>
                  <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
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

  );
};

export default Login;