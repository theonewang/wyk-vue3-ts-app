//  src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const HelloWorld = () => import("@/components/HelloWorld.vue");
const TestStore = () => import("@/components/TestStore.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    meta: {
      title: "首页",
    },
    component: TestStore,
  },
  {
    path: "/helloworld",
    name: "helloworld",
    meta: {
      title: "helloworld",
    },
    component: HelloWorld,
  },
];

const router = createRouter({
  history: createWebHistory(),//另外一种hash模式createWebHashHistory
  routes,
});
export default router;