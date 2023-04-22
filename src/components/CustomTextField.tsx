import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { COLORS } from "../config/theme";

export const CustomTextField = styled(TextField)({
	"& label.Mui-focused": {
		borderColor: COLORS.gray[100],
		color: COLORS.neutral[80],
	},
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: COLORS.gray[100],
		},
		"&:hover fieldset": {
			borderColor: COLORS.gray[100],
		},
		"&.Mui-focused fieldset": {
			borderColor: COLORS.gray[100],
		},
	},
});
