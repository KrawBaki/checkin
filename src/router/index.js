import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    meta: { layout: "main" },
    component: HomeView,
  },
  {
    path: "/card",
    name: "card",
    meta: { layout: "main" },
    component: () => import("../views/CardView"),
  },
  {
    path: "/healthy",
    name: "healthy",
    meta: { layout: "main" },
    component: () => import("../views/HealthyView"),
  },
  {
    path: "/profil",
    name: "profil",
    meta: { layout: "about" },
    component: () => import("../views/ProfilView"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
