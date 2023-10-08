import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "../actions/cartAction";
import { ActionButton } from "./actionButton";


const Cart = () => {
    const state = useSelector((state) => state,{ noopCheck: 'never' });
    const dispatch = useDispatch();

    const incrementCounter = useCallback(
        () => dispatch(addItem()),
        [dispatch]
    )
    // console.log(state)
    return (
        <div className="cart">
            <h2>Number of items in Cart: {state.numOfItems}</h2>
            <ActionButton
                disabled={false}
                className="green"
                onClick={incrementCounter}
                buttonText="Add Item to Cart"
            />
            <ActionButton
                disabled={state.numOfItems === 0}
                className="red"
                onClick={() => dispatch(deleteItem())}
                buttonText="Remove Item from Cart"
            />
        </div>
    );
};

export default Cart;