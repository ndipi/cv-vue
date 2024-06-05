<template>
  <!-- <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div> -->
  <div>
    <the-header></the-header>
    <!-- <router-view></router-view> -->
    <component :is="'the-hero'"></component>

    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import TheHero from "./components/layout/TheHero.vue";
import TheFooter from "./components/layout/TheFooter.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    TheHeader,
    TheFooter,
    TheHero,
  },
};
</script>

<style>
* {
  margin: 0 !important;
  box-sizing: border-box;
}
html {
  height: 100%;
}
body {
  background: snow;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
