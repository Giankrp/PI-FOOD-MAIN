require("dotenv").config()
const { API_KEY, API_URL } = process.env
const axios = require("axios")
const { Recipe, Diet } = require("../db")

const getRecipesById = async (id) => {

    let recipe = null
    if (id.includes("-")) {
        recipe = await Recipe.findOne({
            where: { id },
            include: {
                model: Diet,
                attributes: ["name"],
                through: {
                    attributes: []
                }
            }
        })


        const typeDiets = recipe.Diets.map(diest => diest.name)

        return {
            id: recipe.id,
            name: recipe.name,
            image: recipe.image,
            summary: recipe.summary,
            healthScore: recipe.healthScore,
            process: recipe.process,
            typeDiets: typeDiets,
            createdAt: recipe.createdAt,
            createdInDb: recipe.createdInDb,
            updateAt: recipe.updateAt

        }

    } else {
        let { data } = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)

        recipe = {
            id: data.id,
            name: data.title,
            image: data.image,
            summary: data.summary,
            healthScore: data.healthScore,
            process: data.analyzedInstructions,
            diets: data.diets,
            vegetarian: data.vegetarian,
            vegan: data.vegan,
            glutenFree: data.glutenFree
        }
        return recipe
    }
}

module.exports = getRecipesById