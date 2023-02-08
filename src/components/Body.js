import { useEffect, useState } from "react";
import { returantDatalist,ResturantAPIURL } from "../constants";
import ResturantCardComponent from "./ResturantCard";
import ShimmerUIComponent from "./shimmer";


const filterData = (_searchInput, restData) => {
  const retData = _searchInput?._searchInput !="" 
    ? restData.filter((x) =>
        x.data.name.toLowerCase().includes(_searchInput.toLowerCase())
      )
    : restData;
    
  return retData;
};

const BodyComponent = () => {
  const [searchInput, setSearchInput] = useState("");
  const [Resturants, setResturants] =useState([]); //useState(returantDatalist);
  const [OriginalDataResturants, setOriginalDataResturants] =useState([]);

  useEffect(()=>{
  getResturantDatafromApi();
  },[]);

  async function getResturantDatafromApi(){
    const apidata= await fetch(ResturantAPIURL);
    const retData= await apidata.json();
    console.log('useEffect',retData?.data?.cards[2]?.data?.data?.cards);
    setResturants(retData?.data?.cards[2]?.data?.data?.cards);
    setOriginalDataResturants(retData?.data?.cards[2]?.data?.data?.cards);
}
console.log('within bodycomponent');
  return (Resturants.length ===0) ? <ShimmerUIComponent /> :   (
    <>
    {console.log('within bodycomponent>> return view')}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          place="search for food"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, OriginalDataResturants);
            setResturants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="returantlist">
        {Resturants.map((resturant) => {
          return (
            <ResturantCardComponent
              {...resturant.data}
              key={resturant?.data?.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
