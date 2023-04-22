import React, { FormEvent, useState } from "react";
import AuthLayout from "../../components/Layout/AuthLayout";
import { Box, TextField, Typography } from "@mui/material";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useMutationRequest } from "../../hooks/useMutationRequest";
import { LoadingButton } from "@mui/lab";
import { formatResponseError } from "../../components/helpers/general";
import { useSnackbar } from "../../context/Snackbar";

export default function ConfirmPassword() {
	const loaderData = useLoaderData() as { code: string };
	const navigate = useNavigate();
	const { postMutation, creating } = useMutationRequest(
		"/api/auth/reset-password"
	);

	const [passwords, setPasswords] = useState({
		main: "",
		confirmation: "",
		isSame: true,
	});

	const { toastSuccess, toastError } = useSnackbar();

	const onPasswordChange = (field: "main" | "confirmation", value: string) => {
		setPasswords((pwd) => ({ ...pwd, [field]: value }));
	};

	const isSamePassword = () =>
		setPasswords((pwd) => ({
			...pwd,
			isSame: passwords.confirmation === passwords.main,
		}));

	const resetPassword = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = {
			passwordConfirmation: passwords.confirmation,
			password: passwords.main,
			code: loaderData.code,
		};

		postMutation.mutate(data, {
			onError(error) {
				toastError(formatResponseError(error));
			},
			onSuccess() {
				toastSuccess("Password successfully updated");
				navigate("/");
			},
		});
	};

	return (
		<AuthLayout pageName="reset">
			<Box width={"85%"} mx="auto">
				<Typography variant="h5" fontWeight={"bold"}>
					Insert new password
				</Typography>
				<Typography color={"gray"} mt={1} mb={3} fontSize={14}>
					Enter your new password to access the <br /> platform
				</Typography>
				<form method="POST" onSubmit={resetPassword}>
					<TextField
						id="outlined-password-input"
						label="New Password"
						type="password"
						autoComplete="current-password"
						fullWidth
						size="small"
						margin="normal"
						onChange={(e) => onPasswordChange("main", e.target.value)}
					/>
					<TextField
						id="outlined-password-input"
						label="Confirm new password"
						type="password"
						autoComplete="current-password"
						fullWidth
						size="small"
						margin="normal"
						onChange={(e) => onPasswordChange("confirmation", e.target.value)}
						onBlur={isSamePassword}
						error={!passwords.isSame}
						helperText={!passwords.isSame ? "Password must be the same" : ""}
					/>
					<LoadingButton
						variant="contained"
						fullWidth
						size="large"
						sx={{
							borderRadius: "8px",
							textTransform: "unset",
							marginTop: 3,
							fontWeight: "bold",
						}}
						disableElevation
						color="error"
						type="submit"
						loading={creating}
						disabled={creating}
					>
						Confirm new password
					</LoadingButton>
				</form>
			</Box>
		</AuthLayout>
	);
}
