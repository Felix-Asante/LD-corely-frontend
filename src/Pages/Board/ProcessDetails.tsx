import React, { MouseEvent, useState } from "react";
import AppLayout from "../../components/Layout/AppLayout";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	Container,
	Divider,
	Grid,
	IconButton,
	MenuItem,
	Paper,
	Popover,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import CookieIcon from "../../components/icons/CookieIcon";
import {
	AddCircleOutline,
	ExpandMore,
	FormatListBulleted,
	KeyboardArrowDown,
	MoreHoriz,
	NavigateBefore,
	NavigateNext,
	ShoppingBagOutlined,
	UnfoldMore,
} from "@mui/icons-material";
import { COLORS } from "../../config/theme";
import ViewsIcon from "../../components/icons/ViewsIcon";
import ColumnIcon from "../../components/icons/ColumnIcon";
import FilterIcon from "../../components/icons/FilterIcon";
import CropsIcon from "../../components/icons/CropsIcon";
import HeightIcon from "../../components/icons/HeightIcon";
import SearchIcon from "../../components/icons/SearchIcon";
import FileImportIcon from "../../components/icons/FileImportIcon";
import FileExportIcon from "../../components/icons/FileExportIcon";
import Settings from "../../components/icons/Settings";
import ProcessDetailsTable from "./ProcessDetailsTable";
import StartArrowIcon from "../../components/icons/StartArrowIcon";
import { CustomTextField } from "../../components/CustomTextField";
import SettingsDialog from "./SettingsDialog";

export default function ProcessDetails() {
	return (
		<AppLayout>
			<PageHeader />

			{/* sub header */}
			<Box component={"section"} px={2} py={1} bgcolor={COLORS.gray[50]}>
				<Grid container alignItems={"center"}>
					<Grid item>
						<KeyboardArrowDown
							sx={{ height: "18px", width: "18px", color: COLORS.gray[300] }}
						/>
					</Grid>
					<Grid item>
						<Stack direction="row" alignItems={"center"} gap={0.5} mx={1}>
							<Button startIcon={<StartArrowIcon />}>New contract</Button>
							<Button
								sx={{
									bgcolor: "#D6D5D9",
									color: COLORS.primary,
									padding: "1px 5px",
									"&:hover": {
										bgcolor: "#D6D5D9",
									},
									fontSize: "13px",
									textTransform: "capitalize",
								}}
								variant="contained"
								disableElevation
							>
								8 Schede
							</Button>
						</Stack>
					</Grid>
					<Grid item>
						<Stack direction={"row"} alignItems={"center"} gap={1}>
							<Button
								sx={{
									bgcolor: "#FFE8DA",
									minWidth: "6px",
									width: "6px",
									height: "25px",
									color: "red",
									"&:hover": {
										bgcolor: "#FFE8DA",
									},
								}}
								variant="contained"
								disableElevation
							>
								1
							</Button>
							<Button
								sx={{
									bgcolor: "#FEF4DE",
									minWidth: "6px",
									width: "6px",
									height: "25px",
									color: "#EF980B",
									"&:hover": {
										bgcolor: "#FEF4DE",
									},
								}}
								variant="contained"
								disableElevation
							>
								2
							</Button>
							<IconButton sx={{ "&:hover": { bgcolor: "transparent" } }}>
								<AddCircleOutline sx={{ color: COLORS.error }} />
							</IconButton>
							<MoreHoriz sx={{ color: COLORS.gray[300] }} />
						</Stack>
					</Grid>
				</Grid>
			</Box>

			{/* table view */}
			<ProcessDetailsTable />
		</AppLayout>
	);
}

// INFO PANEL
interface infoPanelProps {
	open: boolean;
	element: HTMLElement | null;
	onClose: () => void;
}

const accordionStyle = {
	boxShadow: 0,
	"&::before": { width: 0, height: 0 },
};

function InfoPanel({ open, element, onClose }: infoPanelProps) {
	return (
		<Popover
			open={open}
			anchorEl={element}
			onClose={onClose}
			PaperProps={{
				style: {
					maxHeight: "100vh",
					width: "20%",
					border: "1px solid #D6D5D9",
				},
				elevation: 0,
			}}
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "right",
			}}
			sx={{ marginTop: "10px" }}
		>
			<Stack sx={{ padding: "15px" }} gap={2}>
				<CustomTextField
					name="contract"
					label="Contract numbers"
					fullWidth
					size="small"
				/>
				<CustomTextField
					name="customer"
					label="Customer number"
					fullWidth
					size="small"
				/>
				<CustomTextField
					name="email"
					label="Email"
					type="email"
					fullWidth
					size="small"
				/>
				<CustomTextField label="Contract type" select size="small">
					<MenuItem value="1 Anno">1 Anno</MenuItem>
					<MenuItem value="2 Anno">2 Anno</MenuItem>
				</CustomTextField>
				<CustomTextField
					name="provider"
					label="Phone provider"
					fullWidth
					size="small"
				/>
			</Stack>

			{/* TIM */}
			<Accordion sx={accordionStyle}>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Stack direction={"row"} gap={1} alignItems={"center"}>
						<ShoppingBagOutlined
							sx={{ height: "18px", width: "18px", color: COLORS.error }}
						/>
						<Typography m={0} color={"#5A5869"} fontWeight={"bold"}>
							TIM
						</Typography>
					</Stack>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>TIM Content here</Typography>
				</AccordionDetails>
			</Accordion>
			{/*  */}
			<Accordion sx={accordionStyle}>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Stack direction={"row"} gap={1} alignItems={"center"}>
						<ShoppingBagOutlined
							sx={{ height: "18px", width: "18px", color: COLORS.error }}
						/>
						<Typography m={0} color={"#5A5869"} fontWeight={"bold"}>
							Disney Plus
						</Typography>
					</Stack>
				</AccordionSummary>
				<AccordionDetails>
					<Stack gap={2}>
						<CustomTextField
							name="email"
							label="Email"
							type="email"
							fullWidth
							size="small"
						/>
						<CustomTextField label="Contract type" select size="small">
							<MenuItem value="1 Anno">1 Anno</MenuItem>
							<MenuItem value="2 Anno">2 Anno</MenuItem>
						</CustomTextField>
						<CustomTextField
							name="discount"
							label="Discount"
							fullWidth
							size="small"
						/>
					</Stack>
				</AccordionDetails>
			</Accordion>

			<Grid
				container
				mt={2}
				alignItems={"center"}
				justifyContent={"space-between"}
				p={2}
			>
				<Stack direction="row" alignItems={"center"} gap={1}>
					<IconButton sx={{ borderRadius: "8px" }}>
						<NavigateBefore
							sx={{ height: "25px", width: "25px", color: COLORS.gray[300] }}
						/>
					</IconButton>
					<IconButton sx={{ borderRadius: "8px" }}>
						<NavigateNext
							sx={{ height: "25px", width: "25px", color: COLORS.gray[300] }}
						/>
					</IconButton>
				</Stack>
				<Stack direction="row" alignItems={"center"} gap={1}>
					<Button variant="outlined" size="small" disableElevation>
						Annulla
					</Button>
					<Button
						variant="contained"
						size="small"
						color="secondary"
						disableElevation
						sx={{ color: "#ffff" }}
					>
						Salva
					</Button>
				</Stack>
			</Grid>
		</Popover>
	);
}

// PAGE HEADER
function PageHeader() {
	const [infoPanelEL, setInfoPanelEl] = useState<null | HTMLElement>(null);
	const [showSettingsModal, setShowSettingsModal] = useState(false);
	const open = Boolean(infoPanelEL);

	const showInfoPanel = (e: MouseEvent<HTMLButtonElement>) => {
		setInfoPanelEl(e.currentTarget);
	};

	const closeInfoPanel = () => setInfoPanelEl(null);

	return (
		<Paper
			elevation={0}
			sx={{ borderBottom: "2px solid #eaeaec", padding: "5px 0" }}
		>
			<Container sx={{ maxWidth: "19000px !important" }}>
				<Stack
					py={1}
					direction={"row"}
					alignItems={"center"}
					justifyContent="space-between"
					width={"100%"}
				>
					<Stack
						direction={"row"}
						alignItems={"center"}
						gap={{ xs: 1, xl: 2 }}
						width={"100%"}
					>
						<Stack direction={"row"} alignItems={"center"} gap={2}>
							<IconButton
								color="default"
								sx={{ borderRadius: "8px", bgcolor: COLORS.gray[50] }}
							>
								<ViewsIcon />
							</IconButton>
							<Typography fontSize={14} color={"gray"} fontWeight={"bold"}>
								View
							</Typography>
						</Stack>
						<Divider flexItem light orientation="vertical" />
						<Stack direction={"row"} alignItems={"center"} gap={1}>
							<IconButton
								color="default"
								sx={{ borderRadius: "8px", bgcolor: COLORS.gray[50] }}
							>
								<FormatListBulleted
									sx={{ height: "18px", width: "18px", color: COLORS.error }}
								/>
							</IconButton>
							<Typography fontSize={14} color={"gray"} fontWeight={"bold"}>
								Table
							</Typography>
							<KeyboardArrowDown
								sx={{ height: "18px", width: "18px", color: COLORS.gray[300] }}
							/>
						</Stack>
						<Divider flexItem light orientation="vertical" />
						<Grid container gap={1.4}>
							<Grid item>
								<Stack
									direction={"row"}
									alignItems={"center"}
									bgcolor={COLORS.success[100]}
									pr={1.5}
									sx={{ borderRadius: "5px" }}
								>
									<IconButton>
										<ColumnIcon />
									</IconButton>
									<Typography fontSize={14} color={"gray"} fontWeight={"bold"}>
										Columns
									</Typography>
								</Stack>
							</Grid>
							<Grid item>
								<Button
									startIcon={<FilterIcon />}
									sx={{ color: "#83828E", textTransform: "capitalize" }}
								>
									Filter
								</Button>
							</Grid>
							<Grid item>
								<Stack
									direction={"row"}
									alignItems="center"
									gap={1}
									bgcolor={COLORS.purple[50]}
									p={0.5}
									sx={{ borderRadius: "5px" }}
								>
									<CropsIcon />
									<Typography>
										Grouped in:{" "}
										<Typography component={"span"} fontWeight={"bold"}>
											Phases
										</Typography>{" "}
									</Typography>
								</Stack>
							</Grid>
							<Grid item>
								<Button
									startIcon={
										<UnfoldMore
											sx={{
												height: "18px",
												width: "18px",
												color: COLORS.gray[300],
											}}
										/>
									}
									sx={{ color: "#83828E", textTransform: "capitalize" }}
								>
									Orders
								</Button>
							</Grid>
							<Grid item>
								<Button
									startIcon={<CookieIcon width={"18"} height="18" />}
									sx={{ color: "#83828E", textTransform: "capitalize" }}
								>
									Colors
								</Button>
							</Grid>
							<Grid item>
								<Button
									startIcon={<HeightIcon />}
									sx={{ color: "#83828E", textTransform: "capitalize" }}
								>
									Colors
								</Button>
							</Grid>
						</Grid>
					</Stack>
					<Grid container justifyContent={"flex-end"} width={"33%"}>
						<Grid item>
							<IconButton color="default" sx={{ borderRadius: "5px" }}>
								<ShoppingBagOutlined
									sx={{ height: "18px", width: "18px", color: COLORS.error }}
								/>
							</IconButton>
						</Grid>
						<Grid item>
							<IconButton color="default" sx={{ borderRadius: "5px" }}>
								<SearchIcon />
							</IconButton>
						</Grid>
						<Grid item>
							<IconButton color="default" sx={{ borderRadius: "5px" }}>
								<FileImportIcon />
							</IconButton>
						</Grid>
						<Grid item>
							<IconButton color="default" sx={{ borderRadius: "5px" }}>
								<FileExportIcon />
							</IconButton>
						</Grid>
						<Grid item>
							<IconButton
								onClick={() => setShowSettingsModal(true)}
								color="default"
								sx={{ borderRadius: "5px" }}
							>
								<Settings />
							</IconButton>
						</Grid>
						<Grid item>
							<Button
								variant="contained"
								color="error"
								startIcon={<AddCircleOutline />}
								sx={{ borderRadius: "8px", marginLeft: "8px" }}
								disableElevation
								onClick={showInfoPanel}
							>
								Add
							</Button>
							{/* info panel */}
							<InfoPanel
								open={open}
								onClose={closeInfoPanel}
								element={infoPanelEL}
							/>
						</Grid>
					</Grid>
				</Stack>
			</Container>
			<SettingsDialog
				open={showSettingsModal}
				onClose={() => setShowSettingsModal(false)}
			/>
		</Paper>
	);
}
