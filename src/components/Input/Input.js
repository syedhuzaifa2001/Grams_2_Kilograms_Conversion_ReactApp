import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Input.module.css";
import ErrorModal from "../UI/Error/ErrorModal";

function Input(props) {
  const [enteredWeight, setEnteredWeight] = useState('');
  const [error, setError] = useState('');
  // const [enteredKg,setWeightKg]=useState()

  const editWeightHandler = (event) => {   
    setEnteredWeight(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (+enteredWeight < 0) {
      setError({
        title: "Invalid Kilogram",
        message: "Please enter valid decimal Number.",
      });
      return;
    }
    if (enteredWeight=='') {
      setError({
        title: "No Value Entered!",
        message: "Please enter some value to convert.",
      });
      return;
    }
    props.onAddInput(enteredWeight);
    // setWeightKg(`${enteredWeight} grams = ${+enteredWeight * 0.001} kg`);
    setEnteredWeight("");
  };

  const handleError = () => {
    setError(null);
  };
 

  return (
    <div>
      <Card>
        {error ? (
          <ErrorModal
            onHandleError={handleError}
            title={error.title}
            message={error.message}
          />
        ) : (
          " "
        )}
        <form onSubmit={formSubmitHandler} className={classes.input}>
          <label htmlFor="weight">Weight in Grams: </label>
          <input 
            type="decimal"
            id="weight"
            value={enteredWeight}
            onChange={editWeightHandler}
            onClick={props.resetValue}
          />

          <label htmlFor="KG">Kilogram: </label>
          <input style={{backgroundColor:'rgb(172, 168, 168)', color:'white'}} type="text" id="KG" value={props.enteredKg} disabled />

          <Button type="submit">Convert</Button>
        </form>
      </Card>
    </div>
  );
}

export default Input;
