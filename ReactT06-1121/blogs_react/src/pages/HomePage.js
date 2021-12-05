import ArticleGeneral from "../components/ArticleGeneral";
import ArticleLatest from "../components/ArticleLatest";
import ArticlePopular from "../components/ArticlePopular";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { actAsyncGetArticleLastest } from "../store/post/actions";

function HomePage() {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(actAsyncGetArticleLastest())
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