import { mappingPostData } from '../../helpers'
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
            const posts = response.data.map(mappingPostData);
            console.log('posts', posts);

            dispatch(actGetArticleLastest(posts))
        }
        catch(error){
            //Bắt lỗi
        }
    }
}