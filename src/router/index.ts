import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home | Arnav',
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About | Arnav',
      },
    },
    {
      path: "/:anything+",
      redirect: "/"
    },
  ]
})

const DEFAULT_TITLE = 'Arnav Priyadarshi';
router.beforeEach(to => {
    document.title = to.meta?.title as string ?? DEFAULT_TITLE;
});

export default router
