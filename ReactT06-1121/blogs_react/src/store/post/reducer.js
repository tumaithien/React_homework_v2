import { ACT_GET_ARTICLE_LASTEST } from "./actions"



const initState = {
  articlesLatest: []
}


function reducer(postState = initState, action) {
  switch (action.type) {
    case ACT_GET_ARTICLE_LASTEST:
      return {
        articlesLatest: action.payload.posts
      }
    default:
      return postState
  }
}
export default reducer