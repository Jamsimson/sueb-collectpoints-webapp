import { LocalStorage } from "quasar";

const routes = [
  {
    path: "/register",
    component: () => import("layouts/FirstLayout.vue"),
    children: [
      {
        path: "",
        name: "register",
        component: () => import("pages/IndexPage.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/HomeLayout.vue"),
    children: [
      { path: "", name: "home", component: () => import("pages/HomePage.vue") },
    ],
    beforeEnter: (to, from) => {
      console.log("Log:", LocalStorage.getItem("eiei"));
      if (!LocalStorage.getItem("eiei")) return "/register";
    },
  },
  {
    path: "/qrcode",
    component: () => import("layouts/FirstLayout.vue"),
    children: [
      {
        path: "",
        name: "qrcode",
        component: () => import("pages/QrCodePage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
