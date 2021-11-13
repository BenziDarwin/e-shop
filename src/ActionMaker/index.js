export const setImage = (image)  => {
    return (dispatch) => {
        dispatch({
            type:"setImage",
            payload:image,
        })
    }
}

export const removeImage = () => {
    return (dispatch) => {
        dispatch({
            type:"removeImage",
            payload:"",
        })
    }
}

export const loadItems = () => {
    return (dispatch) => {
        dispatch({
            type:"loadItems",
            payload:null,
        })
    }
}