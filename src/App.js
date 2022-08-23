import React, { useState } from 'react'
import axios from "axios";
import Table from "./Components/Table";



const App = () => {

  const [data,setData]= useState([]);

  const getData = async() =>{
  const response =await axios.get("https://dummyjson.com/products/")

  console.log(response.data.products);
  setData(response.data.products)
};


  useEffect(() => {
    getData();

  }, []);

  console.log("dara :",data);
  


  return <div>
    <Table data ={data}/>
  </div>
  
};

export default App
