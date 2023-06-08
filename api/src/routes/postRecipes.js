const {Router} = require("express")
const postRecipes = Router()
const userRecipes = require("../handlers/userRecipes")

postRecipes.post("/recipes", userRecipes)

module.exports = postRecipes