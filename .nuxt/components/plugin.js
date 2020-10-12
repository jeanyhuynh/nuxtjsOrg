import Vue from 'vue'

const globalComponents = {
  BarChartCacheBuild: () => import('../../components/global/BarChartCacheBuild.vue' /* webpackChunkName: "components/global/BarChartCacheBuild" */).then(c => c.default || c),
  AppModal: () => import('../../components/global/bases/AppModal.vue' /* webpackChunkName: "components/global/bases/AppModal" */).then(c => c.default || c),
  BaseAlert: () => import('../../components/global/bases/BaseAlert.vue' /* webpackChunkName: "components/global/bases/BaseAlert" */).then(c => c.default || c),
  BaseList: () => import('../../components/global/bases/BaseList.vue' /* webpackChunkName: "components/global/bases/BaseList" */).then(c => c.default || c),
  CodeBlock: () => import('../../components/global/bases/CodeBlock.vue' /* webpackChunkName: "components/global/bases/CodeBlock" */).then(c => c.default || c),
  CodeGroup: () => import('../../components/global/bases/CodeGroup.vue' /* webpackChunkName: "components/global/bases/CodeGroup" */).then(c => c.default || c),
  CodeSandbox: () => import('../../components/global/bases/CodeSandbox.vue' /* webpackChunkName: "components/global/bases/CodeSandbox" */).then(c => c.default || c),
  Quiz: () => import('../../components/global/bases/Quiz.vue' /* webpackChunkName: "components/global/bases/Quiz" */).then(c => c.default || c),
  Releases: () => import('../../components/global/bases/Releases.vue' /* webpackChunkName: "components/global/bases/Releases" */).then(c => c.default || c),
  IconAlert: () => import('../../components/global/icons/IconAlert.vue' /* webpackChunkName: "components/global/icons/IconAlert" */).then(c => c.default || c),
  IconArrowLeft: () => import('../../components/global/icons/IconArrowLeft.vue' /* webpackChunkName: "components/global/icons/IconArrowLeft" */).then(c => c.default || c),
  IconArrowRight: () => import('../../components/global/icons/IconArrowRight.vue' /* webpackChunkName: "components/global/icons/IconArrowRight" */).then(c => c.default || c),
  IconCheck: () => import('../../components/global/icons/IconCheck.vue' /* webpackChunkName: "components/global/icons/IconCheck" */).then(c => c.default || c),
  IconChevronRight: () => import('../../components/global/icons/IconChevronRight.vue' /* webpackChunkName: "components/global/icons/IconChevronRight" */).then(c => c.default || c),
  IconClipboardCheck: () => import('../../components/global/icons/IconClipboardCheck.vue' /* webpackChunkName: "components/global/icons/IconClipboardCheck" */).then(c => c.default || c),
  IconClipboardCopy: () => import('../../components/global/icons/IconClipboardCopy.vue' /* webpackChunkName: "components/global/icons/IconClipboardCopy" */).then(c => c.default || c),
  IconClose: () => import('../../components/global/icons/IconClose.vue' /* webpackChunkName: "components/global/icons/IconClose" */).then(c => c.default || c),
  IconExternalLink: () => import('../../components/global/icons/IconExternalLink.vue' /* webpackChunkName: "components/global/icons/IconExternalLink" */).then(c => c.default || c),
  IconGithub: () => import('../../components/global/icons/IconGithub.vue' /* webpackChunkName: "components/global/icons/IconGithub" */).then(c => c.default || c),
  IconInfo: () => import('../../components/global/icons/IconInfo.vue' /* webpackChunkName: "components/global/icons/IconInfo" */).then(c => c.default || c),
  IconMenu: () => import('../../components/global/icons/IconMenu.vue' /* webpackChunkName: "components/global/icons/IconMenu" */).then(c => c.default || c),
  IconNext: () => import('../../components/global/icons/IconNext.vue' /* webpackChunkName: "components/global/icons/IconNext" */).then(c => c.default || c),
  IconStar: () => import('../../components/global/icons/IconStar.vue' /* webpackChunkName: "components/global/icons/IconStar" */).then(c => c.default || c),
  IconTranslate: () => import('../../components/global/icons/IconTranslate.vue' /* webpackChunkName: "components/global/icons/IconTranslate" */).then(c => c.default || c),
  IconWebsite: () => import('../../components/global/icons/IconWebsite.vue' /* webpackChunkName: "components/global/icons/IconWebsite" */).then(c => c.default || c),
  IconX: () => import('../../components/global/icons/IconX.vue' /* webpackChunkName: "components/global/icons/IconX" */).then(c => c.default || c)
}

for (const name in globalComponents) {
  Vue.component(name, globalComponents[name])
}
