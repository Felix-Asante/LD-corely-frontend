import React from "react";
import { Box, Typography } from "@mui/material";
import CheckMark from "../../components/icons/CheckMark";

export default function ResetEmailSent() {
	return (
		<Box width={"85%"} mx="auto">
			<Typography variant="h5" fontWeight={"bold"}>
				Email was sent
			</Typography>
			<Typography color={"gray"} mt={1} mb={5} fontSize={14}>
				Check your email inbox. <br />
				Check your email inbox.We sent you an email to edit your password. If
				you didn&apos;t received the email, please check your SPAM inbox.
			</Typography>
			<CheckMark />
		</Box>
	);
}
