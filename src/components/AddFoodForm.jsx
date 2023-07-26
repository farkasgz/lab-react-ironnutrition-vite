// Your code here
import { Divider, Input, Button } from "antd";
import { useState } from "react"

function AddFoodForm({addFood}) {
    //console.log(addFood)
    const [nameField, setNameField] = useState('')
    const [imageField, setImageField] = useState('')
    const [caloriesField, setCaloriesField] = useState('')
    const [servingsField, setServingsField] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        addFood(nameField, imageField, caloriesField, servingsField)
        setNameField('')
        setImageField('')
        setCaloriesField('')
        setServingsField('')
    }

    return (
            
            <form onSubmit={handleSubmit}>
                <Divider>Add Food Entry</Divider>
                <label>
                    Name: 
                    <Input name="name" type="text" value={nameField} onChange={event => setNameField(event.target.value)}/>
                </label>
                <label>
                    Image:
                    <Input name="image" type="text" value={imageField} onChange={event => setImageField(event.target.value)}/>
                </label>
                <label>
                    Calories:
                    <Input name="calories" type="number" value={caloriesField} onChange={event => setCaloriesField(event.target.value)}/>
                </label>
                <label>
                    Servings:
                    <Input name="servings" type="number" value={servingsField} onChange={event => setServingsField(event.target.value)}/>
                </label>
                <Button type="submit">Submit</Button>
            </form>
    )
}

export default AddFoodForm;