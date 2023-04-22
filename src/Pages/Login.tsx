import React from "react";
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
import { Link } from "react-router-dom";
import { default as MUILink } from "@mui/material/Link";

export default function Login() {
	return (
		<AuthLayout pageName="login">
			<Typography variant="h5" fontWeight={"bold"}>
				Login
			</Typography>
			<Typography color={"gray"} mt={1}>
				Thanks to come back on Coraly
			</Typography>
			<Stack direction={"column"} mt={5}>
				<Box mb={2}>
					<TextField
						id="outlined-email-input"
						label="Email"
						type="email"
						autoComplete="current-email"
						fullWidth
						size="small"
					/>
				</Box>
				<TextField
					id="outlined-password-input"
					label="Password"
					type="password"
					autoComplete="current-password"
					size="small"
				/>
				<Stack
					direction={"row"}
					justifyContent={"space-between"}
					alignItems={"center"}
					mb={3}
					mt={0.5}
				>
					<FormControlLabel
						control={<Checkbox defaultChecked />}
						label="Remember me"
						color="gray"
					/>

					<Link to={"/reset-password"}>
						<MUILink color={"secondary"} fontWeight={"bold"} underline="none">
							Forgot password
						</MUILink>
					</Link>
				</Stack>
				<Button
					variant="contained"
					fullWidth
					size="large"
					sx={{ borderRadius: "8px", textTransform: "unset" }}
					disableElevation
				>
					Login
				</Button>
				<Typography mt={3} color={"gray"}>
					Don&apos;t you have an account?{" "}
					<Link to={"/signup"}>
						<MUILink color={"secondary"} fontWeight={"bold"} underline="none">
							Sign up now
						</MUILink>
					</Link>
				</Typography>
			</Stack>
		</AuthLayout>
	);
}
