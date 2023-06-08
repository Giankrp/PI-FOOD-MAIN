const { Recipe } = require("../db")

const recipeDelete = async (req, res) => {
    const { id } = req.params

    const validIdRegex = /^[A-Za-z0-9-]+$/

    if (validIdRegex.test(id)) {
        try {
            let recipeDeleteRequest = await Recipe.findByPk(id)

            if (recipeDeleteRequest) {
                await recipeDeleteRequest.destroy()
                return res.status(200).json({ "message": "recipe deleted successfully" })
            } else {
                return res.status(404).json({ "message": "recipe not found" })
            }
        } catch (error) {
            return res.status(500).json({ "message": error.message })
        }
    } else {
        res.status(401).json({ "message": "this recipe cannot be deleted" })
    }
}

module.exports = recipeDelete