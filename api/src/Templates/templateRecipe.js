const templateRecipe =(temp)=>{
    return {
        id : temp.id,
        name : temp.title,
        image : temp.image,
        summary : temp.summary,
        healthScore : temp.healthScore,
        process : temp.analyzedInstuccions,
        diets : temp.diets,
        vegetarian : temp.vegetarian,
        vegan : temp.vegan,
        glutenFree : temp.glutenFree        
    }
}