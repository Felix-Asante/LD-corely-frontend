import { Box, Tabs, Typography } from "@mui/material";
import { ReactNode, useState } from "react";
import { COLORS } from "../../../config/theme";

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

export function CustomTabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
			style={{ width: "100%" }}
		>
			{value === index && (
				<Box sx={{ py: 1, mr: 2 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

interface CustomTabsProps {
	children: ReactNode;
	value: number;
	onChange: (event: React.SyntheticEvent, newValue: number) => void;
}
export function CustomTabs({ children, onChange, value }: CustomTabsProps) {
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		onChange(event, newValue);
	};

	return (
		<Tabs
			orientation="vertical"
			variant="scrollable"
			value={value}
			onChange={handleChange}
			aria-label="Vertical tabs example"
			sx={{
				borderLeft: 1,
				borderColor: "divider",

				"& .Mui-selected": { color: "#F93E6C" },
				"& .MuiButtonBase-root": {
					minWidth: "100%",
					maxWidth: "450px",
					justifyContent: "flex-start",
					textTransform: "capitalize",
					fontSize: 14,
					minHeight: "50px",
					fontWeight: "bold",
					"&.Mui-selected": {
						path: { fill: COLORS.error },
					},
				},
			}}
			TabIndicatorProps={{ sx: { left: 0, bgcolor: COLORS.error } }}
		>
			{children}
		</Tabs>
	);
}
