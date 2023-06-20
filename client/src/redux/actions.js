import { GET_RECIPES, FILTER_BY_DIET, SORT_BY_NAME, SORT_BY_PUNTUATION, GET_BY_NAME, GET_BY_ID, GET_DIET, DELETE_RECIPE, FILTER } from "./actionsTypes"
import axios from "axios"

export const getRecipes = () => {
    return async (dispatch) => {
        const { data } = await axios.get("http://localhost:3001/recipes",{})
        return dispatch({
            type: GET_RECIPES,
            payload: data
        })
    }
}

export const filterByDiet = (payload) => {
    return {
        type: FILTER_BY_DIET,
        payload
    }
}

export const filter = (payload) => {
    return {
        type: FILTER,
        payload
    }
}

export const sortByName = (payload) => {
    return {
        type: SORT_BY_NAME,
        payload
    }
}

export const sortByPuntuation = (payload) => {
    return {
        type: SORT_BY_PUNTUATION,
        payload
    }
}

export const getRecipesByName = (name) => {
    return async (dispatch) => {
        await axios.get(`?name=${name}`)
            .then((response) => {
                return dispatch({ type: GET_BY_NAME, payload: response.data })
            })
            .catch((error) => {
                alert("Recipe not found")
            })
    }
}

export const getRecipesById = (idRecipes) => {
    return async (dispatch) => {
        const { data } = await axios.get(`/${idRecipes}`)
        return dispatch({
            type: GET_BY_ID,
            payload: data
        })
    }
}

export const getDiet = () => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:3001/diets");
    return dispatch({
      type: GET_DIET,
      payload: data,
    });
  };
};


export const postRecipe = (payload) => {
    return async (dispatch) => {
        const data = await axios.post(`/`, payload)
        return data
    }
}

export const deleteRecipe = (idRecipes) => {
    return async (dispatch) => {
        const { data } = await axios.delete(`http://localhost:3001/delete/${idRecipes}`)
        return dispatch({
            type: DELETE_RECIPE,
            payload: data
        })
    }
}

