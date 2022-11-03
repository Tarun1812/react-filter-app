import React, { Fragment, useEffect, useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Product from "./component/Product";
// import JSON from './component/db.json'


const App = () => {
  
const [data,setData] = useState()
const [filteredData,setFilteredData] = useState(data)



const filterData = (keyword)=> {
  console.log("keyword", keyword)
  let output = data.filter((data) => {
    return (data.title.toLowerCase().indexOf(keyword.toLowerCase())>-1)
  })

  console.log("in filter", output)
  setFilteredData(output);
}

useEffect (() => {
  fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => setData(data))
},[])
// console.log(userInput)
    return(
      <>
        <Header userInput={(data)=> filterData(data)}/>
        {/* using props json data is transferred  */}
        <Product proData={filteredData?filteredData:data} /> &nbsp;&nbsp;&nbsp;
        <Footer year={2022}/>    
      </>
    )
}
export default App;