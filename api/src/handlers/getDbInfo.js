const { Recipe, Diet } = require("../db")

const getDbInfo = async () => {

    const recipesDb = await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    })
    console.log(recipesDb);


    const convertedRecipes = recipesDb.map(recipe => {
        const diets = recipe.Diets.map(typeDiet => typeDiet.name)
        return {
            ...recipe.toJSON(),
            diets
        }
    })

    return convertedRecipes

}

module.exports = getDbInfo