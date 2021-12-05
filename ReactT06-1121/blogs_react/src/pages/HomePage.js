import ArticleGeneral from "../components/ArticleGeneral";
import ArticleLatest from "../components/ArticleLatest";
import ArticlePopular from "../components/ArticlePopular";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { actAsyncGetListPost } from "../store/action";
function HomePage() {

  const dispatch = useDispatch();

  const selector = useSelector(state => state.articlesLatest)

  useEffect(() => {
    dispatch(actAsyncGetListPost())
  }, [])
 

  return (
    <>
      <ArticleLatest />
      <ArticleGeneral />
      <ArticlePopular />
    </>
  )
}

export default HomePage