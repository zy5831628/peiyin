import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import  Peiyin from "../views/Peiyin.vue"
import  Hecheng from "../views/Hecheng.vue"
import Zhubo from "../views/Zhubo.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/peiyin",
    name: "Peiyin",
    component: Peiyin
  },
  {
    path: "/hecheng",
    name: "Hecheng",
    component: Hecheng
  },
  {
    path: "/zhubo",
    name: "Zhubo",
    component: Zhubo
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
