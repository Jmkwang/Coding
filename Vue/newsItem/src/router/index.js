import Vue from 'vue'
import Router from 'vue-router'
import newsItem from '@/components/newsItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'newsItem',
      component: newsItem
    }
  ]
})
