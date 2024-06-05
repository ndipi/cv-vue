<template>
  <section class="gallery">
    <base-card title="Contact via Whatsapp">
      <template v-slot:image
        ><a href="https://wa.me/34605066810?text=Via%20web%20portfolio"
          ><img src="../assets/wpp.png" /></a></template
    ></base-card>
    <base-card title="Contact via E-mail">
      <template v-slot:image>
        <a href="mailto:cndiazpi@gmail.com?subject=Via portfolio web"
          ><img src="../assets/mail.png" /></a></template
    ></base-card>
    <base-card v-if="!mobileView" title="Contact via Gmail">
      <template v-slot:image
        ><a
          href="https://mail.google.com/mail/u/0/?fs=1&to=cndiazpi@gmail.com&su=Via%20portfolio%20web%20-%20&tf=cm"
          ><img src="../assets/gmail.webp" /></a></template
    ></base-card>
  </section>
</template>

<script>
export default {
  data() {
    return { mobileView: false };
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
section {
  padding-top: 50px;
  padding: 4rem;
  display: flex;
  justify-content: center;
  /* gap: 2rem; */
  /* Para los casos features span 2: */
  /* grid-auto-flow: dense; */

  /* grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr)); */
}
img {
  width: 5rem;
}
p {
  padding-top: 10px;
  font-size: 20px;
}
.featured {
  grid-column: span 2;
}
.gallery {
  padding: 4rem;
  display: grid;
  justify-content: center;
  gap: 2rem;
  /* Para los casos features span 2: */
  grid-auto-flow: dense;
  grid-auto-rows: 12rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
}
</style>
