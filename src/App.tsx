import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SignUpProvider from "./context/SignupContext";
import SnackBarProvider from "./context/Snackbar";
import AuthProvider from "./context/Auth";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<SnackBarProvider>
				<SignUpProvider>
					<AuthProvider>
						<RouterProvider router={router} />
					</AuthProvider>
				</SignUpProvider>
			</SnackBarProvider>
		</QueryClientProvider>
	);
}

export default App;
