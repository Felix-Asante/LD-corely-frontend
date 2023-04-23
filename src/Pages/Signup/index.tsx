import React, { useState } from "react";
import AuthLayout from "../../components/Layout/AuthLayout";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import EmailSent from "./EmailSent";
import WithAuth from "../../components/WithAuth";
import { RouteType } from "../../config/constants";

function SignUp() {
	const [activeStep, setActiveStep] = useState(1);

	const changeStep = (index: number) => setActiveStep(index);

	return (
		<AuthLayout pageName="signUp">
			{activeStep === 2 ? (
				<StepTwo nextStep={changeStep} />
			) : activeStep === 3 ? (
				<EmailSent />
			) : (
				<StepOne nextStep={changeStep} />
			)}
		</AuthLayout>
	);
}

export default WithAuth(SignUp, RouteType.GUEST);
