const getRecipesById = require("../handlers/getRecipesById")


const getRecipesByIdController = async (req, res) => {
    const { idRecipes } = req.params
    try {
        const recipeById = await getRecipesById(idRecipes) 
        return res.status(200).json(recipeById)

    } catch (error) {
        return res.status(403).json({message : error.message})
    }

}

module.exports = getRecipesByIdController