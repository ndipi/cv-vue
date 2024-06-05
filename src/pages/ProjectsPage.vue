<template>
  <section>
    <h2>My Projects</h2>
    <div class="gallery">
      <base-card title="Under constuction!" class="featured">
        <template v-slot:image
          ><img src="../assets/underConstruction.png"
        /></template>
        <p>Coming soon!</p>
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
</style>
