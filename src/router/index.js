import { createRouter, createWebHistory } from "vue-router";

// Sahifa yuqoriga o'zgarish animatsiyasi uchun scrollBehavior
const scrollBehavior = () => {
  return {
    top: 0,
    behavior: "smooth",
  };
};

const routes = [
  // Home sahifasi uchun ikkita yo'l: '/' va '/home'
  {
    path: "/",
    name: "home",
    component: () => import("../pages/HomePage.vue"),
  },
  {
    path: "/home",
    redirect: "/", // "/home" bo'lsa "/" ga yo'naltirish
  },
 
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../pages/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
});

export default router;
