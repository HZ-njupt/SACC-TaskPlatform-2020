import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import { title } from '@/settings'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/views/home/index'),
      meta: { title: 'Home', icon: 'dashboard' }
    }]
  },

  {
    path: '/lesson',
    component: Layout,
    meta: { title: 'My Lesson', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'index',
        name: 'LessonList',
        component: () => import('@/views/lesson/index'),
        meta: { title: 'Lesson List', icon: 'tree', role: 'admin' }
      },
      {
        path: 'issue',
        name: 'Issue',
        component: () => import('@/views/lesson/issue'),
        meta: { title: 'Issue', icon: 'table' }
      }
    ]
  },

  {
    path: '/percenter',
    component: Layout,
    meta: { title: 'PersonalCenter', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'index',
        name: 'Personal',
        component: () => import('@/views/Personal/index'),
        meta: { title: 'Information', icon: 'percenter' }
      },
      {
        path: 'setting',
        name: 'Setting',
        component: () => import('@/views/Personal/setting'),
        meta: { title: 'Setting', icon: 'form' }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/homework',
    component: Layout,
    meta: { title: 'My Homework', icon: 'el-icon-s-help', role: ['admin', 'editor'] },
    children: [
      {
        path: 'index',
        name: 'Homework',
        component: () => import('@/views/homework/index'),
        meta: { title: 'Homework List', icon: 'form', role: ['admin', 'editor'] }
      },
      {
        path: 'publish',
        name: 'Publish',
        component: () => import('@/views/homework/publish'),
        meta: { title: 'Publish', icon: 'form', role: ['admin'] }
      },
      {
        path: 'check',
        name: 'CheckHomework',
        component: () => import('@/views/homework/check'),
        meta: { title: 'CheckHomework', icon: 'form', role: ['admin'] }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
