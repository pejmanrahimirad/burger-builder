import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]
const BuildControls = (props) => {
    return <div className={classes.BuildControls} >
        {controls.map(ctrl => (

            <BuildControl
                added={() => props.ingredientAdded(ctrl.type)}
                removed={()=>props.ingredientRemoved(ctrl.type)}
                key={ctrl.label}
                label={ctrl.label}
                disabled={props.disabled[ctrl.type]}
            />

        ))}
        <p> total price is : <strong>{props.totalPrice}</strong> $</p> 
        <button 
        disabled={!props.purchasable}
        className={classes.OrderButton}
        onClick={props.ordered}
        > ORDER NOW</button>

    </div>
}

export default BuildControls;