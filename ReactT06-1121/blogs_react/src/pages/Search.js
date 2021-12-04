import '../components/ArticlePopular/popular-news-list.css'
import MainTitle from '../components/shared/MainTitle'
import ArticleItem from '../components/ArticleItem'
import Button from '../components/shared/Button'

function Search() {
    return (
        <div>
            <div className="articles-list section">
                <div className="tcl-container">
                    {/* Main Title */}
                    <MainTitle type="search">10 kết quả tìm kiếm cho từ khóa ""</MainTitle>
                    {/* End Main Title */}
                    {/* End Row News List */}
                    <div className="tcl-row tcl-jc-center">
                        <div className="tcl-col-12 tcl-col-md-8">
                            <ArticleItem 
                                isStyleCard 
                                isShowCategories 
                                children="Bài viết mới nhất ngày 03/12/2021">
                            </ArticleItem>
                        </div>
                    </div>
                    <div className="tcl-row tcl-jc-center">
                        <div className="tcl-col-12 tcl-col-md-8">
                            <ArticleItem isStyleCard isShowCategories children="Bài viết mới nhất ngày 03/12/2021"></ArticleItem>
                        </div>
                    </div>
                    <div className="tcl-row tcl-jc-center">
                        <div className="tcl-col-12 tcl-col-md-8">
                            <ArticleItem isStyleCard isShowCategories children="Bài viết mới nhất ngày 03/12/2021"></ArticleItem>
                        </div>
                    </div>
                    <div className="tcl-row tcl-jc-center">
                        <div className="tcl-col-12 tcl-col-md-8">
                            <ArticleItem isStyleCard isShowCategories children="Bài viết mới nhất ngày 03/12/2021"></ArticleItem>
                        </div>
                    </div>
                    {/* End Row News List */}
                    {/* Btn Loadmore */}
                    <div className="text-center">
                        <Button type="primary" size="large">Tải thêm</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Search