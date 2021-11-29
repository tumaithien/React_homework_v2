import './article-item.css'
import cls from 'classnames'

function ArticleItemTitle(
    {
        children,
        className,
        ...restProps
    }
){
    const classes = cls('article-item__title', className)

    return(
        <>
            <h2 className={classes}>
                <a href="/only-someone-who's-seen-the-mummy-will-pass-this/">{children}</a>
            </h2>
        </>
    )
}

export default ArticleItemTitle