const { Recipe, Diet } = require("../db")

const getDbInfo = async () => {

    const recipesDb = await Recipe.findAll({
        include: {
            model: Diet,
            atributes: ["name"],
            through: {
                atributes: []
            }
        }
    })

    const convertedRecipes = recipesDb.map(recipe => {
        const diets = recipe.Diet.map(typeDiet => typeDiet.name)

        return {
            ...recipe.toJSON(),
            diets
        }
    })
    return convertedRecipes

}

module.exports = getDbInfo