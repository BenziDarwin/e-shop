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

export const setGroups = (groups) => {
    return (dispatch) => {
        dispatch({
            type:"setGroups",
            payload:groups,
        })
    }
}

export const addGroup = (group) => {
    return (dispatch) => {
        dispatch({
            type:"addGroup",
            payload:group,
        })
    }
}

export const loadCategories = () => {
    return (dispatch) => {
        dispatch ({
            type:"setCategories",
            payload:null,
        })
    }
}