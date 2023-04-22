import {
	Avatar,
	Box,
	Grid,
	IconButton,
	Paper,
	Stack,
	Typography,
} from "@mui/material";
import React, { ReactNode } from "react";
import GridIcon from "../icons/GridIcon";
import HelpIcon from "../icons/HelpIcon";
import RobotIcon from "../icons/RobotIcon";
import StorageIcon from "../icons/StorageIcon";
import DocumentIcon from "../icons/DocumentIcon";
import UsersIcon from "../icons/UsersIcon";
import Sitemap from "../icons/Sitemap";
import ArrowForward from "../icons/ArrowForward";
import { Link, useLocation } from "react-router-dom";
import { COLORS } from "../../config/theme";
import BurgerIcon from "../icons/BurgerIcon";
import BellIcon from "../icons/BellIcon";

type Props = {
	children?: ReactNode;
};
export default function AppLayout({ children }: Props) {
	return (
		<Grid container>
			<Grid item>
				<SideBarMenu />
			</Grid>
			<Grid item flex={1}>
				<AppHeader />
				{children}
			</Grid>
		</Grid>
	);
}

const MENU = [
	{
		path: "/board",
		icon: GridIcon,
	},
	{
		path: "/users",
		icon: UsersIcon,
	},
	{
		path: "/documents",
		icon: DocumentIcon,
	},
	{
		path: "/storage",
		icon: StorageIcon,
	},
	{
		path: "/",
		icon: ArrowForward,
	},
	{
		path: "/",
		icon: RobotIcon,
	},
	{
		path: "/sitemap",
		icon: Sitemap,
	},
	{
		path: "/support",
		icon: HelpIcon,
	},
];

const styles = {
	avatar: {
		bgcolor: "#FC9FB6",
		border: "1px solid #F93E6C",
		borderRadius: "5px",
		marginY: 2,
	},
	headerAvatar: {
		bgcolor: "#96E7DE",
		border: "1px solid #2CCFBC",
		borderRadius: "5px",
		marginY: 2,
	},
};
function SideBarMenu() {
	const location = useLocation();

	return (
		<Box
			bgcolor={"#04385A"}
			width="10px"
			height={"100vh"}
			p={5}
			component="aside"
		>
			<Stack alignItems="center" gap={2}>
				<BurgerIcon />
				<Avatar sx={styles.avatar} variant="square">
					LD
				</Avatar>
				{MENU.map((menu, index) => (
					<Link key={index} to={menu.path}>
						<IconButton
							sx={{
								borderRadius: "8px",
								padding: "12px",
								background:
									location.pathname === menu.path
										? "rgba(255, 255, 255, 0.05)"
										: "",
							}}
						>
							<menu.icon
								width="20"
								height="20"
								fill={
									location.pathname === menu.path
										? COLORS.error
										: COLORS.gray.main
								}
							/>
						</IconButton>
					</Link>
				))}
			</Stack>
		</Box>
	);
}

function AppHeader() {
	return (
		<Paper
			sx={{
				height: "50px",
				padding: "5px 20px",
				borderBottom: "1px solid #d7d7d7",
			}}
			elevation={1}
		>
			<Stack
				direction={"row"}
				width={"100%"}
				height={"100%"}
				alignItems={"center"}
				justifyContent={"space-between"}
			>
				<Typography variant="h5" fontWeight="bold">
					Process
				</Typography>
				<Stack direction={"row"} alignItems={"center"} gap={2}>
					<IconButton>
						<BellIcon />
					</IconButton>
					<Avatar sx={styles.headerAvatar} variant="square">
						FN
					</Avatar>
				</Stack>
			</Stack>
		</Paper>
	);
}
