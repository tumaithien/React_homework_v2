export function getQueryStr(name) {
    return new URLSearchParams(window.location.search).get(name)
}

export function mappingPostData(list) {
    return{
        id: list.id,
        title: list.title.rendered,
        author: list.author_data,
        thumb: list.featured_media_url,
        slug: list.slug,
        createDate: list.date,
        authorId: list.author,
        categoriesId: list.categories,
        viewCount: list.view_count
    }
}

export function handleHashCategory(categories) {
    const hashObj = {}

    categories.forEach(categoryItem => {
        const key = categoryItem.id
        hashObj[key] = categoryItem

        hashObj[key]={
            id: categoryItem.id,
            slug: categoryItem.slug,
            name: categoryItem.name
        }
    })
    

    return hashObj


}