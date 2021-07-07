<template style=" display: flex;
  flex-direction: column;">
  <div id="nav">
    <Header></Header>
  </div>
  <div>
    <router-view />
  </div>
  <div style="display:none">
    <Player></Player>
  </div>

  <div id="footer">
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Player from "@/components/Player.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Player,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}*/

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
  margin-top: 60px;
  fill: #42b983;
}
a {
  text-decoration: none;
}
html,
body {
  font-family: "Noto Serif JP", serif;
  max-width: 100%;
  color: #2c3e50 !important;
  height: 100%;
  position: relative;
}
body {
  display: flex;
  flex-direction: column;
}
*:focus {
  outline: 0 !important;
}
</style>