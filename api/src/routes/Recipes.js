const { Router } = require("express")
const getRecipes = require("../controllers/getRecipes")
const getRecipesByIdController = require("../controllers/getRecipesByIdController")
const recipes = Router()



recipes.get("/recipes", getRecipes)

recipes.get("/recipes/:idRecipes",getRecipesByIdController)


module.exports = recipes
