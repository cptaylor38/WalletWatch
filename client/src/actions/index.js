export const signIn = () => {
    return {
        type: 'SignIn'
    }
}

export const signOut = () => {
    return {
        type: 'SignOut'
    }
}

export const initializeUser = (data) => {
    return {
        type: 'Initialize',
        payload: data
    }
}