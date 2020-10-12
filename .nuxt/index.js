import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_2f29e7e5 from 'nuxt_plugin_plugin_2f29e7e5' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_workbox_49bec4d7 from 'nuxt_plugin_workbox_49bec4d7' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_meta_fcf6c5fa from 'nuxt_plugin_meta_fcf6c5fa' // Source: ./pwa/meta.js (mode: 'all')
import nuxt_plugin_icons_c3e968e8 from 'nuxt_plugin_icons_c3e968e8' // Source: ./pwa/icons.js (mode: 'all')
import nuxt_plugin_vuescrollto_97af59a4 from 'nuxt_plugin_vuescrollto_97af59a4' // Source: ./vue-scrollto.js (mode: 'client')
import nuxt_plugin_pluginrouting_01e3d32a from 'nuxt_plugin_pluginrouting_01e3d32a' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_773164e4 from 'nuxt_plugin_pluginmain_773164e4' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_pluginclient_43fb38e1 from 'nuxt_plugin_pluginclient_43fb38e1' // Source: ./content/plugin.client.js (mode: 'client')
import nuxt_plugin_pluginserver_ac96ab2e from 'nuxt_plugin_pluginserver_ac96ab2e' // Source: ./content/plugin.server.js (mode: 'server')
import nuxt_plugin_http_04c15475 from 'nuxt_plugin_http_04c15475' // Source: ./http.js (mode: 'all')
import nuxt_plugin_pluginserver_0a9673e1 from 'nuxt_plugin_pluginserver_0a9673e1' // Source: ./color-mode/plugin.server.js (mode: 'server')
import nuxt_plugin_pluginclient_b645fb4e from 'nuxt_plugin_pluginclient_b645fb4e' // Source: ./color-mode/plugin.client.js (mode: 'client')
import nuxt_plugin_i18n_6a80ea94 from 'nuxt_plugin_i18n_6a80ea94' // Source: ../plugins/i18n (mode: 'all')
import nuxt_plugin_directives_d0867c0c from 'nuxt_plugin_directives_d0867c0c' // Source: ../plugins/directives (mode: 'all')
import nuxt_plugin_intersectionobserverclient_6b6d967c from 'nuxt_plugin_intersectionobserverclient_6b6d967c' // Source: ../plugins/intersection-observer.client.js (mode: 'client')
import nuxt_plugin_vueobservevisibilityclient_42d89e44 from 'nuxt_plugin_vueobservevisibilityclient_42d89e44' // Source: ../plugins/vue-observe-visibility.client.js (mode: 'client')
import nuxt_plugin_gaclient_594060ae from 'nuxt_plugin_gaclient_594060ae' // Source: ../plugins/ga.client.js (mode: 'client')
import nuxt_plugin_adblockclient_6cd502f2 from 'nuxt_plugin_adblockclient_6cd502f2' // Source: ../plugins/adblock.client.js (mode: 'client')
import nuxt_plugin_newsletterclient_653877cd from 'nuxt_plugin_newsletterclient_653877cd' // Source: ../plugins/newsletter.client.js (mode: 'client')
import nuxt_plugin_vuescrollactive_96ef6720 from 'nuxt_plugin_vuescrollactive_96ef6720' // Source: ../plugins/vue-scrollactive (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule
const baseStoreOptions = { preserveState: process.client }

function registerModule (path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"htmlAttrs":{"lang":undefined,"dir":"ltr"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"og:site_name","property":"og:site_name","content":"NuxtJS"},{"hid":"og:type","property":"og:type","content":"website"},{"hid":"twitter:site","name":"twitter:site","content":"@nuxt_js"},{"hid":"twitter:card","name":"twitter:card","content":"summary_large_image"},{"hid":"og:image","property":"og:image","content":"https:\u002F\u002Fnuxtjs.org\u002Fnuxt-card.png"},{"hid":"og:image:secure_url","property":"og:image:secure_url","content":"https:\u002F\u002Fnuxtjs.org\u002Fnuxt-card.png"},{"hid":"og:image:alt","property":"og:image:alt","content":"NuxtJS"},{"hid":"twitter:image","name":"twitter:image","content":"https:\u002F\u002Fnuxtjs.org\u002Fnuxt-card.png"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"preconnect","href":"https:\u002F\u002Fwww.google-analytics.com"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fdocsearch.js\u002F2\u002Fdocsearch.min.css"}],"bodyAttrs":{"class":["font-sans font-medium bg-light-surface dark:bg-dark-surface text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"]},"style":[],"script":[{"hid":"nuxt-color-mode-script","innerHTML":"!function (){\"use strict\";var e=window,s=document,t=s.documentElement,n=[\"dark\",\"light\"],o=function(e){for(var t=e+\"=\",n=s.cookie.split(\";\"),o=0;o\u003Cn.length;o++){for(var a=n[o];\" \"===a.charAt(0);)a=a.substring(1,a.length);if(0===a.indexOf(t))return a.substring(t.length,a.length)}return null}(\"nuxt-color-mode\")||\"light\",a=\"system\"===o?c():o;function i(e){var s=\"\"+e+\"-mode\";t.classList?t.classList.add(s):t.className+=\" \"+s}function r(s){return e.matchMedia(\"(prefers-color-scheme\"+s+\")\")}function c(){if(e.matchMedia&&\"not all\"!==r(\"\").media)for(var s of n)if(r(\":\"+s).matches)return s;return\"light\"}i(a),e[\"__NUXT_COLOR_MODE__\"]={preference:o,value:a,getColorScheme:c,addClass:i,removeClass:function(e){var s=\"\"+e+\"-mode\";t.classList?t.classList.remove(s):t.className=t.className.replace(new RegExp(s,\"g\"),\"\")}}}();\n","pbody":true}],"__dangerouslyDisableSanitizersByTagID":{"nuxt-color-mode-script":["innerHTML"]}},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_2f29e7e5 === 'function') {
    await nuxt_plugin_plugin_2f29e7e5(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_49bec4d7 === 'function') {
    await nuxt_plugin_workbox_49bec4d7(app.context, inject)
  }

  if (typeof nuxt_plugin_meta_fcf6c5fa === 'function') {
    await nuxt_plugin_meta_fcf6c5fa(app.context, inject)
  }

  if (typeof nuxt_plugin_icons_c3e968e8 === 'function') {
    await nuxt_plugin_icons_c3e968e8(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuescrollto_97af59a4 === 'function') {
    await nuxt_plugin_vuescrollto_97af59a4(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_01e3d32a === 'function') {
    await nuxt_plugin_pluginrouting_01e3d32a(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_773164e4 === 'function') {
    await nuxt_plugin_pluginmain_773164e4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_43fb38e1 === 'function') {
    await nuxt_plugin_pluginclient_43fb38e1(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_ac96ab2e === 'function') {
    await nuxt_plugin_pluginserver_ac96ab2e(app.context, inject)
  }

  if (typeof nuxt_plugin_http_04c15475 === 'function') {
    await nuxt_plugin_http_04c15475(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_0a9673e1 === 'function') {
    await nuxt_plugin_pluginserver_0a9673e1(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_b645fb4e === 'function') {
    await nuxt_plugin_pluginclient_b645fb4e(app.context, inject)
  }

  if (typeof nuxt_plugin_i18n_6a80ea94 === 'function') {
    await nuxt_plugin_i18n_6a80ea94(app.context, inject)
  }

  if (typeof nuxt_plugin_directives_d0867c0c === 'function') {
    await nuxt_plugin_directives_d0867c0c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_intersectionobserverclient_6b6d967c === 'function') {
    await nuxt_plugin_intersectionobserverclient_6b6d967c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueobservevisibilityclient_42d89e44 === 'function') {
    await nuxt_plugin_vueobservevisibilityclient_42d89e44(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_gaclient_594060ae === 'function') {
    await nuxt_plugin_gaclient_594060ae(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_adblockclient_6cd502f2 === 'function') {
    await nuxt_plugin_adblockclient_6cd502f2(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_newsletterclient_653877cd === 'function') {
    await nuxt_plugin_newsletterclient_653877cd(app.context, inject)
  }

  if (typeof nuxt_plugin_vuescrollactive_96ef6720 === 'function') {
    await nuxt_plugin_vuescrollactive_96ef6720(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
