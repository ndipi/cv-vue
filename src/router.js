import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "./pages/AboutPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import HomePage from "./pages/HomePage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import NotFound from "./pages/NotFound.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: "/", redirect: "/home" },
    // { path: "/vue-first-project", redirect: "/home" },
    { path: "/home", component: HomePage, alias: ["/", "/cv-vue"] },
    {
      path: "/about",
      component: AboutPage,
      props: true,
    },
    { path: "/contact", component: ContactPage },
    { path: "/projects", component: ProjectsPage },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
