import {
	Box,
	Button,
	Checkbox,
	Dialog,
	IconButton,
	MenuItem,
	Stack,
	Tab,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	tableCellClasses,
} from "@mui/material";
import React from "react";
import { CustomTabPanel, CustomTabs } from "./CustomTab";
import {
	AddCircleOutline,
	FileUploadOutlined,
	InfoOutlined,
	ListOutlined,
	SellOutlined,
	SettingsOutlined,
	SmartToyOutlined,
	SubdirectoryArrowRightOutlined,
	SwapHorizOutlined,
	ViewColumn,
	ViewColumnOutlined,
} from "@mui/icons-material";
import BoardIcon from "../../components/icons/BoardIcon";
import FolderCameraIcon from "../../components/icons/FolderCameraIcon";
import UsersIcon from "../../components/icons/UsersIcon";
import { COLORS } from "../../config/theme";
import { CustomTextField } from "../../components/CustomTextField";
import SearchIcon from "../../components/icons/SearchIcon";
import styled from "@emotion/styled";
import TrashIcon from "../../components/icons/TrashIcon";

function a11yProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
}

const tabStyle = { flexDirection: "row", alignItems: "center", gap: 1 };

export default function SettingsDialog({ open, onClose }: ModalProps) {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Dialog open={open} onClose={onClose} fullWidth maxWidth="xl">
			<Box
				sx={{
					flexGrow: 1,
					display: "flex",
					p: 3,
					height: "100%",
				}}
			>
				<Box
					width={"230px"}
					sx={{ borderRight: 1, borderRightColor: "#EAEAEC" }}
				>
					<CustomTabs onChange={handleChange} value={value}>
						<Tab
							label="Startform"
							icon={<ListOutlined sx={{ width: "20px" }} />}
							sx={tabStyle}
						/>
						<Tab
							label="Fasi"
							sx={tabStyle}
							icon={<SubdirectoryArrowRightOutlined sx={{ width: "20px" }} />}
							{...a11yProps(1)}
						/>
						<Tab
							label="Tabella"
							sx={tabStyle}
							icon={<ViewColumnOutlined sx={{ width: "20px" }} />}
							{...a11yProps(2)}
						/>
						<Tab
							label="Card"
							sx={tabStyle}
							icon={
								<BoardIcon width="20" height="20" fill={COLORS.gray[300]} />
							}
							{...a11yProps(3)}
						/>
						<Tab
							label="Lables"
							sx={tabStyle}
							icon={<SellOutlined sx={{ width: "20px" }} />}
							{...a11yProps(4)}
						/>
						<Tab
							label="Campi condizionali"
							sx={tabStyle}
							icon={<FolderCameraIcon width="20" height="20" />}
							{...a11yProps(5)}
						/>
						<Tab
							label="Automazioni"
							sx={tabStyle}
							icon={<SmartToyOutlined sx={{ width: "20px" }} />}
							{...a11yProps(6)}
						/>
						<Tab
							label="Connessioni"
							sx={tabStyle}
							icon={<SwapHorizOutlined sx={{ width: "20px" }} />}
							{...a11yProps(7)}
						/>
						<Tab
							label="Membri"
							sx={tabStyle}
							icon={
								<UsersIcon width="20" height="20" fill={COLORS.gray[300]} />
							}
							{...a11yProps(8)}
						/>
						<Tab
							label="Esportazione"
							sx={tabStyle}
							icon={<FileUploadOutlined sx={{ width: "20px" }} />}
							{...a11yProps(9)}
						/>
						<Tab
							label="Generali"
							sx={tabStyle}
							icon={<SettingsOutlined sx={{ width: "20px" }} />}
							{...a11yProps(10)}
						/>
					</CustomTabs>
				</Box>
				<CustomTabPanel value={value} index={0}>
					Item One
				</CustomTabPanel>
				<CustomTabPanel value={value} index={1}>
					<></>
				</CustomTabPanel>
				<CustomTabPanel value={value} index={2}>
					Item Three
				</CustomTabPanel>
				<CustomTabPanel value={value} index={3}>
					Item Four
				</CustomTabPanel>
				<CustomTabPanel value={value} index={4}>
					Item Five
				</CustomTabPanel>
				<CustomTabPanel value={value} index={5}>
					Item Six
				</CustomTabPanel>
				<CustomTabPanel value={value} index={6}>
					Item Seven
				</CustomTabPanel>
				<CustomTabPanel value={value} index={7}>
					Item Eight
				</CustomTabPanel>
				<CustomTabPanel value={value} index={8}>
					<MembersContent />
				</CustomTabPanel>
				<CustomTabPanel value={value} index={9}>
					Item Ten
				</CustomTabPanel>
				<CustomTabPanel value={value} index={11}>
					Item Eleven
				</CustomTabPanel>
			</Box>
		</Dialog>
	);
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: COLORS.gray[50],
		color: COLORS.primary,
		fontWeight: "bold",
		padding: "2px",

		alignItems: "center",
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

function MembersContent() {
	return (
		<Box px={4}>
			<Stack
				mb={3}
				direction="row"
				alignItems="center"
				justifyContent="space-between"
			>
				<CustomTextField
					InputProps={{
						startAdornment: <SearchIcon />,
					}}
					placeholder="Cerca utente"
					size="small"
				/>
				<Typography width={"60%"} fontWeight="bold">
					Membri
				</Typography>
				<Button
					variant="contained"
					color="error"
					startIcon={<AddCircleOutline />}
					sx={{ borderRadius: "8px", marginLeft: "8px" }}
					disableElevation
				>
					Add
				</Button>
			</Stack>
			<TableContainer>
				<Table size="small">
					<TableHead>
						<TableRow>
							<StyledTableCell>
								<Stack direction={"row"} alignItems={"center"} gap={1}>
									<Checkbox size="small" color="error" /> Utente
								</Stack>
							</StyledTableCell>
							<StyledTableCell>Email</StyledTableCell>
							<StyledTableCell>
								<Stack direction={"row"} alignItems={"center"} gap={1}>
									Permessi
									<InfoOutlined sx={{ color: "#9897A1", width: 20 }} />
								</Stack>
							</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>
								<Stack direction={"row"} alignItems={"center"} gap={1}>
									<Checkbox
										color="error"
										sx={{
											"&.Mui-checked": {
												color: COLORS.error,
												// bgcolor: "white",
											},
										}}
										size="small"
									/>{" "}
									Michele Cimmino
								</Stack>
							</TableCell>
							<TableCell>michele.cimmino@lastingdynamics.com</TableCell>
							<TableCell>
								<Stack
									alignItems={"center"}
									justifyContent={"space-between"}
									direction={"row"}
								>
									<CustomTextField
										variant="filled"
										color="error"
										size="small"
										select
										sx={{
											bgcolor: COLORS.error,
											border: 0,
											width: "50%",
											height: "30px",
											"&:focus": { border: 0 },
											borderRadius: "30px",
										}}
										InputProps={{
											sx: {
												color: "white",
												bgcolor: "transparent",

												"&:before": { border: 0 },
												".MuiSelect-select": {
													paddingTop: 0.3,
													border: 0,
												},
											},
										}}
										defaultValue={"admin"}
									>
										<MenuItem value="admin">Admin</MenuItem>
										<MenuItem value="utente">Utente</MenuItem>
										<MenuItem value="venditore">Venditore</MenuItem>
									</CustomTextField>
									<IconButton sx={{ borderRadius: "8px" }}>
										<TrashIcon />
									</IconButton>
								</Stack>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
}
