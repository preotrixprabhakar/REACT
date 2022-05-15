import React from  "react";
import ReactDom from "react-dom";
const currentDate= new Date();
const hour= currentDate.getHours();

let greetings;
const customStyle={
color:""
}

 if(hour <12 ){
    greetings= "Good morning";
    customStyle.color="red";
  }
  else if(hour<18){
    greetings= "Good Afternoon";
    customStyle.color= "green"
  }
  else {
    greetings= "Good Evening";
    customStyle.color="blue"
  }

   

 ReactDom.render(
<h1 className="heading" style={customStyle} >{greetings}</h1>
 ,document.getElementById("root" ));








//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
