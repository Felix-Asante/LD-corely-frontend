import React, { useState } from "react";
import AppLayout from "../../components/Layout/AppLayout";
import {
	Box,
	Dialog,
	DialogContent,
	DialogTitle,
	Grid,
	IconButton,
	Input,
	Popover,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import {
	AddOutlined,
	CloseOutlined,
	Lock,
	MoreVert,
} from "@mui/icons-material";
import BoardIcon from "../../components/icons/BoardIcon";
import CookieIcon from "../../components/icons/CookieIcon";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { Link } from "react-router-dom";

const process = [
	{
		id: 1,
		bgColor: "#47BDFF",
		name: "Process 1",
		isPrivate: false,
	},
	{
		id: 2,
		bgColor: "#FF47B5",
		name: "Process 2",
		isPrivate: true,
	},
];
export default function Board() {
	const [showProcessModal, setShowProcessModal] = useState(false);
	const [color, setColor] = useColor("hex", "#121212");
	const [showColorPicker, setShowColorPicker] = useState(false);

	const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
		null
	);

	const handleColorPicker = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	return (
		<AppLayout>
			<Box
				component={"section"}
				py={6}
				px={3}
				bgcolor={"#f6f8fa"}
				height={"100%"}
			>
				<Typography variant="h4" fontWeight={"bold"} mb={1} fontSize={36}>
					Welcome, Fabrizio Nillo
				</Typography>
				<Typography color={"#5A5869"} fontSize={20} width={"30%"}>
					Work with your team mates, take track of your process and close all
					tasks
				</Typography>
				<Grid container mt={5} gap={5}>
					<Grid
						item
						width={"170px"}
						height={"140px"}
						p={1}
						onClick={() => setShowProcessModal(true)}
					>
						<Stack
							justifyContent={"center"}
							alignItems={"center"}
							sx={{ border: "1px dashed #D6D5D9", cursor: "pointer" }}
							borderRadius={1}
							height={"100%"}
							width={"100%"}
						>
							<AddOutlined sx={{ color: "#6F6D7B", fontSize: 30 }} />
							<Typography
								textAlign={"center"}
								color="#6F6D7B"
								fontWeight={"bold"}
								lineHeight={1.3}
								mt={1}
							>
								Create a new process
							</Typography>
						</Stack>
					</Grid>
					{process.map((item) => (
						<Grid key={item.id} item width={"140px"} height={"120px"}>
							<ProcessCard {...item} />
						</Grid>
					))}
				</Grid>
			</Box>
			<Dialog
				open={showProcessModal}
				onClose={() => setShowProcessModal(false)}
				maxWidth="sm"
				fullWidth
			>
				<Stack
					direction="row"
					alignItems="center"
					justifyContent={"space-between"}
				>
					<DialogTitle>Create a new process</DialogTitle>
					<IconButton onClick={() => setShowProcessModal(false)}>
						<CloseOutlined />
					</IconButton>
				</Stack>
				<DialogContent>
					<TextField
						label="Process name"
						name="process name"
						size="small"
						fullWidth
					/>
					<TextField
						label="Color"
						fullWidth
						size="small"
						sx={{ marginTop: "25px" }}
						InputProps={{
							startAdornment: (
								<Box
									bgcolor={color?.hex}
									width={"18px"}
									height={"18px"}
									borderRadius={"100%"}
									mr={1}
								/>
							),
							endAdornment: (
								<IconButton
									onClick={(e) => {
										handleColorPicker(e);
										setShowColorPicker(true);
									}}
								>
									<CookieIcon />
								</IconButton>
							),
						}}
						placeholder="Color"
						aria-label="color picker"
						defaultValue={color?.hex}
					/>

					<Popover
						open={showColorPicker}
						onClose={() => setShowColorPicker(false)}
						anchorEl={anchorEl}
						transformOrigin={{
							vertical: "top",
							horizontal: "left",
						}}
					>
						<ColorPicker
							width={300}
							height={100}
							color={color}
							onChange={setColor}
							hideHSV
							hideRGB
						/>
					</Popover>
				</DialogContent>
			</Dialog>
		</AppLayout>
	);
}

interface ProcessProps {
	isPrivate: boolean;
	name: string;
	bgColor: string;
}

function ProcessCard({ isPrivate, name, bgColor }: ProcessProps) {
	return (
		<Link to={"process/1"}>
			<Stack
				bgcolor={bgColor}
				p={1}
				borderRadius={"8px"}
				height={"100%"}
				width={"100%"}
				sx={{ cursor: "pointer" }}
			>
				{isPrivate && (
					<Stack
						direction={"row"}
						alignItems={"center"}
						justifyContent={"space-between"}
					>
						<Lock sx={{ color: "white", fontSize: "15px" }} />

						<MoreVert sx={{ color: "white", fontSize: "15px" }} />
					</Stack>
				)}
				<Stack alignItems={"center"} justifyContent={"center"} height={"100%"}>
					<BoardIcon />
					<Typography color={"white"} mt={1} fontWeight="bold">
						{name}
					</Typography>
				</Stack>
			</Stack>
		</Link>
	);
}
