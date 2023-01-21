import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../contants";
import { useState } from "react";


function filterData(searchtext,restaurants) {

  const filter=restaurants.filter((restaurant)=>
  restaurant.data.name.includes(searchtext)

  )
  return filter;

}

//never use index as key use if you don't have any unique key in database
const Body=()=>{
  const [searchtext,setsearchtext]=useState();
  const [restaurants,setrestaurants]=useState(restaurantList)
    return(
    <>
    <div className="Search-container">
     <input 
      type="text"
      className="search-input"
      placeholder="search"
      value={searchtext}
      onChange={(e)=>{setsearchtext(e.target.value)}}
       />
       <button className="Search-btn" onClick={()=>{
        //need to filter the Data
      const data= filterData(searchtext,restaurants);
        //update the state-restaurants

        setrestaurants(data);
        

       
       }}>Search</button>
    </div>
    <div className="body">
     {

     restaurants.map((restaurant)=>
     {

      return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>;
     
    }
     )
      
     }
    </div>
    </>
    );
  };

  export default Body;