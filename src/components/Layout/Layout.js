import React,{useState} from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css'
const Layout = (props) => {
    let [showSideDrawer,setShowSideDrawer]=useState(true)
    const sideDrawerClosedHandler=()=>{
        setShowSideDrawer(false)
    }
    const sideDrawerOpenedHandler=()=>{
        setShowSideDrawer(true)
    }


    return <React.Fragment>
        <Toolbar openSideMenu={sideDrawerOpenedHandler} />
        <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
        <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
}

export default Layout;