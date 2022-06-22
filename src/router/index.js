import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from  '../views/shared/Layout.vue'
import HomeView from '../views/HomeView.vue'
import MovieDetails from '../views/MoviesDetailsView.vue'
const routes = [
  {
    path:'',
    component:Layout,
    children:[

      {
        path: '',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/details/:id',
        name: 'details',
        component: MovieDetails,
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
