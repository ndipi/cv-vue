<template>
  <header>
    <nav>
      <!-- <h1><router-link to="/">Nicolás Díaz</router-link></h1> -->
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/about">About me</router-link></li>
      </ul>
      <router-link to="/contact" class="contact">Contact</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 5rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: linear-gradient(to bottom, #decba4 0%, #3e515155 100%); */
}

header a {
  text-decoration: none;
  color: #82694d;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border-bottom: 2px solid #c38743;
  color: #c38743;
}

h1 {
  margin: 0;
}

h1 a {
  color: #82694d;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

.contact {
  background-color: #49626d;
  color: white;
  border-radius: 50px;
}

.contact:hover {
  color: white;
  border-color: white;
  background-color: #429cc2;
}

a.router-link-active.contact {
  border-bottom: 2px solid snow;
  color: snow;
  background-color: #c38743;
}
</style>
