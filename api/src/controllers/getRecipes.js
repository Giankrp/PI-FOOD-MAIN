const getAllInfo = require("../handlers/getAllInfo")

const getRecipes = async (req, res) => {
    const  {name}  = req.query
    try {
        let allRecipes = await getAllInfo();
        if (name) {
            let recipeName = await allRecipes.filter((prop) =>
                prop.name.toLowerCase().includes(name.toLowerCase())
            )
            recipeName.length
                ? res.status(200).json(recipeName)
                : res.status(404).json({ message: "no se encontro la receta" })
        } else {
            return res.status(200).json(allRecipes)
        }
    } catch (error) {
        res.status(401).json({ message: error.message })
    }
}

module.exports = getRecipes