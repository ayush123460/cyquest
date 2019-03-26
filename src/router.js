import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      let x = document.querySelector(to.hash).offsetTop - 200;
      return window.scrollTo({ 
        top: x,
        behavior: 'smooth' 
      })
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/Rules",
      name: "Rules",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Rules.vue")
    }
  ]
});
