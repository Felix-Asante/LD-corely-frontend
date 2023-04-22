import axios from "axios";

const getApiUrl = () => import.meta.env.VITE_APP_API_URL;

class ApiService {
	baseUrl;
	constructor() {
		this.baseUrl = getApiUrl();
	}

	headers(token: string) {
		return {
			headers: {
				Authorization: `Bearer ${token ? token : ""}`,
			},
		};
	}
	formHeaders(token: string) {
		return {
			headers: {
				Authorization: `Bearer ${token ? token : ""}`,
				"Content-Type": "multipart/form-data",
			},
		};
	}
	async MakeGetRequest(url: string, token = "") {
		const endpoint = this.baseUrl + url;

		const { data } = await axios.get(endpoint, this.headers(token));
		return data;
	}
	async MakePostRequest(
		url: string,
		postData: unknown,
		token = "",
		isFormData = false
	) {
		const endpoint = this.baseUrl + url;
		if (!isFormData) {
			const { data } = await axios.post(
				endpoint,
				postData,
				this.headers(token)
			);
			return data;
		}
		const { data } = await axios.post(
			endpoint,
			postData,
			this.formHeaders(token)
		);
		return data;
	}
	async MakePutRequest(
		url: string,
		putData: unknown,
		token = "",
		isFormData = false
	) {
		const endpoint = this.baseUrl + url;
		if (!isFormData) {
			const { data } = await axios.put(endpoint, putData, this.headers(token));
			return data;
		}
		const { data } = await axios.put(
			endpoint,
			putData,
			this.formHeaders(token)
		);
		return data;
	}
	async MakeDeleteRequest(url: string, token = "") {
		const endpoint = this.baseUrl + url;
		const { data } = await axios.delete(endpoint, this.headers(token));
		return data;
	}
	async MakePatchRequest(url: string, patchData: unknown, token = "") {
		const endpoint = this.baseUrl + url;
		const { data } = await axios.patch(
			endpoint,
			patchData,
			this.headers(token)
		);
		return data;
	}
}

export default new ApiService();
