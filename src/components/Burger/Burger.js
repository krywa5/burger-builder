import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    //Object.keys() z obiektu tworzy tablicę składającą się TYLKO z kluczy obiektu
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        // _ jako argument oznacza, że ten argument nas nie obchodzi
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        });
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    // console.log(transformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
}

export default burger;