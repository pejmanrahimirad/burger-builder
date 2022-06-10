import React from 'react'
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (<li key={igKey}
                style={{ textTransform: 'capitalize' }}
            >
                <span>{igKey}</span>:
                {props.ingredients[igKey]}
            </li>)
        });

    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>price :{props.price} $</p>
            <p>Countinute to Checkout</p>
            <Button btnType={'Danger'} clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType={'Success'} clicked={props.purchaseContinued} >CONTINUE</Button>
        </React.Fragment>
    )
}

export default OrderSummary;