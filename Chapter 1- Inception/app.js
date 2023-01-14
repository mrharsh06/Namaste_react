/*
parcel using HMR to auto reload the server 
*HMR(Hot module Reloading)
*File watcher Algorithm 
*/

// import React from "react";
// import ReactDOM from "react-dom/client";

const heading1=React.createElement(
    "h1",
    {
        id:"title",
    },
    "Namaste Everyone!"
    );


const heading2=React.createElement(
    "h2",
    {
        id:"heading2",
    },
    "Namaste duniya"
    );

const container=React.createElement(
    "div",
    {
        id:"container",
    },
    [heading1,heading2]
    );
//here we create root element so we can manipulate inside the dom
const root=ReactDOM.createRoot(document.getElementById("root"));
//pass a react element inside a root
root.render(container);