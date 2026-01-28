import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Search = ({search}) => {
  const{list}=useSelector(state=>state.ProductSlice);



  const[searchItem,setSearchItem]=useState('');
  const [filtereProducts, setFilteredProducts] = useState([list])

useEffect(()=>{
  setFilteredProducts(list)
},[list])


   const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)

   setFilteredProducts((data)=>{
    return data.filter((product)=>{
      return product?.title?.toLowerCase().includes(searchTerm.toLowerCase());
    })
   })

  }

 function searchData(e){
e.preventDefault();
search(filtereProducts);

 }
  return (
  
<form className='search' onSubmit={searchData}>
    <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder='Type to search'
      />
   <button type='search-button'>Search</button> 
</form>


  )
}

export default Search