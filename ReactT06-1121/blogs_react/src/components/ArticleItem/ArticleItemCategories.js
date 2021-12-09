import './article-item.css'
import cls from 'classnames'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

function ArticleItemCategories(
    {
        className,
        categoriesId
    }
) {

    const classes = cls('article-item__categories', className)
    const hashCategoryById = useSelector(state => state.Category.hashCategoryById)
    return (
        <>
            <ul className={classes}>
                {
                    categoriesId.map(dataId => {
                        const category = hashCategoryById[dataId]
                        const slugCategory = '/category/' + category.slug
                        if(!category){
                            return null
                        }
                        return (
                            <li key={dataId}>
                                <Link to={slugCategory} className="btn btn-category">{category.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default ArticleItemCategories