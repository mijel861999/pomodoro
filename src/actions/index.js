// Controlar el flujo de información de nuestra aplicación

// Describir la información
export const setImportant = payload => ({
    type: 'SET_IMPORTANT',
    payload,
});

export const setTodos = payload => ({
    type: 'SET_TODO',
    payload,
});

export const deleteTodo = index =>({
    type: 'DELETE_TODO',
    payload: index,
});

export const loginRequest = payload => ({
    type: 'LOGIN_REQUEST',
    payload,
});

export const logoutRequest = payload =>({
    type: 'LOGOUT_REQUEST',
    payload,
})