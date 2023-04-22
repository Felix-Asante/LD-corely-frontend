import React, { FormEvent, useState } from "react";
import AuthLayout from "../../components/Layout/AuthLayout";
import { Box, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { default as MUILink } from "@mui/material/Link";
import { useMutationRequest } from "../../hooks/useMutationRequest";
import { useSnackbar } from "../../context/Snackbar";
import { formatResponseError } from "../../components/helpers/general";
import { LoadingButton } from "@mui/lab";
import ResetEmailSent from "./ResetEmailSent";

export default function ResetPassword() {
	const [activeStep, setActiveStep] = useState(1);
	const { postMutation, creating } = useMutationRequest(
		"/api/auth/forgot-password"
	);
	const { toastError } = useSnackbar();

	const resetHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const email = formData.get("email");

		postMutation.mutate(
			{ email },
			{
				onError(error) {
					toastError(formatResponseError(error));
				},
				onSuccess() {
					setActiveStep(2);
				},
			}
		);
	};
	return (
		<AuthLayout pageName="reset">
			{activeStep === 2 ? (
				<ResetEmailSent />
			) : (
				<Box width={"80%"} mx={"auto"}>
					<Typography variant="h5" fontWeight={"bold"}>
						Did you forgot your <br /> password?
					</Typography>
					<Typography color={"gray"} mt={1}>
						Insert your email and we will send you a link in your email box to
						reset your password.
					</Typography>
					<form onSubmit={resetHandler} method="POST">
						<Box mt={5} mb={2}>
							<TextField
								id="outlined-email-input"
								label="Email"
								type="email"
								autoComplete="current-email"
								fullWidth
								size="small"
								name="email"
							/>
						</Box>
						<LoadingButton
							variant="contained"
							fullWidth
							size="large"
							sx={{ borderRadius: "8px", textTransform: "unset", marginY: 1 }}
							disableElevation
							color="error"
							loading={creating}
							disabled={creating}
							type="submit"
						>
							Reset Password
						</LoadingButton>
					</form>
					<Typography mt={1} color={"gray"}>
						Go back to{" "}
						<Link to={"/"}>
							<MUILink underline="none" color={"secondary"} fontWeight={"bold"}>
								Login
							</MUILink>
						</Link>
					</Typography>
				</Box>
			)}
		</AuthLayout>
	);
}
