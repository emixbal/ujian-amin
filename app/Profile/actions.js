import axios from 'axios'

const getProfiles = () => {
	const url = 'https://api.backendless.com/14EC76DC-DCCE-ECDC-FF43-FF5081D9CD00/FD3AD74C-BFF9-2789-FFED-161F7BB99A00/data/profiles'

	return{
		type: 'ALL_PROFILES',
		payload: axios({
			method:'get',
			url
		})
	}
}

export {getProfiles}