import {ImageCDNURL} from "../constants";

const ResturantCardComponent = ({name,cuisines,cloudinaryImageId,lastMileTravel}) => {
    //console.log('props',resturant);
      //const {name,cuisines,cloudinaryImageId,lastMileTravel} =resturant;
      return(
        <div className="card">
          <img src={ImageCDNURL+cloudinaryImageId} alt={name} />
          <h2>{name}</h2>
          <h3>{cuisines?.join(", ")}</h3>
          <h4>{lastMileTravel} minutes</h4>
    
        </div>
      );
    }
    
export default ResturantCardComponent;