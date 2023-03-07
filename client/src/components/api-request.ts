export const ApiRequest = async (params: string[] | string) => {
	const url = process.env.REACT_APP_API;
	const apiKey = process.env.REACT_APP_API_KEY;
	if (!url || !apiKey) {
		throw Error('Credentials are missing');
	}
	const urlRequest = !Array.isArray(params) ? `${url}${params}` : `${url}${params[0]}/${params[1]}/${params[2]}`;

	const response = await fetch(urlRequest, {
		method: 'GET',
		headers: {
			'x-api-key': `${apiKey}`,
		},
	}).then((data) => data.json());

	if (response.statusCode === 401) {
		throw Error('Unauthorized');
	}

	if (response.statusCode === 404 || response.message === 'Not Found') {
		throw Error('Not Found');
	}
	if (response.statusCode === 500) {
		throw Error('no response');
	}

	return response;
};
