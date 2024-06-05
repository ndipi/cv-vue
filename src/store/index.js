import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      heroDescription: `Hi! My name is Nicolás Díaz, I'm a frontend web developer and this is my CV!`,
      projectsDescription: `Here I will be showcasing my projects and career related news!`,
      aboutDescription: `Challenge-driven individual with
      a passion for coding and
      problem-solving. Open,
      social, and eager to collaborate with
      experienced professionals.`,
    };
  },
  getters: {
    heroDescription(state) {
      console.log(state);
      return state.heroDescription;
    },
    aboutDescription(state) {
      console.log(state);
      return state.aboutDescription;
    },
    projectsDescription(state) {
      console.log(state);
      return state.projectsDescription;
    },
  },
});

export default store;
