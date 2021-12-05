import axios from 'axios'
import { BASE_URL } from '../../constants'
import postServices from '../../services/post'

export const ACT_GET_ARTICLE_LASTEST = 'ACT_GET_ARTICLE_LASTEST'


export function actGetArticleLastest(posts){
    return{
        type: ACT_GET_ARTICLE_LASTEST,
        payload:{posts}
    }
}

export function actAsyncGetArticleLastest(){
    return async (dispatch) => {
        try{
            const response = await postServices.getArticleLastest();
            const post = response.data

        }
        catch(error){
            //Bắt lỗi
        }
    }
}