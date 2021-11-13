const initialState = {
    image:'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png'
}

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setImage":
            return state= {
                image: action.payload
            }
        case "removeImage":
            return state = {
                image: null
            }
        default:
            return state
    }
}

export default imageReducer