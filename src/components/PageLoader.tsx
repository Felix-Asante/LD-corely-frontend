import { Stack } from "@mui/material";
import React from "react";
import Logo from "./icons/Logo";

export default function PageLoader() {
	return (
		<Stack alignItems={"center"} justifyContent={"center"} height={"100vh"}>
			<Logo />
		</Stack>
	);
}
