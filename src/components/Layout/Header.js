import mealsImage from "../assets/meals.jpg";
import classes from "./Header.module.css";
import React, {Fragment} from 'react';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes["main-image"]}>
            <img src={mealsImage}/>
        </div>
    </Fragment>
}

export default Header;
