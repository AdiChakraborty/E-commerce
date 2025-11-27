import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null)

export const DataProvider = ({children}) => {
    const [data,setData]=useState()

    //Fetching all products from apis

    const fetchAllProducts = async() => {
        try {
            const res =  await axios.get(' https://api.escuelajs.co/api/v1/products') 
            console.log('data from context',res);
            if(res){
        const productsData = res.data
            setData(productsData)
            }
    
        } catch (error) {
            console.log(error);
            
        }
    }

    const getUniqueCatagory = (data,property) =>{
      let newVal = data?.map((curElem)=>{
        return curElem[property]
      })
       newVal=[...new Set(newVal)];
       return newVal;
    }

    const categoryOnlyData = getUniqueCatagory(data,"category");
    // console.log(categoryOnlyData );

    const onlyCategory = ['ALL',...new Set(categoryOnlyData.map(property => property.slug))]

    return <DataContext.Provider value = {{data,setData,fetchAllProducts,onlyCategory}}>
        {children}
    </DataContext.Provider>
}

export const getData = () => useContext(DataContext)