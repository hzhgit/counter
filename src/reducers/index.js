const action = require("../action");

const initState = 0;
const reducer = (state = initState, action) => {
    console.log("reducer",state,action);
    switch (action.type){
        case "send_type":
            return Object.assign({},state,action);
        default:
            return state;
    }
}

export default reducer;