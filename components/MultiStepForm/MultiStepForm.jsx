import React, { useState } from "react";
import { ConfigProvider, Steps } from "antd";
import { Provider } from "./MultiStepFormContext";
import Review from "./Review";
import AssignmentDetails from "./AssignmentDetails";
import ReferenceDetails from "./ReferenceDetails";
import SuccessPanel from "@/components/SuccessPanel/SuccessPanel";

const { Step } = Steps;

const assignmentDetailsInitialState = {
  name: "",
  email: "",
  contactNumber: "",
  deadline: "",
  files: "",
};

const referenceDetailsInitialState = {
  remarks: "",
  supportingDocuments: "",
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
  const [isSubmitted, setIsSubmitted] = useState(false);
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
  if (isSubmitted) {
    return (
      <>
        <SuccessPanel />
      </>
    );
  }
  return (
    <Provider
      value={{
        assignmentDetails,
        setAssignmentDetails,
        next,
        prev,
        referenceDetails,
        setReferenceDetails,
        setIsSubmitted,
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
