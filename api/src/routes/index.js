const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipes = require("./Recipes")
const routerDiet = require('./Diets.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", recipes)
router.use("/", routerDiet)

module.exports = router;
