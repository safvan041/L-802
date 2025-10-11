import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Signup from '../pages/Signup.vue'
import Dashboard from '../pages/Dashboard.vue'
import CategoryPage from '../pages/Category.vue'
import ListItems from '../pages/ListItems.vue'


const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/dashboard', component: Dashboard },
  { path: '/categories', component: CategoryPage },
  { path: '/items', component: ListItems },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/signup'];
  const authRequired = !publicPages.includes(to.path);
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  if (authRequired && !loggedInUser) {
    return next('/login');
  }
  next();
});

export default router
