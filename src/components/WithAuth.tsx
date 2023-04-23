import { ComponentType, useEffect } from "react";
import { RouteType } from "../config/constants";
import { useAuth } from "../context/Auth";
import { getToken, removeToken } from "../helpers/general";
import apiService from "../services/api.service";
import { useNavigate } from "react-router-dom";
import PageLoader from "./PageLoader";

export default function WithAuth<T>(
	WrappedComponent: ComponentType<T>,
	route: RouteType
) {
	const isAuthRoute = route === RouteType.AUTH;
	const isGuestRoute = route === RouteType.GUEST;

	const getCurrentUser = async (token?: string) => {
		const data = await apiService.MakeGetRequest("/api/users/me", token);
		return data;
	};

	return (hocProps: T) => {
		const { isAuthenticated, isLoading, setUser, user, logout } = useAuth();
		const navigate = useNavigate();

		useEffect(() => {
			(async () => {
				try {
					const token = getToken("corely");
					if (!isAuthenticated) {
						const data = await getCurrentUser(token);
						setUser(data);
					}
				} catch {
					console.log("ERROR");
					if (isAuthenticated || isLoading) {
						logout();
						navigate("/");
					} else {
						removeToken("corely");
					}
				} finally {
					if (isGuestRoute && isAuthenticated && !isLoading) {
						navigate("/board");
					}
					if (isAuthRoute && !isAuthenticated && !isLoading) {
						navigate("/");
					}
				}
			})();
		}, [isAuthenticated, isLoading]);
		const isAuthRouteLoading = !isAuthenticated && isAuthRoute;
		const isGuestRouteLoading = isAuthenticated && isGuestRoute;

		return isLoading || isAuthRouteLoading || isGuestRouteLoading ? (
			<PageLoader />
		) : (
			<WrappedComponent {...hocProps} />
		);
	};
}
