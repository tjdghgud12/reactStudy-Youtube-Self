



export default function Redusers ( state={}, action ) {
    switch (action.type) {
        case "loginUser":
            return { ...state, loginSuccess: action.payload}
        case "registerUser":
            return { ...state, registerSuccess: action.payload}
            
           
    
        default:
            return state
    }
}