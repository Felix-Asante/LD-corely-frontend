import React from "react";
import AuthLayout from "../../components/Layout/AuthLayout";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { default as MUILink } from "@mui/material/Link";

export default function ResetPassword() {
	return (
		<AuthLayout pageName="reset">
			<Box width={"80%"} mx={"auto"}>
				<Typography variant="h5" fontWeight={"bold"}>
					Did you forgot your <br /> password?
				</Typography>
				<Typography color={"gray"} mt={1}>
					Insert your email and we will send you a link in your email box to
					reset your password.
				</Typography>
				<Box mt={5} mb={2}>
					<TextField
						id="outlined-email-input"
						label="Email"
						type="email"
						autoComplete="current-email"
						fullWidth
						size="small"
					/>
				</Box>
				<Button
					variant="contained"
					fullWidth
					size="large"
					sx={{ borderRadius: "8px", textTransform: "unset", marginY: 1 }}
					disableElevation
					color="error"
				>
					Reset Password
				</Button>
				<Typography mt={1} color={"gray"}>
					Go back to{" "}
					<Link to={"/"}>
						<MUILink underline="none" color={"secondary"} fontWeight={"bold"}>
							Login
						</MUILink>
					</Link>
				</Typography>
			</Box>
		</AuthLayout>
	);
}
