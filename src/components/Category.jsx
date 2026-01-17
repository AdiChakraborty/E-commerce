import React, { useEffect } from 'react'
import { getData } from '../Context/DataContext'
import { useNavigate } from 'react-router-dom'


const Category = () => {
  const{data,fetchAllProducts,onlyCategory} = getData()
  console.log(data)
  const navigate = useNavigate()
  

    // const getUniqueCatagory = (data,property) =>{
    //   let newVal = data?.map((curElem)=>{
    //     return curElem[property]
    //   })
    //    newVal=[...new Set(newVal)];
    //    return newVal;
    // }

    // const categoryOnlyData = getUniqueCatagory(data,"category");
    // // console.log(categoryOnlyData );

    // const onlyCategory = [...new Set(categoryOnlyData.map(property => property.slug))]
    // console.log(onlyCategory);
    
    
    // useEffect(()=>{
    //   fetchAllProducts()
    // },[])

  return (
    <div className=' bg-[#101829]'>
      <div className='max-w-7xl mx-auto flex-wrap flex gap-4 items-center justify-center md:justify-around py-7 px-4'>
        {
          onlyCategory?.map((item,index)=>{
            return <div key={index}>
              <button onClick={()=>navigate(`/category/${item}`)} className=' uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white
              px-3 py-1 rounded-md  cursor-pointer'>{item}</button>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Category
