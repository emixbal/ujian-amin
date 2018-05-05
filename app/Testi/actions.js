import axios from 'axios';

const allTesti = () => {
	const uri = 'https://api.backendless.com/14EC76DC-DCCE-ECDC-FF43-FF5081D9CD00/FD3AD74C-BFF9-2789-FFED-161F7BB99A00/data/sampe?sortBy=created%20desc'

	return {
		type: "ALL_TESTI",
		payload: axios({
			method: 'get',
			headers: {
				'Content-Type': 'application/json',
			},
			url: uri
		})
	}

}

const updateTesti = (value) => {
	return{
		type: "UPDATE_TESTI",
		payload: axios({
			method: 'post',
			url: 'https://api.backendless.com/14EC76DC-DCCE-ECDC-FF43-FF5081D9CD00/FD3AD74C-BFF9-2789-FFED-161F7BB99A00/data/sampe',
			data: value
		})
	}
}

const deleteTesti = (objectId) => {
	return{
		type: "DELETE_TESTI",
		payload: axios({
			method: 'delete',
			url: 'https://api.backendless.com/14EC76DC-DCCE-ECDC-FF43-FF5081D9CD00/FD3AD74C-BFF9-2789-FFED-161F7BB99A00/data/sampe/'+objectId,
		})
	}
}

export {
	allTesti,
	updateTesti,
	deleteTesti
}
