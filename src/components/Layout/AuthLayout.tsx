import { Box, Stack, Typography } from "@mui/material";
import React, { ReactNode, memo } from "react";
import Logo from "../icons/Logo";

type PageName = "login" | "signUp" | "reset";
type Props = {
	children: ReactNode;
	pageName: PageName;
};

const getPageImage = (page: PageName) => {
	switch (page) {
		case "signUp":
			return "/assets/images/signup-bg.png";

		case "reset":
			return "/assets/images/reset-bg.png";
		default:
			return "/assets/images/login-bg.png";
	}
};

function AuthLayout({ children, pageName }: Props) {
	const backgroundImage = getPageImage(pageName);
	const backgroundStyle = {
		backgroundImage: `url(${backgroundImage})`,
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	};

	return (
		<Box component={"main"} height={"100vh"}>
			<Stack direction={"row"} height={"100%"}>
				<Box width="40%" py={4} px={16} className="auth-content-wrapper">
					<Box mb={10}>
						<Logo />
					</Box>
					{children}
				</Box>
				<Stack
					direction={"column"}
					height={"100%"}
					alignItems={"center"}
					justifyContent={"center"}
					sx={backgroundStyle}
					width={"60%"}
				>
					<Typography
						variant="h4"
						width="60%"
						fontWeight="bold"
						lineHeight={1.3}
					>
						Get started with Coraly now and improve your workflow
					</Typography>
				</Stack>
			</Stack>
		</Box>
	);
}

export default memo(AuthLayout);
