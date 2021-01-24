export { default as ArticlesList } from '../../components/ArticlesList.vue'
export { default as Nav } from '../../components/Nav.vue'

export const LazyArticlesList = import('../../components/ArticlesList.vue' /* webpackChunkName: "components/articles-list" */).then(c => c.default || c)
export const LazyNav = import('../../components/Nav.vue' /* webpackChunkName: "components/nav" */).then(c => c.default || c)
