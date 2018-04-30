const initialState = {
	testi: [],
	isLoading: false,
	isError: false
}

const testiReducer = ( state = initialState, action) => {
	switch(action.type){
		case "ALL_TESTI_PENDING":
			return {...state, isLoading: true}
		case "ALL_TESTI_FULFILLED":
			return {...state, isLoading: false, testi: action.payload.data};
		case "ALL_TESTI_REJECTED":
			return {...state, isLoading: false, isError: true};
		default:
			return state
	}
}

export default testiReducer;
