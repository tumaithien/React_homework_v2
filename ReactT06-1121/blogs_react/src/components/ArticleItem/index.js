import './article-item.css'
import cls from 'classnames'
import ArticleItemThumb from './ArticleItemThumb';
import ArticleItemTitle from './ArticleItemTitle';
import ArticleItemCategories from './ArticleItemCategories';
import ArticleItemStar from './ArticleItemStar';
import ArticleItemDesc from './ArticleItemDesc';
import ArticleItemInfo from './ArticleItemInfo';

function ArticleItem(
    {
        isStyleRow = false,
        isStyleCard = false,
        isShowDecs = false,
        isShowCategories = false,
        isShowStar = false,
        isShowAvatar = false,
        children
    }
) {

    const classes = cls('article-item',{
        'style-card': isStyleCard,
        'style-row': isStyleRow
    })

    return (
        <>
            <article className={classes}>
                <ArticleItemThumb/>
                <div className="article-item__content">
                    {isShowCategories && <ArticleItemCategories />}
                    {isShowStar && <ArticleItemStar />}
                        <ArticleItemTitle children={children} />
                    {isShowDecs && <ArticleItemDesc />}
                    <ArticleItemInfo isShowAvatar={isShowAvatar}/>
                </div>
            </article>
        </>
    );
}

export default ArticleItem