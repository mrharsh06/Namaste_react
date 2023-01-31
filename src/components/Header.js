import { useState } from "react";

//import { useState } from "react";
const LogedInUser=()=>{
  //API call to check LogedIn
  return true;
}

 export const Title = () => {
    return (
    <a href="/">
    <img src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" alt="logo"
    className="logo"/>
    </a>
      );
  };

  const Header = function (){

    const[IsLogedIn,setIsLogedIn]=useState(true);
  //How to use useState in react?
  //const [title,settitle]=useState("Food Villa");
  //<h1>{title}</h1>;
  //<button onClick={()=>settitle("New Food App")}>Title changes</button>
    return (
      <div className = "Header">
        <Title/>
      
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
        {IsLogedIn?(<button onClick={()=>setIsLogedIn(false)}>LogOut</button>)
        :(<button onClick={()=> setIsLogedIn(true)}>Login</button>)}
      </div>
    );
  };

  export default Header;

