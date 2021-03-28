import React from 'react';
import {useSelector} from 'react-redux';

const Calculations = () => {
    const getInput = useSelector((state) => state)
    console.log(getInput)

    const calcMaintenance = () => {
        return getInput.weight <= 10 ? getInput.weight * 100 
        : getInput.weight > 10 &&  getInput.weight <= 20 ? 1000 + getInput.weight - 10 * 50
        : (1500 + ((getInput.weight - 20) * 20))
    }

    const calcDeficit = () => {
        return getInput.dehydration === 'mild' ? 50 * getInput.weight
        :getInput.dehydration === 'moderate' ? 75 * getInput.weight
        : 100 * getInput.weight
    }

    return (
        <div>
            <>
                <div>body weight is {getInput.weight}</div>
                <div>You have selected {getInput.dehydration} dehydration levels</div>
                <div>Calculated maintenance is {calcMaintenance()}</div>
                <div>Calculated deficit is {calcDeficit()}</div>
                <div>Total fluid is {calcMaintenance() + calcDeficit()}</div>
            </>
        </div>
    )
}


export default Calculations;
