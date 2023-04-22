import React from "react";
import { Box, Typography } from "@mui/material";
import CheckMark from "../../components/icons/CheckMark";

export default function EmailSent() {
	return (
		<Box>
			<Typography variant="h5" fontWeight={"bold"}>
				Your workspace is ready
			</Typography>
			<Typography color={"gray"} mt={1} mb={4} fontSize={14}>
				Check your email inbox. <br />
				We sent you a confirmation email.
			</Typography>
			<CheckMark />
		</Box>
	);
}
