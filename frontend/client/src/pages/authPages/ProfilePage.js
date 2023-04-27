import React from "react"
// import Header from "../../components/globalComponents/Header"
// import Nav from "../../components/globalComponents/Nav"
import "../../styles/cssFiles/pageStyles/authStyles/authPageStyles.css"

export default function ProfilePage(props){
    const {deleteAccount, username, id, logout} = props
      function deleteProfile(){
        deleteAccount(id)
      }
    return(
      <div id="profilePageContainer">
{/* 
         <div className="pageLable">
          <div id="headerContainer">
          <Header header="profile page"/>
          </div>
          <div id="navContainer">
            <Nav/>
          </div>
          </div> 
          
          
          
         <div id="userInfoContainer">
            <div id="greetingContainer">
            <h3>welcome chef</h3>
            <h2>{username}</h2>
            </div>
        </div>
            
        <div id="accountContainer">
          <p onClick={logout}>logout</p>
          <p onClick={deleteProfile}>delete account</p>
        </div> */}
      </div>
    )
}