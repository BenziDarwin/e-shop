import axios from 'axios'

const initialState = {
    items:null,
    isloading:true,
}

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case "loadItems":
        axios.get("http://localhost:5000/items")
        .then(res => state.items = res.data)
        return state;
        case "deleteItem":
            axios.delete("http:localhost:5000/items/"+action.payload)
            return state;
        default:
            return state;

    }
}

export default itemReducer