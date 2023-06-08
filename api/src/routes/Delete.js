const { Router } = require("express")
const routerDelete = Router()
const recipeDelete = require("../controllers/recipeDelete")


routerDelete.delete("/delete/:id", recipeDelete)


module.exports = routerDelete