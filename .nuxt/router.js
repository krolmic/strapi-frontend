import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c8077db0 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _acf275e0 = () => interopDefault(import('../pages/articles/_id.vue' /* webpackChunkName: "pages/articles/_id" */))
const _035b7422 = () => interopDefault(import('../pages/categories/_id.vue' /* webpackChunkName: "pages/categories/_id" */))
const _ab330e4c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _c8077db0,
    name: "contact"
  }, {
    path: "/articles/:id?",
    component: _acf275e0,
    name: "articles-id"
  }, {
    path: "/categories/:id?",
    component: _035b7422,
    name: "categories-id"
  }, {
    path: "/",
    component: _ab330e4c,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
