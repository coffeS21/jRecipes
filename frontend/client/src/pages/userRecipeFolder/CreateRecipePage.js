import React from "react"
import Header from "../../components/globalComponents/Header"
import Nav from "../../components/globalComponents/Nav"

import RecipeForm from "../../components/recipeComponents/RecipeForm"



export default function CreateRecipePage(props){
    const {submit} = props
    return(
        <div className="pageContainer">
       
        <div className="pageLable">

        <div id="headerContainer">
          <Header header="create page"/>
        </div>

        <div id="navContainer">
            <Nav/>
        </div>

        </div>
         
         <div id="createContainer">
         <RecipeForm 
            buttonLable="create recipe" 
            submit={submit} />
        </div>



        </div>
      )
}