



export default function Redusers ( state={}, action ) {
    switch (action.type) {
        case "signIn":
            return { ...state, loginSuccess: action.payload}
        case "signUp":
            return { ...state, registerSuccess: action.payload}
            
           
    
        default:
            return state
    }
}