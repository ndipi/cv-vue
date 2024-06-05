<template>
  <section>
    <h2>Academic experience</h2>
    <div class="gallery">
      <base-card title="Escola del treball">
        <template v-slot:image><img src="../assets/escola.png" /></template>
        <p>CFGS Web App Development (DAW) - <b>with honors</b></p></base-card
      >
      <base-card title="Enti">
        <template v-slot:image><img src="../assets/enti.jpg" /></template>
        <p>Art for Videogames Degree. - 2nd year</p></base-card
      >
      <base-card title="UPC">
        <template v-slot:image><img src="../assets/upc.png" /></template>
        <p>Computes Science Degree - 1st year</p>
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
