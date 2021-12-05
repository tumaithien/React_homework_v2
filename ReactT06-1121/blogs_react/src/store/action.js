import axios from 'axios'

const BASE_URL = 'http://localhost:8080/wp-api/wp-json'
export const ACT_GET_LIST_POSTS = 'ACT_GET_LIST_POSTS'


export function actGetListPosts(posts){
    return{
        type: ACT_GET_LIST_POSTS,
        payload:{posts}
    }
}

export function actAsyncGetListPost(){
    return dispatch => {
        axios.get(BASE_URL + '/wp/v2/posts')
        .then(function (response) {
            if(response.status === 200){
                dispatch(actGetListPosts(response.data[0]))
            } else{
                throw new Error('Gọi API không thành công')
            }
          })
          .catch(function (error) {
            console.log(error);
          })
    } 
}