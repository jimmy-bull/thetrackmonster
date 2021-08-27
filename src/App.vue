<template>
  <audio @timeupdate="timeupdate" @ended="endPlay" src="" class="track"></audio>
  <CartModal
    :open_cartModal="open_cartModal"
    :price_get="price_get"
    :data="cartData"
    @close_cartModal_function="close_cartModal_function"
  />
  <div class="appp">
    <div id="nav">
      <Header></Header>
    </div>
    <div style="flex-grow: 1">
      <router-view
        @open_playlist_box="open_playlist_box"
        @open_cartModal_function_from_app="open_cartModal_function_from_app"
      />
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
import Axios from "axios";
import CartModal from "@/components/CartModal.vue";
export default {
  name: "App",
  data() {
    return {
      price_get: 0,
      open_cartModal: false,
      link_share: "",
      cartData: {},
      open_share: false,
    };
  },
  components: {
    Header,
    Footer,
    Player,
    CartModal,
  },
  computed: {
    ...mapState([
      "TrackCurentTime",
      "TrackDuration",
      "item_id",
      "play_list",
      "domain_for_external_js_css_file",
    ]),
  },
  methods: {
    open_cartModal_function_from_app(event) {
      this.open_cartModal = true; //price_get
      this.price_get = event.currentTarget.getAttribute("price_get");
      //let cartData = {};
      this.cartData.price = event.currentTarget.getAttribute("price_get");
      this.cartData.id = event.currentTarget.getAttribute("id_get");
      this.cartData.image = event.currentTarget.getAttribute("image_get");
      this.cartData.title = event.currentTarget.getAttribute("title_get");
    },
    close_cartModal_function() {
      this.open_cartModal = false;
    },
    formatTime(sec) {
      let minutes = Math.floor(sec / 60);
      let seconds = Math.floor(sec - minutes * 60);
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      return `${minutes}:${seconds}`;
    },
    open_playlist_box() {
      document.querySelector(".player_parent").style.display = "block";
      document.querySelector(".footer_block").style.paddingBottom =
        document.querySelector(".player").offsetHeight + "px";
    },
    timeupdate() {
      this.$store.dispatch("timeupdate", document.querySelector(".track"));
      document.querySelector(".slider_tomb_progress").style.width =
        Math.ceil((this.TrackCurentTime / this.TrackDuration) * 100) + "%";
      document.querySelector(".minute_block").style.left =
        Math.ceil((this.TrackCurentTime / this.TrackDuration) * 100) + "%";
      document.querySelector(".minute").textContent = this.formatTime(
        this.TrackCurentTime
      );
    },
    endPlay() {
      // THE FUTURE IS FASTER THAN YOU THINK
      if (this.item_id <= this.play_list.length - 1) {
        let iteme_id = parseInt(this.item_id) + 1;
        this.$store.dispatch("play_from_elements", {
          class_reference: document
            .querySelector(".pindex--" + iteme_id)
            .getAttribute("class_referenceP"),
          audio: document.querySelector(".track"),
          play_current: this.play_list[iteme_id],
          play_list: this.play_list,
          item_id: iteme_id,
        });
      }
    },
    sizet() {
      document.querySelector(".footer_block").style.paddingBottom =
        document.querySelector(".player").offsetHeight + 10 + "px";
    },
  },
  mounted() {
    if (localStorage.getItem("session_token")) {
      Axios.get(
        this.domain_for_external_js_css_file +
          "api/get_favoris/" +
          localStorage.getItem("session_token")
      )
        .then((response) => {
          if (response.data != "Not connected") {
            this.$store.dispatch("update_wishlist_count", response.data);
            this.$store.dispatch("is_connected_f", true);
          }
        })
        .catch((err) => console.log(err));
    }
    this.$nextTick(function () {
      window.addEventListener("resize", this.sizet);
    });
  },
};
</script>

<style>
.player_parent {
  display: none;
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
a,
input {
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