const { Diet } = require("../db")
const getApiInfo = require("./getApiInfo")

const getDiets = async () => {
    const apiInfo = await getApiInfo()
    const diets = apiInfo.reduce((acc, cur) => {
        return [...acc, ...cur.diets]
    }, [])

    const onlyDiets = []

    for (const diet of diets) {
        if (!onlyDiets.some(prop => prop.name === diet)) {
            onlyDiets.push({ name: diet })
        }
    }

    for (const diet of onlyDiets) {
        await Diet.findOrCreate({ where: { name: diet.name } })
    }
    return onlyDiets
}

module.exports = getDiets
