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
