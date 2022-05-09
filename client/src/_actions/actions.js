import axios from 'axios'


export function logIn(data) {
    const dataFromServer = axios.post('/api/user/login', data).then(response => response.data)

    return {
        type: "signIn",
        payload: dataFromServer
    }
}