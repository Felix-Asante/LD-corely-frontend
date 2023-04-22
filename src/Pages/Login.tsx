import React, { FormEvent } from "react";
import AuthLayout from "../components/Layout/AuthLayout";
import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { default as MUILink } from "@mui/material/Link";
import { useMutationRequest } from "../hooks/useMutationRequest";
import { useSnackbar } from "../context/Snackbar";
import { formatResponseError } from "../components/helpers/general";
import { LoadingButton } from "@mui/lab";

export default function Login() {
	const { postMutation, creating } = useMutationRequest("/api/auth/local");
	const { toastError } = useSnackbar();
	const navigate = useNavigate();

	const getFormData = (e: FormEvent<HTMLFormElement>) => {
		const formData = new FormData(e.currentTarget);

		const email = formData.get("email") as string;
		const password = formData.get("password") as string;

		return { identifier: email, password };
	};

	const loginHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = getFormData(e);
		postMutation.mutate(formData, {
			onError(error) {
				toastError(formatResponseError(error));
			},
			onSuccess() {
				navigate("/board");
			},
		});
	};

	return (
		<AuthLayout pageName="login">
			<Typography variant="h5" fontWeight={"bold"}>
				Login
			</Typography>
			<Typography color={"gray"} mt={1}>
				Thanks to come back on Coraly
			</Typography>
			<form onSubmit={loginHandler} method="POST">
				<Stack direction={"column"} mt={5}>
					<Box mb={2}>
						<TextField
							id="outlined-email-input"
							label="Email"
							type="email"
							autoComplete="current-email"
							fullWidth
							size="small"
							name="email"
							required
						/>
					</Box>
					<TextField
						id="outlined-password-input"
						label="Password"
						type="password"
						autoComplete="current-password"
						size="small"
						name="password"
						required
					/>
					<Stack
						direction={"row"}
						justifyContent={"space-between"}
						alignItems={"center"}
						mb={3}
						mt={0.5}
					>
						<FormControlLabel
							control={<Checkbox />}
							label="Remember me"
							color="gray"
						/>

						<Link to={"/reset-password"}>
							<MUILink color={"secondary"} fontWeight={"bold"} underline="none">
								Forgot password
							</MUILink>
						</Link>
					</Stack>
					<LoadingButton
						variant="contained"
						fullWidth
						size="large"
						sx={{ borderRadius: "8px", textTransform: "unset" }}
						disableElevation
						disabled={creating}
						loading={creating}
						type="submit"
					>
						Login
					</LoadingButton>
					<Typography mt={3} color={"gray"}>
						Don&apos;t you have an account?{" "}
						<Link to={"/signup"}>
							<MUILink color={"secondary"} fontWeight={"bold"} underline="none">
								Sign up now
							</MUILink>
						</Link>
					</Typography>
				</Stack>
			</form>
		</AuthLayout>
	);
}
