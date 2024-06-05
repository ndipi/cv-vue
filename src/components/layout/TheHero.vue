<template>
  <section>
    <transition name="hero" mode="out-in">
      <div :key="this.$route" :class="mobileView ? 'headerMobile' : 'header'">
        <img src="../../assets/me.jpg" />
        <div v-if="this.$route.path != '/contact'">
          <slot
            ><p>{{ heroDescription }}</p></slot
          >
        </div>
        <div v-else>
          <h2>Contact me!</h2>
          <ul>
            <li>
              <b>Linkedin: </b
              ><a href="https://www.linkedin.com/in/cnidipi/"
                >www.linkedin.com/in/cnidipi/</a
              >
            </li>
            <li><b>Gmail: </b>cndiazpi@gmail.com</li>
            <li>
              <b>Github: </b>
              <a href="https://github.com/ndipi">github.com/ndipi</a>
            </li>
            <li><b>Phone/WhatsApp: </b>+34 605066810</li>
          </ul>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  data() {
    return { mobileView: true };
  },
  computed: {
    heroDescription() {
      console.log(this.$route.path === "/home");
      if (
        this.$route.path === "/home" ||
        this.$route.path === "/" ||
        this.$route.path === "/vue-first-project" ||
        this.$route.path === "/vue-first-project/"
      ) {
        return this.$store.getters["heroDescription"];
      }
      if (this.$route.path === "/projects") {
        return this.$store.getters["projectsDescription"];
      }
      if (this.$route.path === "/about") {
        return this.$store.getters["aboutDescription"];
      }
      if (this.$route.path === "/admin" || this.$route.path === "/wp-admin") {
        return "This is not a wordpress page!!";
      }
      return this.$route.path;
    },
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 822;
    },
  },
  created() {
    window.addEventListener("resize", this.handleView);
    // setTimeout(() => (this.isCreated = true), 20);
    this.handleView();
  },
  unmounted() {
    window.removeEventListener("resize", this.handleView);
  },
};
</script>

<style scoped>
img {
  width: 20rem;
  max-height: 20rem;
  box-shadow: inset 0 0 50px white;
  border-radius: 500px;
}
section {
  padding: 100px 100px 0 100px;
  overflow: hidden;
}
div.header {
  background-color: #ccc;
  display: flex;
  padding: 5px;
  justify-content: left;
  border-top-left-radius: 500px;
  border-bottom-left-radius: 500px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  align-items: center;
}
div {
  align-content: center;
  padding: 50px;
}

p {
  font-size: 3vw;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  padding: 1rem 0 1rem 0;
}
.hero-enter-from {
  opacity: 0;
  /* transform: rotatey(-90deg); */
  transform: translateX(-40px);
  /* translate: -30rem; */
}
.hero-leave-to {
  opacity: 0;
  /* transform: translateX(15rem); */
  transform: translateX(40px);

  /* transform: rotatey(90deg); */
  /* translate: -30rem; */
  /* transform: rotatex(90deg); */
}
.hero-enter-active {
  transition: all 0.5s ease-out;
}

.hero-leave-active {
  transition: all 0.3s ease-in;
}

/* .hero-enter-to,
.hero-leave-from {
  opacity: 1;
  transform: scaleX(1);
} */
</style>
