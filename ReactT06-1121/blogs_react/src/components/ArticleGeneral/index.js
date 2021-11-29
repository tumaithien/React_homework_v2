import ArticleItem from "../ArticleItem";
import Button from "../shared/Button"

function ArticleGeneral(){
    return(
        <>
            <div className="articles-list section">
  <div className="tcl-container">
    {/* Main Title */}
    <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
      <h2>News List</h2>
      <Button href="#" type="default" as="a">View More</Button>
    </div>
    {/* End Main Title */}
    {/* End Row News List */}
    <div className="tcl-row">
      <div className="tcl-col-12 tcl-col-md-6">
        <ArticleItem isStyleCard children="Bài viết trong ngày" ></ArticleItem>
      </div>
      <div className="tcl-col-12 tcl-col-md-6">
        <ArticleItem isStyleCard children="Bài viết trong ngày"></ArticleItem>
      </div>
      <div className="tcl-col-12 tcl-col-md-6">
        <ArticleItem isStyleCard children="Bài viết trong ngày"></ArticleItem>
      </div>
      <div className="tcl-col-12 tcl-col-md-6">
        <ArticleItem isStyleCard children="Bài viết trong ngày"></ArticleItem>
      </div>
      <div className="tcl-col-12 tcl-col-md-6">
        <ArticleItem isStyleCard children="Bài viết trong ngày"></ArticleItem>
      </div>
      <div className="tcl-col-12 tcl-col-md-6">
      <ArticleItem isStyleCard children="Bài viết trong ngày"></ArticleItem>
      </div>
    </div>
    {/* End Row News List */}
    {/* Btn Loadmore */}
    <div className="text-center">
        <Button type="primary" size="large">Xem Thêm</Button>
    </div>
  </div>
</div>

        </>
    );
}

export default ArticleGeneral