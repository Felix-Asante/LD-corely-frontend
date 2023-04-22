import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SignUpProvider from "./context/SignupContext";
import SnackBarProvider from "./context/Snackbar";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<SnackBarProvider>
				<SignUpProvider>
					<RouterProvider router={router} />
				</SignUpProvider>
			</SnackBarProvider>
		</QueryClientProvider>
	);
}

export default App;
