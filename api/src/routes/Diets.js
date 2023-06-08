const { Router } = require("express")
const routerDiet = Router()
const getDietsController = require("../controllers/getDietsController")

routerDiet.get("/diets", getDietsController)


module.exports = routerDiet