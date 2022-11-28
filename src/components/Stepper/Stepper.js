import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "react-stepper-horizontal";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import AddressForm from "./forms/AddressForm";
import PlaceOrderForm from "./forms/PlaceOrderForm";
import "./stepper.css";
import PlaceOrder from "../PlaceOrder/PlaceOrder";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "95%",
    backgroundColor: "transparent",
    textAlign: "center",
  },

  backButton: {
    marginRight: theme.spacing(1),
  },

  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const getStepLabels = () => {
  return ["Personal Information", "Address Information", "Place Order"];
};

const getStepContent = (stepIndex, handleNext) => {
  switch (stepIndex) {
    case 0:
      return <PersonalInfoForm handleNext={handleNext} />;

    case 1:
      return <AddressForm handleNext={handleNext} />;

    case 2:
      return <PlaceOrderForm handleNext={handleNext} />;

    default:
      return "Unknown Steps";
  }
};

const StepperComponent = () => {
  let history = useHistory();

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0); 
  const stepLabels = getStepLabels(); 

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <div className="stepper">
        <Stepper
          steps={[
            { title: "Personal Information" },
            { title: "Address Information" },
            { title: "Place Order" },
          ]}
          activeStep={activeStep}
        />
      </div>
      <div>
        {}

        {activeStep === stepLabels.length ? (
          <div>
            <PlaceOrder />
            <Button onClick={handleReset}>Go To Homepage</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep, handleNext)}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepperComponent;
