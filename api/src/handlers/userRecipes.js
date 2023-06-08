const { Diet, Recipe } = require("../db")

const userRecipes = async (req, res) => {
    let { name, summary, image, healthScore, process, createdInDb, typeDiets } = req.body

    if (!name || !summary) {
        return res.status(400).json({ message: "Please enter a name and summary" })
    } else {
        try {
            let createRecipe = await Recipe.create({
                name,
                summary,
                image,
                healthScore,
                process,
                createdInDb,

            })
            let dietDb = await Diet.findAll({
                where: { name: typeDiets }
            })
            createRecipe.addDiet(dietDb)
           return res.status(200).json({message: "Recipe created successfully"})
        } catch (error) {
            return res.status(400).json({message: error.message})
        }

    }
}

module.exports = userRecipes