import axios from 'axios'


const initialState = {
    groups: null,
    ready:false,
}

const groupReducer = (state = initialState,action) => {
    switch (action.type) {
        case "setGroups":
            axios.get("http://localhost:5000/groups")
            .then(res => state.groups = res.data)
            state.ready = true;
            return state;
        case "addGroup":
            axios.post("http://localhost:5000/groups/newgroup",action.payload)
            .then(() => {
                axios.get("http://localhost:5000/groups")
                .then(res => state.groups = res.data)
            })
            state.ready = true;
            return state;
        default:
            axios.get("http://localhost:5000/groups")
            .then(res => state.groups = res.data)
            state.ready = true;
            return state;

    }
}

export default groupReducer