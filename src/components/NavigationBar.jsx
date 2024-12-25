import React from "react";
import "../CSSFiles/Navigation.css"

function NavigationBar(){
    return(
        <div className="navigationBar">
            <ol>
            <li>Buy</li>
            <li>Rent</li>
            <li>House Prices</li>
            <li>Commercial</li>
            </ol>
        </div>
    )
 }
 export default NavigationBar;