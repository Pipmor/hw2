import { createStore } from "redux";

const initialState = {
    name: "",
    age: 0,
    gender: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
