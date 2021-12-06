import PostDetailSlidebar from "../components/PostDetail/PostDetailSlidebar"
import PostDetailContent from "../components/PostDetail/PostDetailContent"
import PostDetailHeader from "../components/PostDetail/PostDetailHeader"
function PostDetailsPage() {

    return (
        <>
            <main className="post-detail">
                <div className="spacing" />
                <PostDetailHeader />
                <div className="spacing" />
                {/* Post Detail Wrapper Content */}
                <div className="post-detail__fluid">
                    <div className="tcl-container">
                        <div className="post-detail__wrapper">
                            <PostDetailContent />
                            <PostDetailSlidebar />
                        </div>
                    </div>
                </div>
                {/* End Post Detail Wrapper Content */}
            </main>

        </>
    )
}

export default PostDetailsPage