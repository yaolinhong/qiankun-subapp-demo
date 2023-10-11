import "./public-path";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import createSubAppRouter from "./router";
const routerBase = `/${process.env?.APPNAME}`;
const instance: any = null;
//  { container: string; routerBase: string }

function render(props: { container: Document; routerBase: string }) {
  const { container, routerBase } = props;
  const router = createSubAppRouter(routerBase);
  console.log("🚀 - render - router:", router);
  const store = createPinia();

  const app = createApp(App);
  app.use(router).use(store).use(ElementPlus, { locale: zhCn });
  const mountContainer =
    container.querySelector("#app") || document.querySelector("#app") || "#app";
  app.mount(mountContainer);
}

if (!window.__POWERED_BY_QIANKUN__) {
  // 这里是子应用独立运行的环境，实现子应用的登录逻辑

  // TODO store操作
  // 独立运行时，也注册一个名为global的store module
  // commonStore.globalRegister(store);
  // // 模拟登录后，存储用户信息到global module
  // const userInfo = { name: "我是独立运行时名字叫张三" }; // 假设登录后取到的用户信息
  // store.commit("global/setGlobalState", { user: userInfo });

  render({ container: window.document, routerBase });
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}

export async function mount(props: any) {
  console.log("[vue] props from main framework", props);

  // commonStore.globalRegister(store, props);

  render(props);
}

export async function unmount() {
  // instance?.$destroy();
  // instance.$el.innerHTML = "";
  // instance = null;
}
