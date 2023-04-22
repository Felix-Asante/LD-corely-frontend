import { ReactNode, useContext } from "react";
import { createContext } from "react";

import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

type Toast = {
	message: string;
	show: boolean;
	type: "error" | "success" | "warning";
};

interface ContextType {
	toastSuccess: (message: string) => void;
	toastError: (message: string) => void;
}

const SnackBarContext = createContext<ContextType>({
	toastSuccess: () => {},
	toastError: () => {},
});

export function useSnackbar() {
	return useContext(SnackBarContext);
}

interface Props {
	children: ReactNode;
}
export default function SnackBarProvider({ children }: Props) {
	const [toast, setToast] = useState<Toast>({
		message: "",
		show: false,
		type: "success",
	});

	const handleClose = () => {
		setToast((t) => ({ ...t, show: false }));
	};

	const toastSuccess = (message: string) => {
		setToast({ type: "success", message, show: true });
	};
	const toastError = (message: string) => {
		setToast({ type: "error", message, show: true });
	};

	return (
		<SnackBarContext.Provider value={{ toastError, toastSuccess }}>
			<>
				{children}

				<Snackbar
					open={toast.show}
					autoHideDuration={6000}
					onClose={handleClose}
				>
					<Alert
						onClose={handleClose}
						severity={toast.type}
						sx={{ width: "100%" }}
					>
						{toast.message}
					</Alert>
				</Snackbar>
			</>
		</SnackBarContext.Provider>
	);
}
