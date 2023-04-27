import React from "react"


export default function Recipe(props){
    const {title,
        deleteMe,
        currentUser, 
        user, 
         _id, 
        editRecipe} = props
        console.log(currentUser)
    return(
        <div>
            {user === currentUser._id ?
                <div id="recipeContainer">
                    <div id="titleContainer">
                    <p>{title}</p>
                    </div>
                    <div id="chai">
                    <p onClick={()=> editRecipe(_id)}>edit</p> 
                    <p onClick={()=> deleteMe(_id) }>delete</p> 
                    </div>
                </div>
                :
                <div id="recipeContainer">
                    <div><h1>{title}</h1></div>
                </div>
            }    
        </div> 
    )
}