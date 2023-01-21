import {IMG_CDN} from "../contants";
//here we just pass the multiple props
const RestaurantCard=({name,cuisines,lastMileTravelString,cloudinaryImageId})=>{
    return(
   <div className="card">
<img src={IMG_CDN
+cloudinaryImageId
}
/>
   <h2>{name}</h2>
   <h3>{cuisines.join(", ")}</h3>
   <h3>{lastMileTravelString} Distance</h3>
   </div>
  );
}

export default RestaurantCard;