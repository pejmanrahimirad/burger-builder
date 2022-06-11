import React from "react";
import classes from './NavigationItems.module.css'
import NavigationItem from "./NavigationItem/NavigationItem";
const NavigationItems=(props)=>{
    const items=[
        {name:'Burger Builder' , link:'/',active:true},
        {name:'CheckOut' , link:'/' , active:false},
    ]
    return <ul className={classes.NavigationItems}>
      <NavigationItem items={items} />
    </ul>
}

export default NavigationItems;