import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = ({
  price,
  ingredientAdded,
  ingredientRemoved,
  disabled,
  purchasable,
  ordered,
}) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current price: <strong>{price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => ingredientAdded(ctrl.type)}
          removed={() => ingredientRemoved(ctrl.type)}
          disabled={disabled[ctrl.type]}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!purchasable}
        onClick={ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
