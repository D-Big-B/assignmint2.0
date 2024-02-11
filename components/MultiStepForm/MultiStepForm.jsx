import React, { useState } from "react";
import { ConfigProvider, Steps } from "antd";
import { Provider } from "./MultiStepFormContext";
import Review from "./Review";
import AssignmentDetails from "./AssignmentDetails";
import ReferenceDetails from "./ReferenceDetails";

const { Step } = Steps;

const assignmentDetailsInitialState = {
  name: "",
  email: "",
  contactNumber: "",
  deadline: "",
  files: "",
};

const referenceDetailsInitialState = {
  address1: "",
  address2: "",
  city: "",
};

const renderStep = (step) => {
  switch (step) {
    case 0:
      return <AssignmentDetails />;
    case 1:
      return <ReferenceDetails />;
    case 2:
      return <Review />;
    default:
      return null;
  }
};

const MultiStepForm = () => {
  const [assignmentDetails, setAssignmentDetails] = useState(
    assignmentDetailsInitialState
  );
  const [referenceDetails, setReferenceDetails] = useState(
    referenceDetailsInitialState
  );
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep === 2) {
      setCurrentStep(0);
      setAssignmentDetails(assignmentDetailsInitialState);
      setReferenceDetails(referenceDetailsInitialState);
      return;
    }
    setCurrentStep(currentStep + 1);
  };
  const prev = () => setCurrentStep(currentStep - 1);
  return (
    <Provider
      value={{
        assignmentDetails,
        setAssignmentDetails,
        next,
        prev,
        referenceDetails,
        setReferenceDetails,
      }}
    >
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#111",
            borderRadius: 2,

            // Alias Token
            colorBgContainer: "#f6ffed",
          },
        }}
      >
        <Steps current={currentStep}>
          <Step title={"Assignment Details"} style={{}} />
          <Step title={"Reference Details"} />
          <Step title={"Review and Order"} />
        </Steps>
        <main>{renderStep(currentStep)}</main>
      </ConfigProvider>
    </Provider>
  );
};
export default MultiStepForm;
