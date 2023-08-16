import Vue from 'vue'

Vue.component('CircleShape', () => import('@/custom-component/CircleShape/Component'))
Vue.component('CircleShapeAttr', () => import('@/custom-component/CircleShape/Attr'))
Vue.component('Picture', () => import('@/custom-component/Picture/Component'))
Vue.component('PictureAttr', () => import('@/custom-component/Picture/Attr'))
Vue.component('VText', () => import('@/custom-component/VText/Component'))
Vue.component('VTextAttr', () => import('@/custom-component/VText/Attr'))
Vue.component('VButton', () => import('@/custom-component/VButton/Component'))
Vue.component('VButtonAttr', () => import('@/custom-component/VButton/Attr'))
Vue.component('Group', () => import('@/custom-component/Group/Component'))
Vue.component('GroupAttr', () => import('@/custom-component/Group/Attr'))
Vue.component('RectShape', () => import('@/custom-component/RectShape/Component'))
Vue.component('RectShapeAttr', () => import('@/custom-component/RectShape/Attr'))
Vue.component('LineShape', () => import('@/custom-component/LineShape/Component'))
Vue.component('LineShapeAttr', () => import('@/custom-component/LineShape/Attr'))
Vue.component('VTable', () => import('@/custom-component/VTable/Component'))
Vue.component('VTableAttr', () => import('@/custom-component/VTable/Attr'))
Vue.component('VChart', () => import('@/custom-component/VChart/Component'))
Vue.component('VChartAttr', () => import('@/custom-component/VChart/Attr'))
Vue.component('SVGStar', () => import('@/custom-component/svgs/SVGStar/Component'))
Vue.component('SVGStarAttr', () => import('@/custom-component/svgs/SVGStar/Attr'))
Vue.component('SVGTriangle', () => import('@/custom-component/svgs/SVGTriangle/Component'))
Vue.component('SVGTriangleAttr', () => import('@/custom-component/svgs/SVGTriangle/Attr'))

// const components = [
//     'CircleShape',
//     'Picture',
//     'VText',
//     'VButton',
//     'Group',
//     'RectShape',
//     'LineShape',
//     'VTable',
//     'VChart',
// ]
//
// components.forEach(key => {
//     Vue.component(key, () => import(`@/custom-component/${key}/Component`))
//     Vue.component(key + 'Attr', () => import(`@/custom-component/${key}/Attr`))
// })
//
// const svgs = [
//     'SVGStar',
//     'SVGTriangle',
// ]
//
// svgs.forEach(key => {
//     Vue.component(key, () => import(`@/custom-component/svgs/${key}/Component`))
//     Vue.component(key + 'Attr', () => import(`@/custom-component/svgs/${key}/Attr`))
// })
