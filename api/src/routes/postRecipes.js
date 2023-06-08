const { Router } = require("express")
const postRecipes = Router()
const userRecipes = require("../controllers/userRecipes")

postRecipes.post("/recipes", userRecipes)

module.exports = postRecipes