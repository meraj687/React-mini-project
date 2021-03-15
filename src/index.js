import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let currDate = new Date();
currDate = currDate.getHours();
let greeting = '';
const cssStyle = { };

if(currDate>=1 && currDate<12){
 greeting = 'Good Morning';
 cssStyle.color = 'green';
}
else if(currDate>=12 && currDate<16){
 greeting = "Good Afternoon";
 cssStyle.color = 'orange';
}
else if(currDate>=16 && currDate<=20)
{
 greeting = "Good evening";
 cssStyle.color='blue';
}
else
{
 greeting = "Good Night";
 cssStyle.color = 'black';
}



ReactDOM.render(
 <>
 <div>
 <h1>Hello Everybody , <span style={cssStyle}>{greeting}</span></h1>
 </div>
</>,
 document.getElementById('root')
);