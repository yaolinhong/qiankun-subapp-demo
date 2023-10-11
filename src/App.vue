<template>
  <nav>
    子应用路由
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { ElMessageBox } from "element-plus";
onMounted(() => {
  setTimeout(() => {
    // ElMessageBox.alert("我嫩叠", "我嫩叠", {});
  }, 2000);
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
