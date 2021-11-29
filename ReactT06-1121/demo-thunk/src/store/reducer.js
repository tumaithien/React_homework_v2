

const initState = {
    listBlogs: []
}

function reducer(state = initState, action){
    console.log('reducer', action)
    return state;
}

export default reducer