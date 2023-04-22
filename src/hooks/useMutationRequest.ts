import { useMutation } from "@tanstack/react-query";
import apiService from "../services/api.service";

export function useMutationRequest(url: string, isFormData = false) {
	const token = "";

	const postMutation = useMutation((data: unknown) => {
		return apiService.MakePostRequest(url, data, token, isFormData);
	});
	const putMutation = useMutation((data: unknown) => {
		return apiService.MakePutRequest(url, data, token, isFormData);
	});

	return {
		creating: postMutation.isLoading,
		updating: putMutation.isLoading,
		postMutation,
		putMutation,
	};
}
