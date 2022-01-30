import react, {useState, useEffect} from "react"
import '../App.css';
import axios from "axios"
import {Button} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"



  


export default function Register ({handleRegisterLogin, hanhandlePasswordInput, handleUserInput}) {
    const [user, setUser] = useState([{
        email: "",
        password: "",
        isLoggedInEmail: false,
        isLoggedInPassword: false
      }])
      
    const navigate = useNavigate()

    function handleUserInput(email) {
        if (localStorage.email === email) {
            setUser({email, isLoggedInEmail: true})
        }
    }
    function hanhandlePasswordInput(password) {
        if (localStorage.password === password) {
            let finalUser = user
            finalUser.password = password
            finalUser.isLoggedInPassword = true
            setUser(finalUser)
        }
    
    
    }
    function handleRegisterLogin(e) {
    }
    
    return (
        <form onSubmit={(e) => handleRegisterLogin(e)}>

            <input onChange={(e) => handleUserInput(e.target.value)} type="text" placeholder= "email" name="email" />

            <input onChange={(e) => hanhandlePasswordInput(e.target.value)} type="password"  placeholder="password" name="password" />

            <Button type="submit" onClick={() => {
                if (user.isLoggedInEmail && user.isLoggedInPassword) {
                    navigate(`/listOfPosts`);
                } else {
                    navigate("/login")
                }
                }}>
                    Log In
            </Button>
        </form>

)}
