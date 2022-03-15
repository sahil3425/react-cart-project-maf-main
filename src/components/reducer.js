export const  reducer = (state,action)=>{
    if(action.type ==="REMOVE_ITEM"){
        return{
            ...state,
            items:state.items.filter((val)=>{
                return val.id !== action.payload;
            })
        }
    }
    if(action.type==="CLEAR_ALL"){
        return{
            ...state,
            items: []
        }
    }
    if(action.type === "INCREMENT_ITEM"){
           let updatedCart= state.items.map((val)=>{
                if(val.id===action.payload){
                    return {...val, quantity: val.quantity+1}
                }
                return val;
            });
            return{...state,items:updatedCart}
    }
    if(action.type ==="DECREMENT_ITEM"){
        let updatedCart= state.items.map((val)=>{
            if(val.id===action.payload){
                return {...val,quantity:val.quantity-1}
            }
            return val;
        }).filter((val)=>{
            return val.quantity!==0;
        })
        return{...state,items:updatedCart}
    }
    if(action.type === "TOTAL_QUANTITY"){
        let {totalItems,totalAmount} = state.items.reduce((accum,val)=>{
            let {quantity,price} = val;
            let updatedTotalAmount = price * quantity;
            accum.totalAmount+=updatedTotalAmount;
            accum.totalItems+= quantity;
            return accum;
        },{
            //initial items
            totalItems : 0,
            totalAmount: 0
        });
        return {...state,totalItems,totalAmount};
    }
  return state;
};