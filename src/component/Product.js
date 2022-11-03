import React, { Component } from "react";
import '../component/product.css'

const Product = (props) => {
    console.log(">>product", props)

    const displayData = ({proData}) => {
        if(proData){
            return proData.map((item)=>{
                return(
                    <div key={item.id} className="card">
                            <img src={item.image} alt={item.name} width="150" height="150"/><br/>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <p>Rs.{item.cost}</p>
                                <p>{item.uses}</p>
                            </div>
                    </div>
                )
            })
        }
        
    }
        return (
             <div className="main">
                {displayData(props)}
             </div>
        );
    }


export default Product;