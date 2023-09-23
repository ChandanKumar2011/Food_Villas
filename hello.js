//import React from "react";
//import ReactDOM from "react-dom/client";
// import { restaurants } from "./common/mockData";
//import fetch from "node-fetch";

const fetch = require("node-fetch"); 
// we require to install node@2fetch 
//so that we can use fetch , otherwise we cant use fetch method here


//const { fetch } = require("./NodeJS/controller/restaurants.controller");


/**
 * <div id="parent">
 *      <div id="child1">
 *          <h1> Hello World using React Elements <h1>
 *          <h2> Hello World using React Elements 1 <h2>
 *      </div>
 * 
 * <div id="child2">
 *          <h1> Hello World using React Elements <h1>
 *          <h2> Hello World using React Elements 1 <h2>
 *      </div>
 * </div>
 */

//const parent = React.createElement('div', {id: "parent"}, [
  //  React.createElement('div', {id: "child1"}, [
  //      React.createElement('h1', {}, "Hello World using React Elements"),
   //     React.createElement('h2', {}, "Hello World using React Elements 1 ")
   // ]),

    //React.createElement('div', {id: "child2"}, [
   //     React.createElement('h1', {}, "Hello World using React Elements"),
   //     React.createElement('h2', {}, "Hello World using React Elements 1 ")
   // ]),
//]
   // );


    //JSX --- HTML like syntax
//const root = ReactDOM.createRoot(document.getElementById('root'));

//const header = (
    //<>
        // <div id="parent">
        //<div id="child">
       //     <h1>Hiiii</h1>
       // </div>

   // </div>
       // <h1 id="heading"> Hello World using react </h1> 
   // </>
   
//);

//const header2 = (
  //  <>
  //  <div id="parent1">
   //     <div id="child1">
    //        <img id = "pict"src="https://resources.pulse.icc-cricket.com/ICC/photo/2019/08/23/060a7fcc-10b5-487b-ba68-fa86069dfb20/Dhoni.jpg"></img>

    //    </div>

   // </div>
   // <h2 id="heading2">Hello react</h2>
   // </>
//);

//console.log(header);

// Babel -----  converts html like syntax to JS Object (React Element)
//root.render(header);
//root.render(header2);




//root.render(parent);
// replace
//root.render("anshika");


// const header = React.createElement('h1', {id: "heading"}, 'Hello World');

// // React Element ====> JS Object

// console.log(header);

// // ReactDOM is used for dom manipulation
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(header);

// // render method converts your JS object into html (which browser understands)

//const FirstMessage  = () => {
   // return <h1>Hello chandan kumar</h1>
//}

// Running one functional component inside another component is component compostion.
//const SecondMessage =() => {
    //return(
     //   <>
      //  {FirstMessage()}
      //  <h1>Welcome to Microsoft</h1>
      //  </>
   // )
//}

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<SecondMessage/>)

//let accessToken;

//fetch("http://localhost:8000/api/login",{
   //method: "POST",
  // headers: {
     // "Content-type": "application/json; charset=UTF-8",

  // },
   //body: JSON.stringify({
   ////   email: "abc@gmail.com",
   //   password: "Geeks1234"
   //})
//}).then((res) => res.json())
//.then((data) => {
  // accessToken = data.accessToken;
   //.setItem("token", accessToken);
//});

//const token = localStorage.getItem("token");
//console.log(token);



//fetch("http://localhost:8000/api/restaurants", {
  // headers: {
   //   Authorization: 
     // "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZThmM2UzNmU2OTJhOWNiZjljYWViYiIsImlhdCI6MTY5NDYyNjYxNn0.ByGBQEVpa2VhPU0iFAbIGW31WungoCzVQUJ42Rx-KD8"
  // },
// })
  //.then((res) => res.json())
 // .then((restaurants) => console.log(restaurants));
 
