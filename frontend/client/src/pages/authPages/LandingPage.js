import React, {useState, useContext} from "react"
import AuthForm from "../../components/authComponents/AuthForm"

import Header from "../../components/globalComponents/Header"
import {UserContext} from "../../context/UserProvider"
import "../../styles/cssFiles/pageStyles/authStyles/landingPage.css"
const credentials = {
    username: "",
    password: ""
}

export default function LandingPage(props){
    const [authInputs, setAuthInputs] = useState(credentials)
    const [formToggle, setFormToggle] = useState(false)
    const {signup, login, errMsg, restAuthErr} = useContext(UserContext)

    function handleChange (e){
        const {name, value} = e.target
        setAuthInputs(prevState => ({
            ...prevState,
            [name]:value
        }))
    }
    function handleSignup(e){
        e.preventDefault()
        signup(authInputs)
    }

    function handleLogin(e){
        e.preventDefault()
        login(authInputs)
    }

    function authFormToggle(){
        setFormToggle(prev => !prev)
        restAuthErr()
    }

    return(
        <div id="landingPageContainer">

        <div id="headerContainer">
        <Header header="just recipes"/>
        </div>

        <div id="introContainer">
        <h1>just recipes is here to help you cook delicious meals with less stress and more joy.
             We offer real homemade recipes for home cooks. Create and account and start saving your
             favorite dishes today!</h1>
        </div>

        <div id="authFormContainer">
            {!formToggle ?
            <>
            <AuthForm
            handleChange={handleChange}
            handleSubmit={handleSignup}
            authInputs={authInputs}
            errMsg={errMsg}
            btnText="sign up"/>
            <div className="toggleContainer">
            <p onClick={authFormToggle}>login</p>
            <p onClick={authFormToggle}>signup</p>
            </div>
            </>
            :
            <>
            <AuthForm
            handleChange={handleChange}
            handleSubmit={handleLogin}
            authInputs={authInputs}
            errMsg={errMsg}
            btnText="login"/> 
            <div className="toggleContainer">
            <p onClick={authFormToggle}>login</p>
            <p onClick={authFormToggle}>signup</p>
            </div>
            </>
            }
            </div>

        </div>
    )
}