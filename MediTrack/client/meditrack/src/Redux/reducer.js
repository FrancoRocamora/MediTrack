import {
  GET_ALL_FILES
} from "./actions";

const initialState = {
  allFiles: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) { 
        case GET_ALL_FILES: 
        return {
            ...state,
            allFiles : [...action.payload]
        }
        default: return
    }
}

export default rootReducer