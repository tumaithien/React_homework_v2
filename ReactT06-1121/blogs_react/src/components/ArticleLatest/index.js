import './latest-news-list.css'
import ArticleItem from '../ArticleItem'
import MainTitle from '../shared/MainTitle'


function ArticleLatest() {
    return (
        <div className="latest-news section">
            <div className="tcl-container">
                <MainTitle>Latest News</MainTitle>
                <div className="latest-news__list spacing">
                    <div className="latest-news__card">
                        <ArticleItem isShowAvatar children="Bài viết nổi bật" />
                    </div>
                    <div className="latest-news__card">
                        <ArticleItem isShowAvatar children="Bài viết nổi bật" />
                    </div>
                    <div className="latest-news__card">
                        <ArticleItem isShowAvatar children="Bài viết nổi bật" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ArticleLatest