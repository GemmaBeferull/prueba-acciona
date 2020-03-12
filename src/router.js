import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./views/Home.vue")
  },
  {
    path: "/userDetail",
    name: "userDetail",
    component: () => import("./views/UserDetail.vue")
  },
  {
    path: "/Favs",
    name: "Favs",
    component: () => import("./views/Favs.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
