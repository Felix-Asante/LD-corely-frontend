import Cookies from "js-cookie";

export const formatResponseError = (error: any) => {
	const apiError = error?.response?.data?.error?.message;
	const errorStatus = error?.response?.data?.error?.status;

	if (!error?.response) {
		return "Network error";
	}
	switch (apiError) {
		case typeof apiError === "object":
			return "Operation Failed";
		default:
			return String(apiError);
	}
};

export const getToken = (name: string) => {
	const token = Cookies.get(name);
	return token;
};

export const setToken = (name: string, value: string) => {
	Cookies.set(name, value);
};

export const removeToken = (name: string) => {
	Cookies.remove(name);
};
