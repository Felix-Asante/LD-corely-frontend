import {
	Avatar,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { COLORS } from "../../config/theme";
import TaskDialog from "./TaskDialog";

const TableData = [
	{
		code: "VOD-153",
		owner: "Theresa Webb",
		phone: "+39 065262123",
		reference: "IT069823456",
		user: "Alessandro Durni",
	},
	{
		code: "VOD-113",
		owner: "Marvin Mckinney",
		phone: "+39 065269143",
		reference: "IT069823458",
		user: "Guiseppe Avagliano",
	},
	{
		code: "VOD-253",
		owner: "Wade Warren",
		phone: "+39 065262834",
		reference: "IT069823436",
		user: "Marina Accardo",
	},
];

const borderStyles = { borderRight: `2px solid ${COLORS.gray.main}` };

export default function ProcessDetailsTable() {
	const [showTaskDialog, setShowTaskDialog] = useState(false);
	return (
		<TableContainer sx={{ maxWidth: "98%" }}>
			<Table aria-label="process-details-table" size="small">
				<TableBody>
					{TableData?.map((row, index) => (
						<TableRow key={index}>
							<TableCell
								component={"th"}
								scope="row"
								sx={borderStyles}
							></TableCell>
							<TableCell
								sx={{ cursor: "pointer", ...borderStyles }}
								onClick={() => setShowTaskDialog(true)}
							>
								{row.code}
							</TableCell>
							<TableCell sx={borderStyles}>{row.owner}</TableCell>
							<TableCell sx={borderStyles}>{row.phone}</TableCell>
							<TableCell sx={borderStyles}>
								<Stack direction={"row"} alignItems={"center"} gap={1}>
									<Avatar
										sizes="small"
										sx={{
											bgcolor: "#04385A",
											width: "30px",
											height: "30px",
											fontSize: "14px",
										}}
									>
										PL
									</Avatar>
									{row.user}
								</Stack>
							</TableCell>
							<TableCell sx={borderStyles}>{row.reference}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<TaskDialog
				open={showTaskDialog}
				onClose={() => setShowTaskDialog(false)}
			/>
		</TableContainer>
	);
}
