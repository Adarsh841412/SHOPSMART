import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsThunk } from '../../features/products/productThunk';
import { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner'
import Search from './Search';
import Filter from './Filter';
import Cart from './Cart';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import ProductCard from './productCard';
import Pagination from './Pagination';
import { Store } from '../../app/store';
import { Link } from 'react-router';
import Header from '../header/header';

export const ProductPage = () => {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector(state => state.ProductSlice);
  const{totalQuantity}=useSelector(state=>state.CartSlice)
  const[filteredData,setFilteredData]=useState(list)
  const[searchDatas,setSearchData]=useState(list);

  const cart=useSelector(state=>state.CartSlice)
   
  


  useEffect(() => {
    dispatch(fetchProductsThunk()); 
  }, [dispatch]);

 useEffect(()=>{
  setFilteredData(list)
 },[list])



function update_filter_data(data){
setFilteredData(data);

}



  return (
<>
 <Header className="ProductPage-child">
 <Search search={update_filter_data}/>
  <Filter update_filter_data={update_filter_data}/>
  <Link to="/cart" style={{textDecoration:"none"}}><Cart count={cart.data.length} /></Link>
 </Header>

    <div className='ProductPage'>
       
{status === "loading" && (
  <div
    style={{
      display: "flex",
      flexDirection: "column", 
      alignItems: "flex-start", 
      gap: "5px",               
      padding: "10px 0",      
    }}
  >
    <h3>Loading products....</h3>
    <Oval
      height={40}   // smaller loader
      width={40}
      color="#4fa94d"
      ariaLabel="audio-loading"
      visible={true}
     
    />
  </div>
)}

{status==="succeeded" &&

<>
<ProductCard data={filteredData}/>
</>
}
<Pagination/>
    </div>
    </>
  )
};
