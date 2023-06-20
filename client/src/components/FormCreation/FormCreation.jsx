import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDiet, postRecipe} from "../../redux/actions"
import "./FormCreation.css"
import  ImageCreation from "../images/ImageCreation.jpg"

const formValidate =(input)=>{
    const regrex = new RegExp("^(?:100|[1-9][0-9]?|0)$")
    let errors = {}

    if(!input.name) errors.name = "Please enter the name of the recipe"
    if(!input.summary) errors.summary = "Please enter the summary of the recipe"
    if(input.healhtScore < 0 || input.healthScore > 100 || regrex.test(input.healhtScore))
     errors.healthScore = 
    "Please enter a health score between 0-100"
    if(!input.diet) errors.diet = "Please enter a diet of the recipe"

    return errors


}

const FormCreation = ()=>{
    const dispatch = useDispatch()
    let listDiets = useSelector((state) => state.diet)
    const [errors, setErrors] = useState({})
    const [step, setStep] = useState(1)
    const [listSteps, setListSteps] = useState([])
    const [stepDescription, setStepDescription] = useState("")
    const [input, setInput] = useState({
        name : "",
        summary : "",
        healthScore : "",
        process : "",
        diet : [],
        image : "",
    })

    useEffect(()=>{
        dispatch(getDiet())
    }, [dispatch])

    useEffect(()=>{
        const stepByStep = listSteps.join("|")
        setInput({
            ...input,
            process : stepByStep
        })
    }, [listSteps])

    const handleChange = (event)=>{
        setInput({
            ...input,
            [event.target.name] : event.target.value
        })
        setErrors(formValidate({
            ...input,
            [event.target.name] : event.target.value
        }))
    }

    const handleSelect = (event)=>{
        setInput({
            ...input,
            diet : [...input.diet, event.target.value]
        })
    }

    const handleDelete = (diet)=>{
        setInput({
            ...input,
            diet : input.diet.filter((typeD => typeD !== diet))
        })
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        const imageCreation = ImageCreation
        const recipeData ={
            ...input,
            image : input.image || imageCreation
        }
        dispatch(postRecipe(recipeData))

        if(input.name && input.summary && input.healthScore && input.process && input.diet){
            alert("Recipe created successfully")
            setInput({
                name : "",
                summary : "",
                healthScore : "",
                process : "",
                diet : [],
                image : "",
            })
        }else{
            alert("Please fill the fields")
        }

    }
    const handleChangeStep = (event)=>{
        setStepDescription(event.target.value)
    }

    const handleStep=(event)=> {
        event.preventDefault()
        if(stepDescription !== ""){
            setListSteps([...listSteps, stepDescription])
            setStep(step + 1)
            setStepDescription("")
        }else{
            alert("Step description not specified")
        }   
    }


    const handleImageUpload=(event)=>{
        const file = event.target.files[0]
        setInput({
            ...input,
            image : URL.createObjectURL(file)
        })
    }

    return (
    
            <div className="recipe-form2">
                <NavLink to={"/home"}>
                    <button className="button-form-back">Back</button>
                </NavLink>
                <h1 className="create-recipe">Create Recipe</h1>
                <form onSubmit={(event)=> handleSubmit(event)}>
                    <div className="input">
                        <label className="input-label">Name</label>
                        <input type="text" name="name" value={input.name} onChange={(event)=> handleChange(event)}
                        className={`input-field ${errors.name ? "input-error" : ""}`}/>
                        {errors.name && <p className="input-error">{errors.name}</p>}
                    </div>

                    <div className="input">
                        <label className="input-label">Summary</label>
                        <input type="text" name="summary" value={input.summary} onChange={(event)=> handleChange(event)}
                        className={`ìnput-field ${errors.summary ? "input-error" : ""}`} />
                        {errors.summary && <p className="input-error">{errors.summary}</p>}
                    </div>

                    <div className="input">
                        <label className="input-label">HealthScore:</label>
                        <input type="number" name="healthScore" value={input.healthScore} onChange={(event)=> handleChange(event)} 
                        className={`input-field ${errors.healthScore ? "input-error" : ""}`}/>
                        {errors.healthScore && <p className="input-error">{errors.healthScore}</p>}
                    </div>

                    <div className="input">
                        <label className="input-label">Step by step:</label>
                        <input type="text" name="process" value={stepDescription} onChange={handleChangeStep} className="input-fiel"/>
                        <button className="steps button" onClick={handleStep}>Add</button>
                    </div>

                    <div className="input-img">
                        <label className="input-label">Image:</label>
                        <input type="file" accept="image/*" onChange={handleImageUpload} className="img-upload"/>
                    </div>

                    <div className="input-img">
                        <label className="input-label">Image Url:</label>
                        <input type="text" name="image" value={input.image} onChange={(event)=> handleChange(event)} className="img-upload" />
                        {input.image && (<img src={input.image} alt="recipe" className="preview-img"></img>)}
                    </div>

                    <div className="input-select">
                        <label className="input-label">Select diet</label>
                        <select className="select-diet" onChange={(event)=> handleSelect(event)}>
                            <option value="">Select diet</option>
                            {listDiets && listDiets.map((diet)=> (
                                <option key={diet.name} value={diet.name}>
                                    {diet.name}
                                </option>
                            ))}
                        </select>
                        <div className="diet-select">
                            {input.diet.map((diet)=> (
                                <div key={diet} className="selected-diet">
                                    <button className="delete-diet-button" onClick={()=>handleDelete(diet)}>X</button>
                                    <span>{diet}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {errors.hasOwnProperty("name") || errors.hasOwnProperty("summary") || errors.hasOwnProperty("healthScore") ?
                    (<p className="error-message">Please complete all the inputs for create your recipe</p>)
                : (
                     <button type="submit" className="create-button">
                        Create Recipe
                     </button>
                )}
                </form>
                
            </div>
     
    )
}

export default FormCreation