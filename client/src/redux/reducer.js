import { ADD, DELETE, EDIT, GET } from "./types";


const initialSatate ={
    users: [],
    loading: true
}

const reducer = (state= initialSatate, {type,payload})=>{
    switch (type) {
        case GET:
            return{
                ...state, loading:false,
                users:payload
            }
        case ADD:
            return {
                ...state, loading:false,
                users:[...state.users, payload]
            }
        case DELETE:
            return{
                ...state, loading:false,
                users: state.users.filter(elt => elt._id !== payload.id)
            }
        case EDIT:
            return {
                ...state, loading:false,
                users: state.users.map(elt => elt._id === payload.id ? {...elt, ...payload}: elt)
            }
            
      
    
        default:
            return state
    }
}

export default reducer