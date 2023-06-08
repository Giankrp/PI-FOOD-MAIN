const getDiets = require("../handlers/getDiets")

const getDietsController = async (req, res) => {
    try {
        const everythingDiets = await getDiets()
        return res.status(200).json(everythingDiets)
    } catch (error) {
        return res.status(403).json({ message: error.message })
    }
}

module.exports = getDietsController