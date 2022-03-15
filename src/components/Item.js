import React, { useState } from 'react'

const Item = ({id,title,description,price,img,quantity,grandTotal,setGrandTotal}) => {
 const [quant,setQuant] = useState(quantity);
 const [localgt,setLocalgt]= useState(price);
  const tempLocalgt=quant*price;


// setGrandTotal();
// setLocalgt(quant*price);
console.log(setGrandTotal);
  return (
    quant=== 0? null: 
    <div key={id} className='wrapper'>
    <h1>{title}</h1>
    <div key={id}>
        <button onClick={()=>{
            setQuant(quant-1);
        }} >Dec</button>
    <h2>{quant}</h2>
    <button onClick={()=>{
        console.log(quant);
       setQuant((quant) => {
           quant = quant + 1;
           setLocalgt(quant*price);
           console.log(grandTotal);
           setGrandTotal(Number(grandTotal)+Number(localgt));
           return quant;
       });

       console.log(quant);
    }} >inc</button>
    </div>
    <img src={img} alt="hero"/>
    <h3>{localgt}</h3>
    <button onClick={()=>{
        setQuant(0);
    }}> Delete Item</button>

    
  </div>
   
  )
}

export default Item