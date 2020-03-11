import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "about" */ "./views/Home.vue")
  },
  {
    path: "/userDetail",
    name: "userDetail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "./views/UserDetail.vue")
  },
  {
    path: "/Favs",
    name: "Favs",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "./views/Favs.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
