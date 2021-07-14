<template>
  <audio
    @timeupdate="timeupdate"
    src="http://127.0.0.1:8000/audio/free-jack-harlow-x-dababy-type-beat-racks-dababy.mp3"
    class="track"
  ></audio>
  <div class="appp">
    <div id="nav">
      <Header></Header>
    </div>
    <div style="flex-grow: 1">
      <router-view @open_playlist_box="open_playlist_box" />
    </div>
    <div class="player_parent">
      <Player></Player>
    </div>

    <div id="footer">
      <Footer></Footer>
    </div>
    <div></div>
  </div>
</template>

<script>
//08163080149
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Player from "@/components/Player.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Player,
  },
  computed: {
    ...mapState(["TrackCurentTime"]),
  },
  methods: {
    open_playlist_box() {
      document.querySelector(".player_parent").style.display = "block";
    },
    timeupdate() {
      this.$store.dispatch("timeupdate", document.querySelector(".track"));
    },
  },
};
</script>

<style>
.player_parent {
  /* display: none; */
}
.appp {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

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
  color: #2c3e50;
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