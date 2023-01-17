import React from "react";
import  ReactDOM  from "react-dom/client";
const Header =()=>{
    return(
        <div id="header">
         <div id="left logo" src="logo.png">
         </div>
         <div id="centre">
            <placeholder></placeholder>
            <button type="click">ok</button>
         </div>

        <div id="right user" src="usericon"></div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<Header/>);

