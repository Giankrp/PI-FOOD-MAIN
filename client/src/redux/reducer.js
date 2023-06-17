import { GET_RECIPES, FILTER_BY_DIET, SORT_BY_NAME, SORT_BY_PUNTUATION, GET_BY_NAME, GET_BY_ID, GET_DIET, DELETE_RECIPE, FILTER, SERVER, POST_RECIPE } from "./actionsTypes"

export const initialState = {
    recipes: [],
    allRecipes: [],
    data: [],
    diet: []
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: payload,
                allRecipes: payload
            }
        case SERVER:
            return {
                ...state,
                recipes: payload,
                allRecipes: payload
            }
        case FILTER_BY_DIET:
            const allDiet = state.allRecipes
            const dietFilter = allDiet.filter(recipes => {
                return recipes.diets && recipes.diets.includes(payload)
            })
            return {
                ...state,
                recipes: payload === "All" ? allDiet : dietFilter
            }
        case FILTER:
            const recipes = state.allRecipes
            const filter = payload === "created" ? recipes.filter(element => element.createdInDb) : recipes.filter(
                element => !element.createdInDb)
            return {
                ...state,
                recipes: payload === "All" ? state.allRecipes : filter
            }
        case SORT_BY_NAME:
            let order = payload === "asc" ?
                state.recipes.sort((a, b) => {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1

                    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1

                    return 0
                })
                : state.recipes.sort((a, b) => {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return -1

                    if (a.name.toLowerCase() < b.name.toLowerCase()) return 1

                    return 0
                })
            return {
                ...state,
                recipes: order
            }
        case SORT_BY_PUNTUATION:
            let puntuation = payload === "menormayor" ?
                state.recipes.sort((a, b) => {
                    if (a.healthScore > b.healthScore) return 1

                    if (a.healthScore < b.healthScore) return -1

                    return 0
                })
                : state.allRecipes.sort((a, b) => {
                    if (a.healthScore > b.healthScore) return -1

                    if (a.healthScore < b.healthScore) return 1

                    return 0
                })
            return {
                ...state,
                recipes: puntuation
            }
        case GET_BY_NAME:
            return {
                ...state,
                data: payload
            }
        case GET_BY_ID:
            return {
                ...state,
                data: payload
            }
        case POST_RECIPE:
            return {
                ...state
            }
        case GET_DIET:
            return {
                ...state,
                diet: payload
            }
        case DELETE_RECIPE:
            return {
                ...state
            }
        default:
            return state
    }
}

export default rootReducer