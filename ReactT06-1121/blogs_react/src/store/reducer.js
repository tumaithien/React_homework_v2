import { ACT_GET_LIST_POSTS } from "./action"


const initState = {
  articlesLatest: []
}


function reducer(postState = initState, action) {
  switch (action.type) {
    case ACT_GET_LIST_POSTS:
      return {
        articlesLatest: action.payload.posts
      }
    default:
      return postState
  }
}
export default reducer