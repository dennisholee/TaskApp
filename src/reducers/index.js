const initialState = {
  description: '',
};

const rootReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case "description_change":
      console.log(" Recieved: " + action.type )
      return { description: action.description }
    default:
      return state
  }
};

export default rootReducer;
