import { createTheme } from "@mui/material/styles";

export const COLORS = {
	primary: "#04385A",
	secondary: "#2CCFBC",
	error: "#F93E6C",
	gray: {
		main: "#EAEAEC",
		50: "#F6F8FA",
		100: "#C1C0C7",
		300: "#83828E",
	},
	neutral: {
		70: "#6F6D7B",
		80: "#5A5869",
	},
	success: {
		100: "#47ff9133",
	},
	purple: {
		50: "#6c47ff33",
	},
};
// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: COLORS.primary,
		},
		secondary: {
			main: COLORS.secondary,
		},
		error: {
			main: COLORS.error,
		},
		neutral: {
			main: "#C1C0C7",
		},
	},
});

declare module "@mui/material/styles" {
	interface Palette {
		neutral: Palette["primary"];
	}

	interface PaletteOptions {
		neutral: PaletteOptions["primary"];
	}
}

export default theme;
