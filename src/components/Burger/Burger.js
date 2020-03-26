import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => { //a wrapper around the burgerIngredient file
    let transformIngredients = Object.keys(props.ingredients) //turns ingredients state from BurgerBuilder into an Array of keys
    .map(igKey => { //maps each returned key i.e. ingredient use in the type prop
        return [...Array(props.ingredients[igKey])] //creates an array with length equal to the listed amount of ingredients in the BurgerBuilder state
            .map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} /> //this map returns a BurgerIngredient comp. based on the length of the array
            }); //the i is the index given to the key prop
    })
    .reduce((arr, el) => {
        return arr.concat(el);
    }, []); //this will combine the spread arrays back into a single array
    if (transformIngredients.length === 0) {
        transformIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;
