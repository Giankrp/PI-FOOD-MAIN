const getApiInfo = require("./getApiInfo")
const getDbInfo = require("./getDbInfo")

const getAllInfo = async () => {
    const apiInfo = await getApiInfo()
    const dbInfo = await getDbInfo()

    const info = apiInfo.concat(dbInfo)
    return info
}

module.exports = getAllInfo