import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b5037be0 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _51344aea = () => interopDefault(import('../pages/blog/articles/_slug.vue' /* webpackChunkName: "pages/blog/articles/_slug" */))
const _083754ee = () => interopDefault(import('../pages/blog/categories/_slug.vue' /* webpackChunkName: "pages/blog/categories/_slug" */))
const _2885bcb7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _b5037be0,
    name: "blog"
  }, {
    path: "/blog/articles/:slug?",
    component: _51344aea,
    name: "blog-articles-slug"
  }, {
    path: "/blog/categories/:slug?",
    component: _083754ee,
    name: "blog-categories-slug"
  }, {
    path: "/",
    component: _2885bcb7,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
