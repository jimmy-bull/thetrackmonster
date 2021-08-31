<template>
  <div>
    <div>
      <h2
        style="text-indent: 30px"
        v-if="
          typeof carou_beats_data.data !== 'undefined' &&
          carou_beats_data.data.length > 0
        "
      >
        You have {{ wishlist_count }} beats in your wishlist
      </h2>
      <div class="splide_parent">
        <splide
          class="splide"
          :options="options"
          v-if="
            typeof carou_beats_data.data !== 'undefined' &&
            carou_beats_data.data.length > 0
          "
        >
          <splide-slide
            class="img_items"
            v-for="(itemCarou, indexCarou) in carou_beats_data.data"
            :key="indexCarou"
          >
            <div>
              <div
                class="favoris_carou"
                :foreign-id="itemCarou.id"
                @click="favoris_cancel"
              >
                <unicon
                  name="times"
                  height="15"
                  style="margin-top: 7px"
                  fill="#42b983"
                  :foreign-id="itemCarou.id"
                />
              </div>
              <div
                class="play_btn_carou"
                @click="play_carou"
                :item_id="indexCarou"
                :class_reference="itemCarou.id"
              >
                <i
                  class="fa fa-play"
                  :class="`index--${itemCarou.id}`"
                  aria-hidden="true"
                ></i>
              </div>
              <router-link
                :to="{
                  name: 'beats-desc',
                  params: { name: itemCarou.beat_link, id: itemCarou.id },
                }"
              >
                <img class="image_carou" :src="itemCarou.image_link" />
              </router-link>
              <div class="title_zone_carou">
                <h4>{{ itemCarou.title }}</h4>
                <div class="price_block">
                  <div>
                    <unicon name="shopping-bag" height="20" fill="#42b983" />
                  </div>
                  <div>
                    <span
                      v-if="itemCarou.downloadable == 'true'"
                      class="price_carou"
                      >Free</span
                    >
                    <span
                      v-if="itemCarou.downloadable == 'false'"
                      class="price_carou"
                      >${{ itemCarou.price }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </splide-slide>
        </splide>
        <div
          v-else-if="
            typeof carou_beats_data.data == 'undefined' && is_connected == true
          "
          style="display: flex; justify-content: center; align-items: center"
        >
          <div class="loader"></div>
        </div>
      </div>
    </div>
    <div
      v-if="wishlist_count == 0"
      style="
        margin-top: 20vh;
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
      "
    >
      <div>
        <h2 style="text-indent: 30px">
          You have not yet added one of the beats to your favorites.
        </h2>
      </div>
      <div>
        <div class="prix_share" @click="go_home">
          <span data-v-1d3a40f9="">Add a some beats</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Axios from "axios";
export default {
  name: "Wishlist",
  data() {
    return {
      beats_genre: "",
      wavesurfer: "",
      options: {
        rewind: true,
        perPage: 6,
        gap: "1rem",
        pagination: false,
        breakpoints: {
          992: {
            perPage: 3,
            gap: "1rem",
          },
          768: {
            perPage: 2,
            gap: "1rem",
          },
          480: {
            perPage: 2,
            gap: "1rem",
          },
          360: {
            perPage: 1,
            gap: "1rem",
          },
        },
      },
      options_cate: {
        rewind: true,
        perPage: 4,
        arrows: false,
        gap: "2px",
        pagination: false,
        breakpoints: {
          992: {
            perPage: 3,
            gap: "1rem",
          },
          768: {
            perPage: 2,
            gap: "1rem",
          },
          480: {
            perPage: 2,
            gap: "1rem",
          },
        },
      },
      genre: [],
      refCount: 0,
      isLoading_genre_filters: false,
      carou_beats_data: "",
      latest_beat: "",
      isloading_latest_beat: false,
      tags: [],
      stopCall: 0,
    };
  },
  components: {
    // HelloWorld
    Splide,
    SplideSlide,
  },
  computed: {
    ...mapState([
      "domain_for_external_js_css_file",
      "play_current",
      "playing",
      "play_list",
      "wishlist_count",
      "is_connected",
    ]),
  },
  methods: {
    go_home() {
      this.$router.push("/");
    },
    play_carou(event) {
      let item_id = event.currentTarget.getAttribute("item_id");
      let class_reference = event.currentTarget.getAttribute("class_reference");

      this.$store.dispatch("play_from_elements", {
        class_reference: class_reference,
        audio: document.querySelector(".track"),
        play_current: this.carou_beats_data.data[item_id],
        play_list: this.carou_beats_data.data,
        item_id: item_id,
      });
      this.$emit("open_playlist_box");
    },
    favoris_cancel(event) {
      if (localStorage.getItem("session_token")) {
        Axios.get(
          this.domain_for_external_js_css_file +
            "api/favoris_delete/" +
            localStorage.getItem("session_token") +
            "/" +
            event.currentTarget.getAttribute("foreign-id")
        )
          .then((response) => {
            this.carou_beats_data = response;
            this.isLoading_genre_filters = true;
          })
          .catch((err) => console.log(err));
        if (this.wishlist_count > 0) {
          this.$store.dispatch(
            "update_wishlist_count",
            this.wishlist_count - 1
          );
        }
      }
    },
  },
  mounted() {
     window.scrollTo(0,0);
      document.title="Wishlist"
    if (localStorage.getItem("session_token")) {
      if (this.stopCall == 0) {
        Axios.get(
          this.domain_for_external_js_css_file +
            "api/favoris_show/" +
            localStorage.getItem("session_token")
        )
          .then((response) => {
            this.carou_beats_data = response;
            this.isLoading_genre_filters = true;
          })
          .catch((err) => console.log(err));
        this.stopCall = 1;
      }
    }
  },
};
</script>
<style scoped>
.prix_share {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #42b983;
  color: white;
  width: 150px;
  height: 45px;
  border-radius: 3px;
  transition: transform 0.2s;
  box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
  cursor: pointer;
}
.fa-play,
.fa-pause {
  color: #fff;
}
.blog_grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.blog_grid > div {
  margin: 1%;
}
.blur_ground_carou {
  height: 600px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  filter: blur(3px);
  -webkit-filter: blur(5px);
}
.top_effect_block {
  position: absolute;
  z-index: 100000;
  width: 100%;
  height: 600px;
  font-size: 31px;
  color: white;
  font-weight: bolder;
  transition: ease-in-out 0.5s all;
  display: none;
}

.bottom_effect_block_txt {
  position: absolute;
  z-index: 1000000000;
  font-size: 31px;
  color: white;
  bottom: -600px;
  font-weight: bolder;
  transition: ease 0.3s all;
  display: flex;
  align-items: center;
  font-size: 25px;
}
.bottom_effect_block_txt > div {
  margin: 5px;
}
.top_effect_block_txt {
  position: absolute;
  z-index: 1000000000;
  transform: rotate(270deg);
  font-size: 31px;
  color: white;
  top: -600px;
  font-weight: bolder;
  left: -50px;
  transition: ease 0.3s all;
}
.img_cate_gorie_carou_block:hover .title_on_blur {
  bottom: -600px;
}
.img_cate_gorie_carou_block:hover .top_effect_block {
  display: block;
  background: rgb(0, 0, 0, 0.2);
}
.img_cate_gorie_carou_block:hover .top_effect_block_txt {
  top: 100px;
}
.img_cate_gorie_carou_block:hover .bottom_effect_block_txt {
  bottom: 0;
}
.title_on_blur {
  position: absolute;
  z-index: 100000;
  transform: rotate(270deg);
  font-size: 31px;
  color: white;
  bottom: 100px;
  font-weight: bolder;
  left: -50px;
  transition: ease 0.5s all;
}
.img_cate_gorie_carou_block {
  position: absolute;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  cursor: pointer;
  width: 100%;
}
.img_cate_gorie_carou {
  width: 80%;
  height: 250px;
  object-fit: cover;
}
.discover_title_big {
  font-size: 30px;
  display: flex;

  font-weight: bolder;
}
.discover_title_small {
  font-size: 20px;
  display: flex;
}
.categories_block {
  display: flex;
}
.categories_block > div {
  margin: 0 2% 0 2%;

  padding-bottom: 5px;
  border-color: #42b983;
  border-width: 1px;
  cursor: pointer;
}
.play_btn_carou {
  position: absolute;
  background: #42b983;
  bottom: 26%;
  right: 10%;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.favoris_carou {
  position: absolute;
  background: white;
  top: 2%;
  left: 5%;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.price_carou {
  font-size: 15px;
  color: #42b983;
}
.price_block {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -10px;
}
.splide {
  margin-top: 30px;
}
.title_zone_carou {
  text-align: center;
}
.title_zone_carou h4 {
  margin-top: 10px;
}
.splide_parent {
  margin: 2%;
}
.img_items {
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  padding-bottom: 10px;
  width: 250px;
  margin-bottom: 20px;
  position: relative;
  transition: ease-in-out 0.3s all;
  margin-top: 20px;
}

.blog_items {
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  padding-bottom: 10px;
  width: 30%;
  margin-bottom: 20px;
  position: relative;
  transition: ease-in-out 0.3s all;
  margin-top: 20px;
  cursor: pointer;
}
.img_items:hover {
  cursor: pointer;
  transform: scale(1.1);
}
.image_carou {
  width: 100%;
  height: 200px;
  border-radius: 15px 15px 0px 0px;
  object-fit: cover;
  object-position: center;
  background: #f5f5f5;
}
.hot_artist_image {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
}
.hot_artist {
  display: flex;
  justify-content: center;
}
.hot_artist > div {
  margin: 10px;
}
.play_zone_first_block {
  display: flex;
  align-items: center;
}
.play_zone_first_block > div {
  margin: 10px;
}
.btn_play {
  background: #42b983;
  padding: 2px;
  border-radius: 10px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.first_block {
  padding: 20px 2% 0px 2%;
}
.first_block_parent {
  border-bottom-style: solid;
  border-width: 1px;
  border-color: #f5f5f5;
}
.first_block > div {
  margin: 10px;
  display: flex;
  justify-content: center;
}
.first_block > div > div > div {
  margin: 10px;
}
.first_block .first_block_first {
  border-right-style: solid;
  border-width: 0.5px;
  border-color: #f5f5f5;
}
.first_block .first_block_first {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.first_block > div > div {
  margin: 0px 25px 0px 0px;
}
.img_last_added {
  width: 300px;
  border-radius: 10px;
  cursor: pointer;
  background: #f5f5f5;
}
.tags {
  display: flex;
}
.tags > div {
  margin: 5px;
  border-style: solid;
  color: #42b983;
  border-width: 0px 0px 1px 0px;
  font-size: 12px;
}
.blog_items {
  margin-top: 20px !important;
}
@media only screen and (max-width: 1300px) {
  .img_last_added {
    width: 200px;
    border-radius: 10px;
    cursor: pointer;
  }
  .hot_artist {
    flex-wrap: wrap;
  }
  .first_block {
    padding: 0px;
  }
}
@media only screen and (max-width: 767px) {
  .first_block > div {
    flex-direction: column;
  }
  .hot_artist {
    display: flex;
    justify-content: space-evenly;
  }
  .hot_artist > div {
    margin: 2px;
  }
  .blog_items {
    width: 100%;
    margin-top: 20px !important;
  }
}
@media only screen and (max-width: 576px) {
  .discover_title_big {
    font-size: 20px;
  }
  .img_last_added {
    width: 150px;
    border-radius: 10px;
    cursor: pointer;
  }
  .categories_block > div > span {
    font-size: 13px;
  }
  .blur_ground_carou {
    height: 400px;
  }
  .img_cate_gorie_carou {
    width: 80%;
    height: 150px;
    object-fit: cover;
  }
  .title_on_blur {
    bottom: -600px;
  }
  .top_effect_block {
    display: block;
    background: rgb(0, 0, 0, 0.2);
  }
  .top_effect_block_txt {
    top: 50px;
  }
  .bottom_effect_block_txt {
    bottom: 0;
  }

  .top_effect_block_txt {
    font-size: 15px;
    color: white;

    font-weight: bolder;
    right: -100px;
    transition: ease 0.3s all;
  }
}
@media only screen and (max-width: 576px) {
  .first_block_first {
    flex-direction: column;
  }
}
@media only screen and (max-width: 360px) {
  .play_btn_carou {
    bottom: 26%;
  }
}
.contact_title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Serif JP", serif;
  position: relative;
  top: -100px;
  margin-bottom: -90px;
}
.input_side {
  display: flex;
}
.input_side > div {
  width: 100%;
}
.flex-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 150px 25% 0 25%;
}

.box_nom_email {
  display: flex;
}
.box_nom_email > div {
  margin: 0px 20px 0px 20px;
}
input[type="text"] {
  width: 100%;
}
.box_objet {
  width: 100%;
}
.email_width {
  margin-left: 20px;
}

.box_envoi_message {
  background-color: #42b983;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 30px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 7px;
  padding-bottom: 7px;
  opacity: 0.9;
  transition: 0.4s ease;
}

.envoi-btn {
  margin: 20px 0px;
  background-color: #42b983;
  color: black;
  padding: 20px 30px;
  border-radius: 5px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  opacity: 0.9;
  transition: 0.4s ease;
  color: white;
}

.envoi-btn:hover {
  background-color: #2c3e50;
  color: white;
  opacity: 1;
  transition: 0.4s ease;
}

input {
  outline: 0;
  /* border-width: 0 0 3px; */
  /* border-color: #f5f5f5; */
  background-color: black;
  /* border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden; */
  /* border-bottom-style: groove; */
  background-color: #eee;
  margin-top: 6vh;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  padding: 10px 0px 10px 10px;
  color: #2c3e50;
  border-width: 0px;
}

.text_input {
  margin-bottom: -2px;
  margin-top: 2em;
  /* font-family: "Noto Serif JP", serif; */
  font-size: 13px;
  position: relative;
  top: -20px;
  margin-bottom: -20px;
}

.animation_champ {
  color: black;
  pointer-events: none;
  transition: 0.3s;
}

.animation_input {
  background-color: inherit;
  display: block;
  transition: 0.2s;
}

.animation_input:focus ~ label {
  top: -60px !important;
  font-size: 12px;
  color: #42b983;
  font-weight: bold;
}
label {
  font-size: 12px !important;
  text-transform: uppercase;
  top: -30px !important;
  left: 10px;
}
@media only screen and (max-width: 768px) {
  .flex-container {
    margin: 150px 15% 0 15%;
  }
}
@media only screen and (max-width: 360px) {
  .flex-container {
    margin: 150px 5% 0 5%;
  }
}
.loader {
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #42b983;
  width: 30px;
  height: 30px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>