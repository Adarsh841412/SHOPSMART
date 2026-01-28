import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
const Filter = ({update_filter_data}) => {

const {list}=useSelector(state=>state.ProductSlice)
const[option,setOption]=useState("")

let new_map=new Map();
const category=[]


function remove_duplicacy_from_Category(){

list.forEach((data)=>{
  new_map.set(data.category,data.title)
})

for(let mp of new_map){
category.push(mp[0])
}
}
remove_duplicacy_from_Category();



//* fltering the value according to category 

function handleSelection(e){
 
  if (e.target.value=="reset"){
 
 const updatedData=[];

 for(let i=0; i<10; i++){
  updatedData.push(list[i])
 }

 update_filter_data(updatedData)
 setOption(e.target.value)
  }

else{
let updatedData=list.filter(ele=>ele.category===e.target.value);
console.log(updatedData)
update_filter_data(updatedData)
setOption(e.target.value)
}
}





  return (
  
<form className='Filter' >

<select onChange={handleSelection} value={option}>
      <option value="reset" >
       Filter : Category
    </option>
{
  category.map((cat)=>{
    return(
      <option value={cat}>{cat}</option>
    )
  })
}
</select>
</form>


  )
}

export default Filter