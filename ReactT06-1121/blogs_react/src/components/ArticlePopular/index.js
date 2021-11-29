import MainTitle from "../shared/MainTitle"
import './popular-news-list.css'
import ArticleItem from '../ArticleItem'

function ArticlePopular() {
    return (
        <>
            {/* Popular News Section */}
            <div className="popular-news section bg-white-blue">
                <div className="tcl-container">
                    {/* Main Title */}
                    <MainTitle btnLabel="View more" btnProps={{type: 'category'}}>Popular Article</MainTitle>
                    {/* End Main Title */}
                    <div className="popular-news__list spacing">
                        <div className="popular-news__list--left">
                            <div className="popular-news__list--row">
                                {/* Popular news card */}
                                <div className="popular-news__list--card">
                                    <ArticleItem isStyleCard children="Bài viết mới nhất trong tuần ngày 27/11/2021" isShowCategories isShowStar isShowDecs isShowAvatar />
                                </div>
                                {/* End Popular news card */}
                                {/* Popular news card */}
                                <div className="popular-news__list--card">
                                    <ArticleItem isStyleCard children="Bài viết mới nhất trong tuần ngày 27/11/2021" isShowCategories isShowStar isShowDecs isShowAvatar />
                                </div>
                                {/* End Popular news card */}
                            </div>
                        </div>
                        <div className="popular-news__list--right">
                            <div className="popular-news__list--row">
                                {/* Popular news card */}
                                <div className="popular-news__list--card">
                                <ArticleItem isStyleCard isStyleRow children="Bài viết mới nhất trong tuần ngày 27/11/2021" isShowCategories isShowStar isShowAvatar />
                                </div>
                                {/* End Popular news card */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Popular News Section */}

        </>
    )
}

export default ArticlePopular