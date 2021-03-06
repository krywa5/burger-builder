import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./Auth.module.css";
import * as actions from "../../store/actions";
import { checkValidity, updateObject } from "../../shared/utility";
import { Redirect } from "react-router-dom";

const initControls = {
  name: {
    elementType: "input",
    elementConfig: {
      type: "email",
      placeholder: "Mail address",
    },
    value: "",
    validation: {
      required: true,
      isEmail: true,
    },
    valid: false,
    touched: false,
  },
  password: {
    elementType: "input",
    elementConfig: {
      type: "password",
      placeholder: "Password",
    },
    value: "",
    validation: {
      required: true,
      minLength: 6,
    },
    valid: false,
    touched: false,
  },
};

const Auth = ({
  onAuth,
  onSetAuthRedirectPath,
  loading,
  error,
  isAuth,
  buildingBurger,
  authRedirectPath,
}) => {
  const [controls, setControls] = useState(initControls);
  const [isSignUp, setIsSignUp] = useState(false);

  const inputChangeHandler = (event, controlName) => {
    event.preventDefault();

    const updatedControls = updateObject(controls, {
      [controlName]: updateObject(controls[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          controls[controlName].validation
        ),
        touched: true,
      }),
    });

    setControls(updatedControls);
  };

  const formElementsArray = [];
  for (let key in controls) {
    formElementsArray.push({
      id: key,
      config: controls[key],
    });
  }

  const form = formElementsArray.map((formElement) => (
    <Input
      key={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      invalid={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      touched={formElement.config.touched}
      changed={(event) => inputChangeHandler(event, formElement.id)}
    />
  ));

  const submitHandler = (e) => {
    e.preventDefault();
    onAuth(controls.name.value, controls.password.value, isSignUp);
  };

  const onSignBtnHandler = () => {
    setIsSignUp((prevVal) => !prevVal);
  };

  useEffect(() => {
    if (!buildingBurger && authRedirectPath !== "/") {
      onSetAuthRedirectPath();
    }
  }, []);

  if (isAuth) {
    return <Redirect to={authRedirectPath} />;
  }

  return (
    <div className={classes.Auth}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <form onSubmit={submitHandler}>
            {form}
            <Button btnType="Success">Submit</Button>
          </form>
          {error && (
            <p role="alert">{error.replaceAll("_", " ").toLowerCase()}</p>
          )}
        </>
      )}
      <Button btnType="Danger" clicked={onSignBtnHandler}>
        SWITCH TO {isSignUp ? "SIGN IN" : "SIGN UP"}
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(actions.auth(email, password, isSignUp)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/")),
  };
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuth: state.auth.token !== null,
    buildingBurger: state.burgerBuilder.building,
    authRedirectPath: state.auth.authRedirectPath,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
