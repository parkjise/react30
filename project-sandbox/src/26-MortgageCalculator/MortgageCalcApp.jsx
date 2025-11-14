import React, { useState } from "react";
import Title from "../components/Title";
import FormGroup from "../components/FormGroup";
import Button from "../components/Button";
const MortgageCalcApp = () => {
  let alertClass;

  const [homeValue, setHomeValue] = useState("");
  const [downPayment, setDownPaument] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInteresRate] = useState("");
  const [loanDuration, setLoanDuration] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");

  const calculateLoanAmount = () => {
    setLoanAmount(homeValue - downPayment);
    return loanAmount;
  };

  console.log(monthlyPayment);
  return (
    <div className="container mt-4 card" style={{ width: 500 }}>
      <Title text={"Mortgage Calc App"} />
      <form onSubmit={(e) => e.preventDefault}>
        <div
          className="d-grid"
          style={{ gridTemplateColumns: "1fr 1fr", gap: 10 }}
        >
          <FormGroup
            labelText={"Home value"}
            inputType={"number"}
            placeholder={"Enter the value of the home"}
            values={homeValue}
            onInput={(e) => setHomeValue(e.target.value)}
            onKeyUp={calculateLoanAmount}
          />
          <FormGroup
            labelText={"Down payment"}
            inputType={"number"}
            placeholder={"Enter your funds"}
            values={downPayment}
            onInput={(e) => setDownPaument(e.target.value)}
            onKeyUp={calculateLoanAmount}
          />
        </div>
        <FormGroup
          labelText={"Loan amount"}
          inputType={"number"}
          placeholder={"The calculated amount of loan"}
          readOnly={true}
          values={loanAmount}
          className={"bg-light"}
        />
        <div
          className="d-grid"
          style={{ gridTemplateColumns: "1fr 1fr", gap: 10 }}
        >
          <FormGroup
            labelText={"Interes Rate %"}
            inputType={"number"}
            placeholder={"Enter your interest rate"}
            values={interestRate}
          />
          <FormGroup
            labelText={"Loan Duration (years)"}
            inputType={"number"}
            placeholder={"Enter the duration of your loan in years"}
            values={loanDuration}
          />
        </div>
        <Button btnClass={"btn-info btn-block"} text={"Calculate"} />
        {monthlyPayment && (
          <h4
            className={`${(alertClass = "alert-danger")}`}
            style={{ width: "auto", margin: "1rem 0" }}
          ></h4>
        )}
      </form>
    </div>
  );
};

export default MortgageCalcApp;
