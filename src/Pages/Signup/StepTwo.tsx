import { LoadingButton } from "@mui/lab";
import { Box, Stack, TextField, Typography } from "@mui/material";
import { FormEvent, useState } from "react";
import { useMutationRequest } from "../../hooks/useMutationRequest";
import { useSignUpContext } from "../../context/SignupContext";
import { formatResponseError } from "../../components/helpers/general";
import { useSnackbar } from "../../context/Snackbar";

type Props = {
	nextStep: (index: number) => void;
};

export default function StepTwo({ nextStep }: Props) {
	const { postMutation, creating } = useMutationRequest(
		"/api/auth/local/register"
	);
	const { workspaceName, email } = useSignUpContext();

	const { toastError } = useSnackbar();

	const [passwords, setPasswords] = useState({
		main: "",
		confirmation: "",
		isSame: true,
	});

	const onPasswordChange = (field: "main" | "confirmation", value: string) => {
		setPasswords((pwd) => ({ ...pwd, [field]: value }));
	};

	const isSamePassword = () =>
		setPasswords((pwd) => ({
			...pwd,
			isSame: passwords.confirmation === passwords.main,
		}));

	const getFormData = (e: FormEvent<HTMLFormElement>) => {
		const formData = new FormData(e.currentTarget);

		const name = formData.get("name") as string;
		const surname = formData.get("surname") as string;
		const password = formData.get("password") as string;

		return { username: name, surname, password };
	};

	const signUpHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = getFormData(e);

		const data = { workspaceName, email, ...formData };

		postMutation.mutate(data, {
			onError(error) {
				toastError(formatResponseError(error));
			},
			onSuccess() {
				nextStep(3);
			},
		});
	};

	return (
		<Box>
			<Typography variant="h5" fontWeight={"bold"}>
				Complete your profile
			</Typography>
			<Typography color={"gray"} mt={1}>
				Insert all your info to proceed with your workspace{" "}
			</Typography>
			<form onSubmit={signUpHandler} method="post">
				<Stack direction={"row"} mt={5} mb={1} gap={2}>
					<TextField
						id="outlined-name-input"
						label="Name"
						type="text"
						autoComplete="current-name"
						fullWidth
						size="small"
						name="name"
						required
					/>
					<TextField
						id="outlined-surname-input"
						label="Surname"
						type="text"
						autoComplete="current-surname"
						fullWidth
						size="small"
						name="surname"
						required
					/>
				</Stack>
				<TextField
					id="outlined-password-input"
					label="Password"
					type="password"
					autoComplete="current-password"
					fullWidth
					size="small"
					margin="normal"
					name="password"
					onChange={(e) => onPasswordChange("main", e.target.value)}
					required
				/>
				<TextField
					id="outlined-password-input"
					label="Repeat Password"
					type="password"
					autoComplete="current-password"
					fullWidth
					size="small"
					margin="normal"
					name="confirmPassword"
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
						color: "white",
						fontWeight: "bold",
						textTransform: "unset",

						marginTop: 3,
					}}
					color="secondary"
					disableElevation
					type="submit"
					loading={creating}
					disabled={creating}
				>
					Complete now
				</LoadingButton>
			</form>
		</Box>
	);
}
