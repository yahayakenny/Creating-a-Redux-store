import React, {useState} from 'react';
import myAction from './Action'
import Calculations from './Calculations';


let ReceiveInput = () => {
    const [bodyWeight, setbodyWeight] = useState('')
    const [dehydration, setDehydration] = useState('')


    const handleWeight = (e) => {
       setbodyWeight(parseInt(e.target.value))
    }

    const handleDehydration = (e) => {
        setDehydration(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        myAction(bodyWeight, dehydration)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Body Weight:         
                    <input type= 'text' name = 'name' onChange = {handleWeight} value = {bodyWeight}/>
                </label>
                <br></br>
                <select onChange = {handleDehydration} value = {dehydration}>
                    <option value = 'mild'> Mild Dehydration</option>
                    <option value = 'moderate'>Moderate Dehydration</option>
                    <option value = 'severe'>Severe Dehydration</option>
                </select>
                <input type = 'submit' value = 'Submit'/>
            </form> 
            <Calculations/> 
        </div>
    )
}


export default ReceiveInput;