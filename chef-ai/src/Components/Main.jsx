import {useState} from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientList"

export default function Main() {
    const [ingredients, setIngredients] = useState([])

    const ingredientsListItems = ingredients.map((ing) => <li key={ing}>{ing}</li>)


    const [recipeShown, setRecipeShown] = useState(false)

    function submitIngredients(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngrList => [...prevIngrList, newIngredient])

    }

    function showRecipe() {
        setRecipeShown(prevState => !prevState)
        console.log(recipeShown)

    }

    // function handleSubmit(event) {
    //     event.preventDefault()
    //     const formData = new FormData(event.currentTarget)
    //     const newIngredient = formData.get("ingredient")
        
    //     setIngredients(prevIngrList => [...prevIngrList, newIngredient])
    // }

    /**
     * Challenge: clean up our code!
     * Let's make a couple new components to make things a
     * little cleaner. (Notice: I'm not suggesting what we
     * have now is bad or wrong. I'm mostly finding an excuse
     * to get in some hands-on practice 🙂)
     * 
     * 1. Move the entire recipe <section> into its own
     *    ClaudeRecipe component
     * 2. Move the list of ingredients <section> into its
     *    own IngredientsList component.
     * 
     * While you're considering how to structure things, consider
     * where state is, think about if it makes sense or not to
     * move it somewhere else, how you'll communicate between
     * the parent/child components, etc.
     * 
     * The app should function as it currently does when you're
     * done, so there will likely be some extra work to be done
     * beyond what I've listed above.
     */

    return (
        <main>
            <form className="add-ingredient-form" action={submitIngredients}>
                <input type="text" name="ingredient" placeholder="e.g. oregano"
                    aria-label="Add ingredient"/>
                <button>Add ingredient</button>
            </form>


            <IngredientsList array={ingredientsListItems} toggle={showRecipe}/>            
            {recipeShown && <ClaudeRecipe display={recipeShown}/>}
        </main>
    )
    
}