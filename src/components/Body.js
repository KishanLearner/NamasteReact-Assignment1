import { useState } from 'react';
import {returantDatalist} from '../constants';
import ResturantCardComponent from './ResturantCard'; 


const filterData =(_searchInput,restData) =>{
 const retData= _searchInput? restData.filter(x=>x.data.name.toLowerCase().includes(_searchInput.toLowerCase())) : restData;
 return retData;
}

const BodyComponent =() => {

  const [searchInput,setSearchInput] =useState("");

  const [Resturants,setResturants] =useState(returantDatalist);



    return (
<>
      <div className="search-container">
<input type="text" className="search-input" place="search for food" 
value={searchInput} onChange={(e) => {setSearchInput(e.target.value);} }/>
<button className='search-btn' onClick={
  ()=>{
  const data = filterData(searchInput,returantDatalist);
  setResturants(data);
  }}>
    Search</button>
            </div>
      <div className="returantlist">
        {
          Resturants.map(resturant =>{
             return <ResturantCardComponent {... resturant.data } key={resturant?.data?.id}/>
          })
        }
      </div>
      </>
    );
  }

  export default BodyComponent;