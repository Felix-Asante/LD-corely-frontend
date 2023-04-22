import {
	AddCircleOutline,
	AssistantOutlined,
	AttachFileOutlined,
	CalendarTodayOutlined,
	CenterFocusWeakOutlined,
	ExpandMore,
	FormatLineSpacingOutlined,
	InsertLinkOutlined,
	ListOutlined,
	ShoppingBagOutlined,
	VisibilityOutlined,
} from "@mui/icons-material";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Avatar,
	Box,
	Button,
	Chip,
	Dialog,
	Divider,
	FormControl,
	FormControlLabel,
	FormHelperText,
	FormLabel,
	Grid,
	IconButton,
	MenuItem,
	Popover,
	Radio,
	RadioGroup,
	Stack,
	Tab,
	Tabs,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import { COLORS } from "../../config/theme";
import MinusPath from "../../components/icons/MinusPath";
import FolderCameraIcon from "../../components/icons/FolderCameraIcon";
import TrashIcon from "../../components/icons/TrashIcon";
import { CustomTextField } from "../../components/CustomTextField";
import PhaseForward from "../../components/icons/PhaseForward";
import StorageIcon from "../../components/icons/StorageIcon";
import DocumentIcon from "../../components/icons/DocumentIcon";
import StartArrowIcon from "../../components/icons/StartArrowIcon";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs from "dayjs";
import UserIcon from "../../components/icons/UserIcon";
import { CustomTabPanel, CustomTabs } from "./CustomTab";

const iconButtonStyle = {
	borderRadius: "8px",
	padding: "4px",
};
export default function TaskDialog({ open, onClose }: ModalProps) {
	return (
		<Dialog onClose={onClose} open={open} fullWidth maxWidth="xl">
			<Box p={2}>
				<Grid container alignItems={"center"} justifyContent={"space-between"}>
					<Grid item>
						<Typography variant="h6">Courtney@mail.com</Typography>
					</Grid>
					<Grid item>
						<Stack direction="row" alignItems="center" gap={2}>
							<Button
								color="error"
								sx={{
									textTransform: "capitalize",
									textDecoration: "underline",
								}}
								startIcon={<VisibilityOutlined sx={{ color: COLORS.error }} />}
							>
								KO Motivation
							</Button>
							<Stack direction="row" alignItems={"center"} gap={0.5}>
								<IconButton sx={iconButtonStyle}>
									<FolderCameraIcon />
								</IconButton>
								<IconButton sx={iconButtonStyle}>
									<CenterFocusWeakOutlined sx={{ color: "#9897A1" }} />
								</IconButton>
								<IconButton sx={iconButtonStyle}>
									<InsertLinkOutlined sx={{ color: "#9897A1" }} />
								</IconButton>
								<IconButton sx={iconButtonStyle}>
									<MinusPath />
								</IconButton>
								<IconButton sx={iconButtonStyle}>
									<TrashIcon />
								</IconButton>
							</Stack>
						</Stack>
					</Grid>
				</Grid>
				<Grid container mt={3} gap={2}>
					<Grid item width={"50%"}>
						<LeftContent />
					</Grid>
					<Grid item flex={1}>
						<RightContent />
					</Grid>
				</Grid>
				<Grid container mt={3} width={"100%"}>
					<Grid item width="85%">
						<Typography fontWeight={"bold"} component="span">
							Face ID:{" "}
						</Typography>
						<Typography color="grey" fontSize={14} component="span">
							61571535e7058c00143322b8
						</Typography>
					</Grid>
					<Grid item>
						<Stack direction="row" alignItems={"center"} gap={1}>
							<Button
								variant="outlined"
								size="small"
								sx={{ borderRadius: "5.5px" }}
								disableElevation
							>
								Annulla
							</Button>
							<Button
								variant="contained"
								size="small"
								color="secondary"
								disableElevation
								sx={{ color: "#ffff", borderRadius: "5.5px" }}
							>
								Salva
							</Button>
						</Stack>
					</Grid>
				</Grid>
			</Box>
		</Dialog>
	);
}

function LeftContent() {
	const [dateAnchorEl, setDateAnchorEl] = useState<HTMLElement | null>(null);
	const open = Boolean(dateAnchorEl);

	const handleDateClose = () => {
		setDateAnchorEl(null);
	};
	return (
		<Box
			component={"aside"}
			height={"100%"}
			sx={{ overflowY: "scroll", paddingRight: "30px" }}
		>
			<Grid container alignItems={"center"} justifyContent={"space-between"}>
				<Grid item>
					<Stack direction="row" alignItems={"center"} gap={0.7}>
						{["PL", "CM", "FN", "LM", "ST"].map((x) => (
							<Avatar
								sizes="small"
								sx={{
									bgcolor: COLORS.primary,
									width: "25px",
									height: "25px",
									fontSize: "11px",
								}}
							>
								{x}
							</Avatar>
						))}
						<Typography fontSize={11}>+5</Typography>
						<IconButton color="error" sx={iconButtonStyle}>
							<AddCircleOutline sx={{ color: COLORS.error }} />
						</IconButton>
					</Stack>
				</Grid>
				<Grid item>
					<CustomTextField
						select
						name="chapter"
						defaultValue={"Chapter One"}
						size="small"
						InputProps={{ startAdornment: <PhaseForward /> }}
						variant="standard"
						sx={{ ".MuiInput-root:before": { border: 0 } }}
					>
						<MenuItem value="Chapter One">Chapter One</MenuItem>
						<MenuItem value="Chapter Two">Chapter Two</MenuItem>
					</CustomTextField>
				</Grid>
				<Grid item>
					<Button
						onClick={(event) => setDateAnchorEl(event.currentTarget)}
						startIcon={<CalendarTodayOutlined />}
						sx={{ color: COLORS.neutral[70] }}
					>
						05/10/21 -17:50
					</Button>
				</Grid>
			</Grid>
			<Popover
				id={open ? "simple-popover" : undefined}
				open={open}
				anchorEl={dateAnchorEl}
				onClose={handleDateClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
			>
				<StaticDatePicker
					defaultValue={dayjs(new Date().toLocaleDateString())}
				/>
			</Popover>
			<Grid container alignItems={"center"} gap={1}>
				<Grid item>
					<Stack alignItems={"center"} direction="row" gap={1}>
						<Chip
							size="small"
							label="Label 1"
							sx={{ bgcolor: "#47BDFF", color: "white" }}
						/>
						<Chip
							size="small"
							label="Label 2"
							sx={{ bgcolor: "#E547FF", color: "white" }}
						/>
						<Chip
							size="small"
							label="Label 3"
							sx={{ bgcolor: "#FF9F47", color: "white" }}
						/>
					</Stack>
				</Grid>
				<Grid item>
					<IconButton color="error" sx={iconButtonStyle}>
						<AddCircleOutline sx={{ color: COLORS.error }} />
					</IconButton>
				</Grid>
			</Grid>
			<Stack
				direction="row"
				alignItems={"center"}
				justifyContent="space-between"
				pb={1}
				mt={1}
			>
				<CustomTextField
					select
					name="vendors"
					defaultValue={"Select Vendor"}
					size="small"
					InputProps={{ startAdornment: <UserIcon /> }}
					variant="standard"
					sx={{ width: "30%", ".MuiInput-root:before": { border: 0 } }}
				>
					<MenuItem value="Vendor 1">Vendor 1</MenuItem>
					<MenuItem value="Vendor 2">Vendor 2</MenuItem>
				</CustomTextField>
				<Divider orientation="vertical" flexItem />
				<Stack direction="row" gap={1}>
					<Chip
						size="small"
						label="#database_object_1"
						icon={<StorageIcon fill="black" width={"15"} />}
						sx={{ paddingLeft: "10px" }}
					/>
					<Chip
						size="small"
						label="#db_object1"
						icon={<StorageIcon fill="black" width={"15"} />}
						sx={{ paddingLeft: "10px" }}
					/>
				</Stack>
			</Stack>
			<Divider />
			<Box my={2.5}>
				<Typography fontWeight={"bold"}>Startform Name</Typography>
				<Stack gap={2} mt={1.5}>
					<CustomTextField name="email" label="Email" size="small" />
					<FormControl>
						<CustomTextField
							name="description"
							label="Description test"
							size="small"
							multiline
						/>
						<FormHelperText>This is a description</FormHelperText>
					</FormControl>
				</Stack>
			</Box>
			<Box mb={2.5}>
				<Typography fontWeight={"bold"}>Company data</Typography>
				<Grid container gap={2} mt={2}>
					<Grid item>
						<Stack alignItems={"center"} gap={0.5}>
							<DocumentIcon fill="#9897A1" />
							<Box
								sx={{
									height: "170px",
									width: "1px",
									bgcolor: COLORS.gray.main,
								}}
							/>
						</Stack>
					</Grid>
					<Grid item flex={1}>
						<Stack gap={2} mt={1.5}>
							<CustomTextField
								name="company"
								label="Company name"
								size="small"
								fullWidth
							/>
							<CustomTextField
								fullWidth
								name="surname"
								label="Surname"
								size="small"
							/>
							<FormControl>
								<RadioGroup
									defaultValue="Person"
									name="radio-buttons-group"
									color="error"
								>
									<FormControlLabel
										value="company"
										control={<Radio color="error" />}
										label="Company"
									/>
									<FormControlLabel
										value="person"
										control={<Radio color="error" />}
										label="Person"
									/>
								</RadioGroup>
							</FormControl>
						</Stack>
					</Grid>
				</Grid>
			</Box>
			<FormControl>
				<Typography fontWeight={"bold"} mb={1}>
					Gender
				</Typography>
				<RadioGroup defaultValue="female" name="radio-buttons-group">
					<FormControlLabel
						value="female"
						control={<Radio color="error" />}
						label="Female"
					/>
					<FormControlLabel
						value="male"
						control={<Radio color="error" />}
						label="Male"
					/>
					<FormControlLabel
						value="other"
						control={<Radio color="error" />}
						label="Not declared"
					/>
				</RadioGroup>
			</FormControl>
		</Box>
	);
}

const accordionSummaryStyle = {
	bgcolor: COLORS.gray[50],
	borderRadius: "8px",
	padding: "1px 10px",
};
const accordionStyle = {
	boxShadow: 0,
	border: 0,
	marginBottom: "20px",
	"&::before": {
		display: "none",
	},
};
function RightContent() {
	return (
		<Box pl={1}>
			<Typography variant="h6" mb={1}>
				Fields&apos; Phase
			</Typography>
			<RightContentTabs />
		</Box>
	);
}

function a11yProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
}

function RightContentTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box
			sx={{
				flexGrow: 1,
				display: "flex",
				flexDirection: "row-reverse",

				height: "100%",
			}}
		>
			<CustomTabs onChange={handleChange} value={value}>
				<Tab icon={<ShoppingBagOutlined />} />
				<Tab icon={<FormatLineSpacingOutlined />} {...a11yProps(1)} />
				<Tab icon={<AssistantOutlined />} {...a11yProps(2)} />
				<Tab icon={<AttachFileOutlined />} {...a11yProps(3)} />
				<Tab icon={<InsertLinkOutlined />} {...a11yProps(4)} />
				<Tab label={<ListOutlined />} {...a11yProps(5)} />
			</CustomTabs>
			<CustomTabPanel value={value} index={0}>
				Item One
			</CustomTabPanel>
			<CustomTabPanel value={value} index={1}>
				<>
					<Accordion sx={accordionStyle}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							sx={accordionSummaryStyle}
						>
							<Grid
								container
								justifyContent={"space-between"}
								alignItems="center"
							>
								<Grid item>
									<Stack direction="row" alignItems="center" gap={1}>
										<PhaseForward />
										<Typography fontWeight={"bold"} variant={"h6"}>
											Phase 2
										</Typography>
									</Stack>
								</Grid>
								<Grid item>
									<Chip color="error" size="small" label="Ready" />
								</Grid>
							</Grid>
						</AccordionSummary>
						<AccordionDetails>
							<Stack gap={2} mt={1}>
								<CustomTextField
									name="contract_number"
									size="small"
									label="Contract number"
									fullWidth
								/>
								<CustomTextField
									fullWidth
									name="contract_number2"
									size="small"
									label="Contract number 2"
								/>
							</Stack>
						</AccordionDetails>
					</Accordion>

					<Accordion sx={accordionStyle}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							sx={accordionSummaryStyle}
						>
							<Stack direction="row" alignItems="center" gap={1}>
								<PhaseForward />
								<Typography fontWeight={"bold"} variant={"h6"}>
									New Contract
								</Typography>
							</Stack>
						</AccordionSummary>
						<AccordionDetails>
							<CustomTextField
								name="start_date"
								size="small"
								label="Start date"
								fullWidth
								margin="normal"
							/>
						</AccordionDetails>
					</Accordion>
					<Accordion sx={accordionStyle}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							sx={accordionSummaryStyle}
						>
							<Stack direction="row" alignItems="center" gap={1}>
								<StartArrowIcon />
								<Typography fontWeight={"bold"} variant={"h6"}>
									Start
								</Typography>
							</Stack>
						</AccordionSummary>
						<AccordionDetails>
							<CustomTextField
								name="start_date"
								size="small"
								label="Start date"
								fullWidth
								margin="normal"
							/>
						</AccordionDetails>
					</Accordion>
				</>
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
		</Box>
	);
}
