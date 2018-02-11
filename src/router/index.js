/* eslint-disable */
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import Sketcher from '@/components/Sketcher'
import Code from '@/components/Code'
import RowTemplate from '@/components/RowTemplate'
import NavTemplate from '@/components/NavTemplate'
import NavLogo from '@/components/elements/NavLogo'
import ImageFull from '@/components/elements/ImageFull'
import Background from '@/components/elements/Background'

Vue.use(Router)
Vue.use(ElementUI)
Vue.component('row-template', RowTemplate);
Vue.component('nav-template', NavTemplate);
Vue.component('nav-logo', NavLogo);
Vue.component('code-block', Code);
Vue.component('image-full', ImageFull);
Vue.component('background', Background);
var bus = new Vue();

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sketcther',
      component: Sketcher
    },
    {
      path: '/code',
      name: 'Code',
      component: Code
    }
  ]
})
