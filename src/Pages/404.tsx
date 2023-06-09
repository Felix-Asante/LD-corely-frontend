import { Button, Stack, Typography } from "@mui/material";
import React from "react";

const NotFoundImage = () => (
	<svg
		width="607"
		height="233"
		viewBox="0 0 607 233"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M127.85 164.192H185.023V182.561H215.561V164.192H229.108V139.394H215.561V65H175.149L127.85 139.394V164.192ZM185.712 139.394H159.306V138.475L184.793 98.064H185.712V139.394Z"
			fill="#F93E6C"
		/>
		<path
			d="M293 207.383C324.973 207.44 344.835 184.536 344.892 145.617C344.949 106.928 324.973 85 293 85C260.969 85 241.223 106.813 241.108 145.617C240.993 184.364 260.969 207.325 293 207.383ZM293 181.437C281.979 181.437 274.057 170.358 274.172 145.617C274.287 121.451 281.979 110.716 293 110.716C304.021 110.716 311.771 121.451 311.828 145.617C311.885 170.358 304.021 181.437 293 181.437Z"
			fill="#F93E6C"
		/>
		<path
			d="M356.893 164.192H414.066V182.561H444.604V164.192H458.151V139.394H444.604V65H404.192L356.893 139.394V164.192ZM414.754 139.394H388.349V138.475L413.836 98.064H414.754V139.394Z"
			fill="#F93E6C"
		/>
		<rect width="186" height="117" rx="14" fill="url(#paint0_linear_9_9265)" />
		<rect
			x="607.122"
			y="154.344"
			width="145.351"
			height="157.464"
			rx="58.5"
			transform="rotate(135 607.122 154.344)"
			fill="url(#paint1_linear_9_9265)"
		/>
		<defs>
			<linearGradient
				id="paint0_linear_9_9265"
				x1="10.1087"
				y1="7.63044"
				x2="83.9783"
				y2="123.229"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#FC9FB6" stopOpacity="0.2" />
				<stop offset="1" stopColor="white" stopOpacity="0" />
			</linearGradient>
			<linearGradient
				id="paint1_linear_9_9265"
				x1="615.022"
				y1="164.613"
				x2="724.075"
				y2="263.704"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#FC9FB6" stopOpacity="0.2" />
				<stop offset="1" stopColor="white" stopOpacity="0" />
			</linearGradient>
		</defs>
	</svg>
);

export default function NotFound() {
	return (
		<Stack justifyContent={"center"} alignItems={"center"} height={"100vh"}>
			<NotFoundImage />
			<Typography variant="h5">Page not found</Typography>
			<Typography color={"gray"} mt={1} mb={4}>
				The page you are trying to reach is not available. It may have been
				deleted or its URL was misspelled.
			</Typography>
			<Button variant="contained">Go back</Button>
		</Stack>
	);
}
