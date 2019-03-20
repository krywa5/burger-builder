import React from 'react';
import classes from './Button.module.css';

const button = (props) => {
    return (
        <button
            disabled={props.disabled}
            // sposób na dynamiczne zmienianie nazwy klasy przycisku
            className={[classes.Button, classes[props.btnType]].join(' ')}
            onClick={props.clicked}>{props.children}</button>
    );
}

export default button;