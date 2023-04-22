import React, { FormEvent } from "react";
import { Box, Checkbox, Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { default as MUILink } from "@mui/material/Link";
import LoadingButton from "@mui/lab/LoadingButton";
import { useSignUpContext } from "../../context/SignupContext";

type Props = {
	nextStep: (index: number) => void;
};

export default function StepOne({ nextStep }: Props) {
	const { updateUserInfo } = useSignUpContext();

	const getFormData = (e: FormEvent<HTMLFormElement>) => {
		const formData = new FormData(e.currentTarget);
		const workspace = formData.get("workspace") as string;
		const email = formData.get("email") as string;

		return { email, workspaceName: workspace };
	};

	const signUpHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = getFormData(e);
		updateUserInfo(formData);
		nextStep(2);
	};

	return (
		<Box>
			<Typography variant="h4" fontWeight={"bold"}>
				Create your workspace
			</Typography>
			<Typography color={"gray"} mt={1}>
				Coraly is the tool to manage your work processes form the same place
			</Typography>
			<form onSubmit={signUpHandler}>
				<Stack direction={"column"} mt={5}>
					<Box mb={2}>
						<TextField
							id="outlined-workspace-input"
							label="Workspace Name"
							type="text"
							autoComplete="current-workspace"
							fullWidth
							size="small"
							name="workspace"
							required
						/>
					</Box>
					<TextField
						id="outlined-email-input"
						label="Email"
						type="email"
						autoComplete="current-email"
						size="small"
						name="email"
						required
					/>
					<Stack
						direction={"row"}
						justifyContent={"space-between"}
						alignItems={"center"}
						mb={1}
						mt={2}
					>
						<Checkbox color="default" required />

						<Typography fontWeight={350} fontSize={14}>
							Agree with
							<Typography
								fontSize={14}
								color={"secondary"}
								fontWeight={"bold"}
								component={"a"}
							>
								{" "}
								Terms and Conditions, Privacy Policy{" "}
							</Typography>
							and{" "}
							<Typography
								fontSize={14}
								color={"secondary"}
								fontWeight={"bold"}
								component={"a"}
							>
								Cookie Policy
							</Typography>{" "}
						</Typography>
					</Stack>
					<Stack
						direction={"row"}
						justifyContent={"space-between"}
						alignItems={"center"}
						mb={4}
						mt={0.5}
					>
						<Checkbox color="default" />

						<Typography fontWeight={350} fontSize={14}>
							I authorize Coraly to process my personal data in order to receive
							informational, promotional and commercial communications via
							e-mail.
						</Typography>
					</Stack>
					<LoadingButton
						variant="contained"
						fullWidth
						size="large"
						sx={{
							borderRadius: "8px",
							color: "white",
							fontWeight: "bold",
							textTransform: "unset",
						}}
						color="secondary"
						disableElevation
						type="submit"
					>
						Create now the account
					</LoadingButton>

					<Typography mt={2} color={"gray"}>
						Do you have an account?{" "}
						<Link to={"/"}>
							<MUILink color={"secondary"} fontWeight={"bold"} underline="none">
								Login
							</MUILink>
						</Link>
					</Typography>
				</Stack>
			</form>
		</Box>
	);
}
