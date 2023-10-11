import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
// const routerBase = `/${process.env?.APPNAME}`;
const createSubAppRouter = (routerBase: string) => {
  const base = window?.__POWERED_BY_QIANKUN__
    ? routerBase
    : process.env?.BASE_URL;
  console.log("🚀 - createSubAppRouter - base:", base);
  return createRouter({
    history: createWebHistory(base),
    routes,
  });
};

export default createSubAppRouter;
