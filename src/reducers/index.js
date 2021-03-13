const reducer = (state, action) => {

    switch(action.type){
        case 'SET_IMPORTANT':
            return {
                ...state,
                Todos: [...state.Todos, action.payload]
            }
        case 'SET_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter((item, index) => index !== action.payload)
            }
        case 'LOGIN_REQUEST':
            return{
                ...state,
                user: action.payload,
            }
        case 'LOGOUT_REQUEST':
            return{
                ...state, 
                user: action.payload,
            }
        default: 
            return state;
    }
    // return state;
}

export default reducer;