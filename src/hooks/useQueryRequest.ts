import { useQuery } from "@tanstack/react-query";
import apiService from "../services/api.service";

export function useQueryRequest(cacheName: string, url: string) {
	const { data, isLoading } = useQuery(
		[cacheName],
		() => {
			return apiService.MakeGetRequest(url);
		},
		{ keepPreviousData: true }
	);

	return { data, isLoading };
}
