import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0dd99c69 = () => interopDefault(import('../pages/404.vue' /* webpackChunkName: "pages/404" */))
const _2f0f6cf8 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _341013c6 = () => interopDefault(import('../pages/design.vue' /* webpackChunkName: "pages/design" */))
const _0923bc16 = () => interopDefault(import('../pages/resources.vue' /* webpackChunkName: "pages/resources" */))
const _38503915 = () => interopDefault(import('../pages/shop.vue' /* webpackChunkName: "pages/shop" */))
const _4adfeb04 = () => interopDefault(import('../pages/sponsor-nuxtjs.vue' /* webpackChunkName: "pages/sponsor-nuxtjs" */))
const _b9c38a00 = () => interopDefault(import('../pages/support.vue' /* webpackChunkName: "pages/support" */))
const _2d1ed608 = () => interopDefault(import('../pages/team.vue' /* webpackChunkName: "pages/team" */))
const _09819229 = () => interopDefault(import('../pages/themes.vue' /* webpackChunkName: "pages/themes" */))
const _96b65d52 = () => interopDefault(import('../pages/video-courses.vue' /* webpackChunkName: "pages/video-courses" */))
const _327caf88 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _2658fa62 = () => interopDefault(import('../pages/guides/_book.vue' /* webpackChunkName: "pages/guides/_book" */))
const _f62c5e6c = () => interopDefault(import('../pages/guides/_book/_slug.vue' /* webpackChunkName: "pages/guides/_book/_slug" */))
const _2199dcc3 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _1c881045 = () => interopDefault(import('../pages/_section.vue' /* webpackChunkName: "pages/_section" */))
const _4e5fedc0 = () => interopDefault(import('../pages/_section/_slug.vue' /* webpackChunkName: "pages/_section/_slug" */))

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
    path: "/404",
    component: _0dd99c69,
    name: "404"
  }, {
    path: "/blog",
    component: _2f0f6cf8,
    name: "blog"
  }, {
    path: "/design",
    component: _341013c6,
    name: "design"
  }, {
    path: "/resources",
    component: _0923bc16,
    name: "resources"
  }, {
    path: "/shop",
    component: _38503915,
    name: "shop"
  }, {
    path: "/sponsor-nuxtjs",
    component: _4adfeb04,
    name: "sponsor-nuxtjs"
  }, {
    path: "/support",
    component: _b9c38a00,
    name: "support"
  }, {
    path: "/team",
    component: _2d1ed608,
    name: "team"
  }, {
    path: "/themes",
    component: _09819229,
    name: "themes"
  }, {
    path: "/video-courses",
    component: _96b65d52,
    name: "video-courses"
  }, {
    path: "/blog/:slug",
    component: _327caf88,
    name: "blog-slug"
  }, {
    path: "/guides/:book?",
    component: _2658fa62,
    name: "guides-book",
    children: [{
      path: ":slug?",
      component: _f62c5e6c,
      name: "guides-book-slug"
    }]
  }, {
    path: "/",
    component: _2199dcc3,
    name: "index"
  }, {
    path: "/:section",
    component: _1c881045,
    name: "section",
    children: [{
      path: ":slug?",
      component: _4e5fedc0,
      name: "section-slug"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
