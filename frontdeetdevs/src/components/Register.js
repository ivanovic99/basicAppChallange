import react, {useState, useEffect} from "react"
import '../App.css';
import axios from "axios"
import {Button} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"



  


export default function Register ({handleRegisterLogin, hanhandlePasswordInput, handleUserInput}) {
    // class Register extends form React.components
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //       value: 'Please write an essay about your favorite DOM element.'
    //     }
    
    //     this.handleRegisterLogin = this.handleRegisterLogin.bind(this)
    //     this.handlePasswordInput = this.handlePasswordInput.bind(this)
    //     this.handlleUserInput = this.handlePasswordInput.bind(this)
    
    // }

    const [user, setUser] = useState([{
        email: "",
        password: ""
      }])
      
    const navigate = useNavigate()

      
    useEffect(function () {
    let email = localStorage.email || ""
    let password = localStorage.password || ""
    setUser({email, password}) 
    
    }, [])

    function handleUserInput(email) {
    localStorage.email = email
    setUser({email})
    }
    function handlePasswordInput(password) {
    localStorage.password = password
    setUser({password})
    
    }
    function handleRegisterLogin(e) {
        
    
        // console.log(e)
        // console.log(users)
    
        // fetch('http://localhost:5001/register', {
        //   method: "POST",
        //   body: JSON.stringify({
        //     email: "email",
        //     password: "password"
        //   }), 
        //   mode:'cors',
        // }, ).then(res => console.log(res))
    
    
        // http.post("/register", {
        //   email: "emailll",
        //   password: "passworddd"
        // }).then(res =>
        //   console.log(res)
        // ).catch(e => console.log(e))
    
      }
    
    return (
        <form onSubmit={(e) => handleRegisterLogin(e)}>

            <input onChange={(e) => handleUserInput(e.target.value)} type="text" placeholder= "email" name="email" />
    
            <input onChange={(e) => handlePasswordInput(e.target.value)} type="password"  placeholder="password" name="password" />
    
            <Button type="submit" onClick={() => {
                navigate(`/login`);
                }}>
                    Register
            </Button>
        </form>

)}
