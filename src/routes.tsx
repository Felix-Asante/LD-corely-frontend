import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "./Pages/Login";
import StepOne from "./Pages/Signup/StepOne";
import StepTwo from "./Pages/Signup/StepTwo";
import EmailSent from "./Pages/Signup/EmailSent";
import ResetEmailSent from "./Pages/resetPassword/ResetEmailSent";
import ResetPassword from "./Pages/resetPassword";
import ConfirmPassword from "./Pages/resetPassword/ConfirmPassword";
import Board from "./Pages/Board";
import ProcessDetails from "./Pages/Board/ProcessDetails";
import NotFound from "./Pages/404";
import SignUp from "./Pages/Signup";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "signup",
		element: <SignUp />,
	},
	{
		path: "reset-password",
		children: [
			{ path: "", element: <ResetPassword /> },
			{
				path: "change-password",
				element: <ConfirmPassword />,
				loader: ({ request }) => {
					const url = new URL(request.url);
					const code = url.searchParams.get("code");
					if (!code) return redirect("/");
					return { code };
				},
			},
		],
	},
	{
		path: "board",
		element: <Board />,
	},
	{
		path: "board/process/:slug",
		element: <ProcessDetails />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);
