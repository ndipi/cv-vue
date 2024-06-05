<template>
  <section>
    <h2>My Frontend Skills</h2>
    <div class="gallery">
      <base-card title="Vue">
        <template v-slot:image><img src="../assets/vue.png" /></template>
        <p>For component-driven interface building. This page uses Vue.</p>
      </base-card>
      <base-card title="Vuex">
        <template v-slot:image><img src="../assets/vuex.png" /></template>
        For managing state and mutations.</base-card
      >
      <base-card title="Vue-router">
        <template v-slot:image><img src="../assets/vue-router.png" /></template>
        For managing navigation and routing.</base-card
      >
      <base-card title="Jest">
        <template v-slot:image><img src="../assets/jest.png" /></template>
        For unit testing.</base-card
      >
    </div>

    <h2>Including other related skills like</h2>
    <div class="gallery">
      <base-card title="HTML">
        <template v-slot:image><img src="../assets/htmlogo.png" /></template>
        For structuring Vue.js app and components and DOM binding</base-card
      >
      <base-card title="JavaScript">
        <template v-slot:image><img src="../assets/jslogo.png" /></template>
        For handling logic and interactivity in Vue.js applications. Vue is
        based in JavaScript.</base-card
      >
      <base-card title="Css">
        <template v-slot:image><img src="../assets/csslogo.png" /></template>
        <p>For styling and animating Vue.js components.</p>
      </base-card>
      <base-card title="React">
        <template v-slot:image><img src="../assets/reactlogo.webp" /></template>
        <p>Another similar component-driven frontend JavaScript framework</p>
      </base-card>
    </div>

    <h2>And some Backend skills...</h2>
    <div class="gallery">
      <base-card title="Laravel">
        <template v-slot:image
          ><img src="../assets/laravellogo.png"
        /></template>
        PHP backend framework for scalable and robust web
        applications.</base-card
      >
      <base-card title="Php">
        <template v-slot:image><img src="../assets/phplogo.png" /></template>
        The foundation for laravel as a server-side scripting
        language.</base-card
      >
      <base-card title="Java">
        <template v-slot:image><img src="../assets/javalogo.png" /></template>
        <p>For object oriented programming.</p>
      </base-card>
      <base-card title="Node.js">
        <template v-slot:image><img src="../assets/nodelogo.png" /></template>
        <p>The backend runtime environment for React and Vue.js.</p>
      </base-card>
    </div>
  </section>
</template>

<style scoped>
section {
  padding-top: 50px;
}
.gallery {
  padding: 4rem;
  display: grid;
  justify-content: center;
  gap: 2rem;
  /* Para los casos features span 2: */
  grid-auto-flow: dense;
  grid-auto-rows: 15rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
}
img {
  width: 5rem;
}
p {
  padding-top: 10px;
  font-size: 20px;
}
/* .featured {
  grid-column: span 2;
} */
</style>
