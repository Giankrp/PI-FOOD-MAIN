require("dotenv").config()
const axios = require("axios")
const { API_URL, API_KEY } = process.env

const getApiInfo = async () => {
    const { data } = await axios.get(`${API_URL}?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)

    const apiInfo = await data.results.map(recipes => {
        return {
            id: recipes.id,
            name: recipes.title,
            diets: recipes.diets,
            image: recipes.image,
            summary: recipes.summary,
            healthScore: recipes.healthScore,
            process: recipes.analyzedInstructions,
            vegetarian: recipes.vegetarian,
            vegan: recipes.vegan,
            glutenFree: recipes.glutenFree
        }
    })
    return apiInfo
}

module.exports = getApiInfo