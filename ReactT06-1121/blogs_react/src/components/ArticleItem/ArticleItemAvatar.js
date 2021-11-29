import './article-item.css'
import cls from 'classnames'

function ArticleItemAvatar(
    className
){

    const classes = cls('article-item__author-image',className)

    return(
        <>
            <div className={ classes }>
                <a aria-label="John Doe" href="/">
                    <img src="/assets/images/john-doe.png" alt="john-doe" />
                </a>
            </div>
        </>
    )
}

export default ArticleItemAvatar