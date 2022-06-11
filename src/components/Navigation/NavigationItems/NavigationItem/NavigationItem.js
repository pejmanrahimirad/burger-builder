import React from "react";
import classes from './NavigationItem.module.css'

const NavigationItem = (props) => {
    return props.items.map(x => {
        return <li className={classes.NavigationItem} >
            <a
                href={x.link}
                className={x.active ? classes.active : null} >
                {x.name}
            </a>
        </li>
    })
}

export default NavigationItem;