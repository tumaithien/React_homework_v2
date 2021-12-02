import axios from 'axios'


//Action Type
const BASE_URL = 'https://api-meme-zendvn-01.herokuapp.com/api/'
export const ACT_GET_LIST_POSTS = 'ACT_GET_LIST_POSTS'

//Action Creator
export function actGetListPosts(posts) {
    return {
        type: ACT_GET_LIST_POSTS,
        payload: {
            posts
        }
    }
}

//Action ASync
export function actGetListPostsASync({
    pagesize, currPage
}) {
    
    return dispatch => {
        // setTimeout(() =>  {
        //     const posts = [{ id: 20, title: 'Bai viet dau tien ve toi' }, { id: 21, title: 'Tin tuc 24h ve cuoc song' }];
        //     console.log('Sau 1s Back end tra du lieu ve')
        //     dispatch(actGetListPosts(posts))
        // }, 1000);
        // axios.get(BASE_URL + 'post/getListPagination.php?pagesize=3&currPage=1')
        axios.get(BASE_URL + 'post/getListPagination.php',{
            params: {
                pagesize: pagesize,
                currPage: currPage
            }
        })
            .then(function (response) {
                // handle success
                if(response.data.status === 200){
                    dispatch(actGetListPosts(response.data.posts))
                } else{
                    throw new Error('Gọi API không thành công')
                }
                
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
}