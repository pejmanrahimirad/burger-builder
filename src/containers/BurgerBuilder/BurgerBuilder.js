import React, { useState } from 'react'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const BurgerBuilder = () => {
    const INGREDIENT_PRICE = {
        salad: 0.5,
        cheese: 0.4,
        meat: 1.3,
        bacon: 0.7
    }
    const [ingredients, setIngredients] = useState({ salad: 0, bacon: 0, cheese: 0, meat: 0 })
    const [totalPrice, setPrice] = useState(0)
    const [purchasable, setPurchasable] = useState(0)
    const [purchasing,setPurchasing]=useState(false)


    const updatePurchasable = (ingredients) => {
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey]
        }).reduce((s, e) => s + e)
        setPurchasable(sum > 0)
    }

    const addIngredientHandler = (type) => {
        const oldCount = ingredients[type];
        const updatedCounted = oldCount + 1;
        const updatedIngredients = {
            ...ingredients
        }
        updatedIngredients[type] = updatedCounted;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = totalPrice;
        const newPrice = oldPrice + priceAddition;
        setPrice(newPrice);
        setIngredients(updatedIngredients)
        updatePurchasable(updatedIngredients)
    }

    const removeIngredientHandler = (type) => {

        const oldCount = ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCounted = oldCount - 1;
        const updatedIngredients = {
            ...ingredients
        }
        updatedIngredients[type] = updatedCounted;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = totalPrice;
        const newPrice = oldPrice - priceAddition;
        setPrice(newPrice);
        setIngredients(updatedIngredients)
        updatePurchasable(updatedIngredients)
    }

    const purchaseHandler=()=>{
            setPurchasing(true);
    }
    const purchaseCancelHandler=()=>{
        setPurchasing(false)
    } 

    const purchaseContinueHandler=()=>{
        alert('YOU CONTINUE!')
    }
    

    const disabledInfo = {
        ...ingredients
    }
    for (const key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
        <React.Fragment>
            <Modal show={purchasing} modalClosed={purchaseCancelHandler} >
                <OrderSummary 
                purchaseContinued={purchaseContinueHandler}
                purchaseCanceled={purchaseCancelHandler}
                price={totalPrice}  ingredients={ingredients}/>
            </Modal>
            <Burger ingredients={ingredients} />
            <BuildControls
                ingredientAdded={addIngredientHandler}
                ingredientRemoved={removeIngredientHandler}
                totalPrice={totalPrice}
                disabled={disabledInfo}
                purchasable={purchasable}
                ordered={purchaseHandler}

            />
        </React.Fragment>
    );
}

export default BurgerBuilder;