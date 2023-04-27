import React from "react"
 import Recipe from "../../components/recipeComponents/Recipe"
import Header from "../../components/globalComponents/Header"
import Nav from "../../components/globalComponents/Nav"

export default function PublicRecipesPage(props){
    const {all, currentUser} = props
 
    const mappedAllRecipes = all.map(recipe => <Recipe{... recipe} currentUser={currentUser} key={recipe._id}/>)
     return(
        <div className="pageContainer">


        <div className="pageLable">
        <div id="headerContainer">
            <Header header="recipes page"/>
        </div>
        <div id="navContainer">
            <Nav/>
        </div>
        </div>
        <div id="allRecipeContainer">
            <p>{mappedAllRecipes}</p>
        </div> 

        </div>
    )
}