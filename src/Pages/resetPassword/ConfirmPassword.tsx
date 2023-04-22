import React from "react";
import AuthLayout from "../../components/Layout/AuthLayout";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function ConfirmPassword() {
	return (
		<AuthLayout pageName="reset">
			<Box width={"85%"} mx="auto">
				<Typography variant="h5" fontWeight={"bold"}>
					Insert new password
				</Typography>
				<Typography color={"gray"} mt={1} mb={3} fontSize={14}>
					Enter your new password to access the <br /> platform
				</Typography>
				<TextField
					id="outlined-password-input"
					label="New Password"
					type="password"
					autoComplete="current-password"
					fullWidth
					size="small"
					margin="normal"
				/>
				<TextField
					id="outlined-password-input"
					label="Confirm new password"
					type="password"
					autoComplete="current-password"
					fullWidth
					size="small"
					margin="normal"
				/>
				<Button
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
				>
					Confirm new password
				</Button>
			</Box>
		</AuthLayout>
	);
}
