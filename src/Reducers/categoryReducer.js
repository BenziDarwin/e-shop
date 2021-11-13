const initialState = {
    categories: null,
    isLoading:true,
}

const categoryReducer = (state = initialState,action) => {
    switch(action.type) {
        case "setCategories":
            axios.get("http://localhost:5000/categories")
            .then(res => state = {
                categories:res.data,
                isLoading:false,
            })
            return state;
        case "deleteCategory":
            axios.delete("http://localhost:5000/categories"+action.payload)
            .then(() => state.isLoading = false)
            return state;
        default:
            return state;
    }
}