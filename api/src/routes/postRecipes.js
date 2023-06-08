const {Router} = require("express")

const postRecipes = Router()

postRecipes.post("/recipes", userRecipes)

module.exports = postRecipes