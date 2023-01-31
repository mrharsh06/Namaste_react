import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../contants";
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";


function filterData(searchtext,restaurants) {

  const filter=restaurants.filter((restaurant)=>
  restaurant?.data?.name?.toLowerCase()?.includes(searchtext.toLowerCase())

  );
  return filter;

}

//never use index as key use if you don't have any unique key in database
const Body=()=>{
  const [searchtext,setsearchtext]=useState([]);
  const [filteredrestaurants,setfilteredrestaurants]=useState([]);
  const[allrestaurants,setallrestaurants]=useState();
  

  //empty dependencies-once after renders because it contains callback function
  //dependency array[searchtext]-once after renders and +every time renders(my search text changes)

  useEffect(()=>{
    //Api call
    getRestaurants();

  },[]);

  async function getRestaurants(){
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&page_type=DESKTOP_WEB_LISTING")
    const json=await data.json();
    console.log(json);
    setallrestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredrestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  console.log("render()");

  //Conditional Rendering
  //if restaurant is empty=>shimmer UI
  //if restaurant has data=>actual data UI

 //Early return(when we don't want to render)

 if(!allrestaurants)
 return null;

 if(filteredrestaurants?.length===0)
 return <h1>No match found for your search!!</h1>

    return allrestaurants.length===0 ? (<Shimmer/>
    ):(
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
      const data= filterData(searchtext,allrestaurants);
        //update the state-restaurants

        setfilteredrestaurants(data);
      
       }}>Search</button>
    </div>
    <div className="body">
     {

     filteredrestaurants.map((restaurant)=>
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