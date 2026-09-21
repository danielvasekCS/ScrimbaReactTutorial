import {useState} from "react"

export default function Main() {
    const [ingredients, setIngredients] = useState([])

    const ingredientsListItems = ingredients.map((ing) => <li key={ing}>{ing}</li>)

    function submitIngredients(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngrList => [...prevIngrList, newIngredient])

    }

    // function handleSubmit(event) {
    //     event.preventDefault()
    //     const formData = new FormData(event.currentTarget)
    //     const newIngredient = formData.get("ingredient")
        
    //     setIngredients(prevIngrList => [...prevIngrList, newIngredient])
    // }

    return (
        <main>
            <form className="add-ingredient-form" action={submitIngredients}>
                <input type="text" name="ingredient" placeholder="e.g. oregano"
                    aria-label="Add ingredient"/>
                <button>Add ingredient</button>
            </form>


            { ingredientsListItems.length > 0 &&
                <section>
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>

                    { ingredientsListItems.length > 3 &&
                        <div className="get-recipe-container">
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button>Get a recipe</button>
                        </div>
                    }
                </section>
            }   
        </main>
    )
    
}