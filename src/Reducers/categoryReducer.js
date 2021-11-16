import axios from "axios"

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
        case "addCategory":
            axios.post("http://localhost:5000/categories/newcategory",action.payload)
            break

        case "deleteCategory":
            axios.delete("http://localhost:5000/categories"+action.payload)
            state.isLoading = false;
            return state;
        default:
            axios.get("http://localhost:5000/categories")
            .then(res => state = {
                categories:res.data,
                isLoading:false,
            })
            return state;
    }
}

export default categoryReducer