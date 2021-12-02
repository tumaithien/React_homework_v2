import { ACT_GET_LIST_POSTS } from "./action";

const initState = {
    listBlogs: []
}

function reducer(state = initState, action){
    switch (action.type) {
        case ACT_GET_LIST_POSTS:
            return {
                listBlogs: action.payload.posts
            }
        default:
            return state
    }
}

export default reducer