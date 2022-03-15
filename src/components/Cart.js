import React, { createContext,useEffect,useReducer} from 'react'
import './cart.css'
import CartWithContext from './CartWithContext';
import Products from './Products';
import {reducer} from './reducer'
const initialState={
  items: Products,
  totalAmount : 0,
  totalItems: 0
};
export const CartContext = createContext();
const Cart = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
	const removeItem = (id)=>{
        return dispatch({
			type: "REMOVE_ITEM",
			payload :id,
		})
    };

	const clearAll = ()=>{
		return dispatch({
			type : "CLEAR_ALL"
		})
	};
	const increment = (id)=>{
		return dispatch({
			type : "INCREMENT_ITEM",
			payload : id,
		})
	}
	const decrement = (id)=>{
		return dispatch({
			type :  "DECREMENT_ITEM",
			payload: id,
		})
	}
	useEffect(() => {
		 dispatch({
			type : "TOTAL_QUANTITY"
		})
	}, [state.items])
	
  return (
    <>
	<CartContext.Provider value={{...state, removeItem,clearAll,increment,decrement}}>
    	<CartWithContext/>
	</CartContext.Provider>
    </>
  )
}

export default Cart