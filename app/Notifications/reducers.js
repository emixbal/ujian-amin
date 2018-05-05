const initialState = {
	notifications: [],
	isLoading: false,
  	isError: false
}

const notifReducer = ( state = initialState, action ) => {
  switch(action.type){
    case "ALL_NOTIFICATION_PENDING":
      return { ...state, isLoading: true }
    case 'ALL_NOTIFICATION_FULFILLED':
      return { ...state, isLoading: false, notifications: action.payload.data };
    case 'ALL_NOTIFICATION_REJECTED':
      return { ...state, isLoading: false, isError: true};
    default:
      return state;
  }
}

export default notifReducer;