import { api } from './api'

const postServices ={
    getList(params){
        return api.call().get('/wp/v2/posts',{
            params:{
                ...params,
                lang: 'vi'
            }
        })
    },

    getArticleLastest(){
        return postServices.getList({
            per_page: 3,
            page: 1
        })
    }
}

export default postServices