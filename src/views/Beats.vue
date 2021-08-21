<template>
  <Share
    :open_modal="open_share"
    :link_share="link_share"
    @close_share_function="close_share_function"
  ></Share>
  <FreeBeats
    :open_modalfree="open_free"
    :free_beats_id="free_beats_id"
    @close_free_beats_function="close_free_beats_function"
  ></FreeBeats>
  <div class="filter_zone">
    <div class="select">
      <select
        @change="genre_select"
        name="slct"
        id="slct"
        v-model="value_genre"
      >
        <option>Genre</option>
        <option
          v-for="(option, index) in options_genre"
          :key="index"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </div>
    <div class="select">
      <select @change="mood_select" name="slct" id="slct" v-model="value_mood">
        <option>Mood</option>
        <option
          v-for="(option, index) in options_mood"
          :key="index"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </div>

    <!-- <div class="select">
      <select @change="key_select" name="slct" id="slct" v-model="value_key">
        <option>Key</option>
        <option
          v-for="(option, index) in options_key"
          :key="index"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </div> -->

    <div class="select">
      <select
        @change="downloadable_select"
        name="slct"
        id="slct"
        v-model="value_downloadable"
      >
        <option>Downloadable</option>
        <option
          v-for="(option, index) in options_downloadable"
          :key="index"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </div>
    <div>
      <Slider
        style="margin-top: 20px"
        :max="max_price"
        v-model="price"
        :min="min_price"
        ref="slider_price"
        @change="getPriceValue"
      ></Slider>
      <p style="font-size: 13px">Price</p>
    </div>
    <div>
      <Slider
        style="margin-top: 20px"
        :max="max_bpm"
        v-model="bpm"
        :min="min_bpm"
        ref="slider_bpm"
        @change="getBpmValue"
      ></Slider>
      <p style="font-size: 13px">BPM</p>
    </div>
  </div>
  <!-- <div class="search_div">
    <input
      class="search_input"
      type="text"
      placeholder="Search for beats "
      name=""
      id=""
    />
  </div> -->
  <div
    v-if="typeof search_beats.data !== 'undefined'"
    class="play_list_parent_s"
    style="margin-top: 50px"
  >
    <div class="play_list_block_playlist">
      <div class="image_zone">
        <div></div>
        <div class="image_box"></div>
        <div style="color: lightgrey">Title</div>
      </div>
      <div class="minute_box_big">
        <div class="minute_box">
          <span style="color: lightgrey"> Tags</span>
        </div>
      </div>
    </div>
    <div
      class="play_list_block_playlist"
      v-for="(item, index) in search_beats.data"
      :key="index"
      @click="play_liste"
      :item_id="index"
      :class_referenceP="item.id"
      :class="`playlist--${item.id}`"
    >
      <div
        class="image_zone"
        :class="`pindex--${index}`"
        :class_referenceP="item.id"
      >
        <div>{{ index + 1 }}</div>
        <div class="image_box">
          <img :src="item.image_link" alt="" />
        </div>
        <div>
          <span class="somewhere_playlist"
            ><router-link
              class="somewhere_playlist"
              :to="{
                name: 'beats-desc',
                params: { name: item.beat_link, id: item.id },
              }"
              >{{ item.title }}
            </router-link></span
          >
        </div>
      </div>
      <div class="minute_box_big">
        <div class="minute_box">
          <span class="little_bpm_div_2"> {{ item.duration }}</span>
        </div>
        <div class="bpm_box">
          <span class="little_bpm_div_2"
            >{{ item.bpm }} <span class="little_bpm_div">BPM</span></span
          >
        </div>
        <div class="tag_box">
          <div v-for="(tags_item, tags_index) in tags.data" :key="tags_index">
            <div
              class="tags_element somewhere_playlist"
              v-if="tags_item.foreign_id == item.id"
            >
              <span class="somewhere_playlist">
                <router-link
                  style="color: #42b983"
                  class="link somewhere_playlist"
                  :to="{ path: '/beats', query: { q: tags_item.tags } }"
                  >#{{ tags_item.tags }}
                </router-link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="buy_share_block somewhere_playlist">
        <div
          style="cursor: pointer"
          @click="open_share_function"
          class="hide_on_576 somewhere_playlist"
          :link_share="'beats-desc/' + item.beat_link + '/' + item.id"
        >
          <unicon
            :link_share="'beats-desc/' + item.beat_link + '/' + item.id"
            class="somewhere_playlist"
            name="share-alt"
            fill="#42b983"
          />
        </div>
        <div class="btn_buy_player somewhere_playlist hide_on_576">
          <div class="hide_on_576">
            <div class="somewhere_playlist">
              <unicon   v-if="item.downloadable == 'false'"
                class="somewhere_playlist"
                name="shopping-bag"
                width="15"
                height="15"
                fill="white"
              />
              <unicon   v-if="item.downloadable == 'true'"
                class="somewhere_playlist"
                name="import"
                width="15"
                height="15"
                fill="white"
              />
            </div>
          </div>
          <div
            class="price_txt somewhere_playlist"
            v-if="item.downloadable == 'true'"
            :free_beats_id="item.id"
            @click="open_free_beats_function" 
          >
            <span
              class="somewhere_playlist"
              style="color: white; font-size: 15px"
              >Free</span
            >
          </div>
          <div
            class="price_txt somewhere_playlist"
            v-if="item.downloadable == 'false'"
          >
            <span
              class="somewhere_playlist"
              style="color: white; font-size: 15px"
              >${{ item.price }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <div
      style="display: flex; justify-content: center"
      v-if="search_beats.data.length == 0"
    >
      <img class="logo" src="../../public/not_found.png" alt="" />
    </div>
  </div>
  <div
    v-else
    style="display: flex; justify-content: center; align-items: center"
  >
    <div class="loader"></div>
  </div>
</template>
<style scoped>
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
/* Reset Select */
.little_bpm_div {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px solid white;
  background-color: #42b983;
  color: white;
  border-radius: 3px;
  font-size: 8px;
  padding-left: 5px;
  padding-right: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
.little_bpm_div_2 {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px solid white;
  background-color: #42b983;
  color: white;
  border-radius: 3px;
  font-size: 15px;
  padding-left: 5px;
  padding-right: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border-color: #42b983;
  background: white;
  background-image: none;
}
/* Remove IE arrow */
select::-ms-expand {
  display: none;
}
/* Custom Select */
.select {
  position: relative;
  display: flex;
  width: 20em;
  height: 3em;
  line-height: 3;
  background: #42b983;
  overflow: hidden;
  border-radius: 0.25em;
}
select {
  flex: 1;
  padding: 0 0.5em;
  color: grey;
  cursor: pointer;
}
/* Arrow */
.select::after {
  content: "\25BC";
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 1em;
  background: #42b983;
  cursor: pointer;
  pointer-events: none;
  -webkit-transition: 0.25s all ease;
  -o-transition: 0.25s all ease;
  transition: 0.25s all ease;
  color: white !important;
}
/* Transition */
.select:hover::after {
}

.search_div {
  width: 100%;
  display: flex;
  align-items: center;
}
.search_input {
  width: 100%;
  border-width: 0px;
  background-image: url("../../public/search.png");
  background-repeat: no-repeat;
  background-position: 98%;
  box-shadow: 0 10px 15px rgb(25 25 25 / 10%);
  padding: 10px 0px 10px 10px;
  color: #2c3e50;
  margin: 20px 20% 20px 20%;
}
.filter_zone {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.filter_zone > div {
  width: 30%;
  margin: 20px;
}
.select_style {
  width: 100%;
}
@media only screen and (max-width: 768px) {
  .filter_zone > div {
    width: 40%;
    margin: 5px 20px 5px 20px;
  }
}
@media only screen and (max-width: 400px) {
  .filter_zone > div {
    width: 40%;
    margin: 5px 5px 5px 5px;
  }
}
.btn_buy_player {
  background: #42b983;
  display: flex;
  padding: 2px 15px 5px 15px;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: pointer;
}
.btn_buy_player > div {
  margin: 0 2px 0 2px;
}
.tags_element > span {
  font-size: 12px;
}
.tags_element {
  border-style: solid;
  padding: 0px 5px 2px 5px;
  border-width: 1px;
  border-color: #42b983;
  color: #42b983;
}
.tag_box {
  display: flex;
  align-items: center;
}
.tag_box > div {
  margin: 0px 3px 0px 3px;
}
.play_list_block_playlist {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin: 0px 50px 0px 50px;
}
.image_box img {
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 3px;
}

.image_zone,
.minute_box_big,
.buy_share_block {
  display: flex;
  align-items: center;
  height: 50px;
}
.image_zone > div {
  margin: 20px 5px 0px 5px;
}
.minute_box_big > div {
  margin: 20px 35px 0px 35px;
}
.buy_share_block > div {
  margin: 20px 15px 0px 15px;
}
@media only screen and (max-width: 768px) {
  .tag_box {
    display: none;
  }
}
@media only screen and (max-width: 600px) {
  .minute_box_big {
    display: none;
  }
  .play_list_block_playlist {
    margin: 0px 10px 0px 10px;
  }
  .search_input {
    margin: 50px 10% 0px 10%;
  }
}
@media only screen and (max-width: 360px) {
  .price_txt {
    display: none !important;
  }
}
</style>
<style src="@vueform/multiselect/themes/default.css"></style>
<style src="@vueform/slider/themes/default.css"></style>
<style scoped>
.image_zone {
  width: 30%;
  /* background: purple; */
}

.buy_share_block {
  width: 20%;
  /* background: blue; */
  justify-content: flex-end;
}
.minute_box_big {
  width: 50%;
  /* background: red; */
}
.btn_buy_player {
  background: #42b983;
  display: flex;
  padding: 2px 15px 5px 15px;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: pointer;
}
.btn_buy_player > div {
  margin: 0 2px 0 2px;
}
.tags_element > span {
  font-size: 12px;
}
.tags_element {
  border-style: solid;
  padding: 0px 5px 2px 5px;
  border-width: 1px;
  border-color: #42b983;
  color: #42b983;
}
.tag_box {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.tag_box .tags_element {
  margin: 0px 3px 0px 3px;
}
.play_list_block_playlist {
  display: flex;
  cursor: pointer;
  margin: 0px 3% 0px 3%;
  padding-bottom: 15px;
  border-radius: 3px;
  /* background: green; */
}
.image_box img {
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 3px;
}

.image_zone,
.minute_box_big,
.buy_share_block {
  display: flex;
  align-items: center;
  height: 50px;
}
.image_zone > div {
  margin: 20px 5px 0px 5px;
}
.minute_box_big > div {
  margin: 20px 35px 0px 35px;
}
.buy_share_block > div {
  margin: 20px 15px 0px 15px;
}
@media only screen and (max-width: 1024px) {
  .tag_box {
    display: none;
  }
  .minute_box_big {
    display: none;
  }
  .play_list_block_playlist {
    justify-content: space-between;
  }
  .image_zone {
    width: 50%;
  }

  .buy_share_block {
    width: 50%;
  }
}
@media only screen and (max-width: 600px) {
  .minute_box_big {
    display: none;
  }
  .play_list_block_playlist {
    margin: 0px 10px 0px 10px;
  }
}
@media only screen and (max-width: 360px) {
  .price_txt {
    display: none !important;
  }
}
</style>
<script>
// import Multiselect from "@vueform/multiselect";
import Slider from "@vueform/slider";
// import axios from "axios";
// import { mapState } from "vuex";
//  @select="genre_select"
//         @remove="remove_genre"
import axios from "axios";
import { mapState } from "vuex";
import Share from "@/components/Share.vue";
import FreeBeats from "@/components/FreeBeats.vue";
export default {
  name: "Search",
  data() {
    return {
      link_share: "",
      open_share: false,
      open_free: false,
      free_beats_id: 0,
      selected_genre: [],
      selected_mood: [],
      selected_key: [],
      selected_downloadable: [],
      options_genre: [],
      options_mood: [],
      options_key: [],
      options_downloadable: ["true", "false"],
      price: [10, 50],
      max_price: 50,
      min_price: 10,
      bpm: [95, 150],
      max_bpm: 150,
      min_bpm: 95,
      base_url: "https://49keysbanger.com/public/",
      options_moody: "",
      search_result: [],
      url_object: {},
      value_genre: "Genre",
      value_mood: "Mood",
      value_key: "Key",
      value_downloadable: "Downloadable",
      search_beats: [],
      tags: "",
      axiosConfig: "",
    };
  },
  props: {
    class_referenceProps: {
      type: Number,
    },
  },
  computed: {
    ...mapState([
      "domain_for_external_js_css_file",
      "play_current",
      "playing",
      "play_list",
    ]),
  },
  components: {
    // Multiselect,
    Slider,
    Share,
    FreeBeats,
  },
  created() {
    let axiosConfig = {
      headers: {
        "Content-Type": "audio/mp3",
      },
    };
    axios
      .get(this.domain_for_external_js_css_file + "api/genre", axiosConfig)
      .then((response) => {
        for (let genre in response.data) {
          this.options_genre.push(response.data[genre].genre);
        }
      });
    axios
      .get(this.domain_for_external_js_css_file + "api/moods", axiosConfig)
      .then((response) => {
        for (let mood in response.data) {
          this.options_mood.push(response.data[mood].mood);
        }
      });
    axios
      .get(this.domain_for_external_js_css_file + "api/keys", axiosConfig)
      .then((response) => {
        for (let keys in response.data) {
          this.options_key.push(response.data[keys].key);
        }
      });
    if (window.location.href.split("?")[1] != undefined) {
      let first_split_string = window.location.href.split("?")[1];
      let first_plit_array = first_split_string.split("&");
      for (let index = 0; index < first_plit_array.length; index++) {
        this.url_object[first_plit_array[index].split("=")[0]] =
          decodeURIComponent(first_plit_array[index].split("=")[1]);
      }

      if (Object.prototype.hasOwnProperty.call(this.url_object, "q")) {
        // document.getElementById("search_box").value = this.url_object.q;
      }
      if (Object.prototype.hasOwnProperty.call(this.url_object, "genre")) {
        this.value_genre = this.url_object.genre.replace("+", " ");
      }
      if (Object.prototype.hasOwnProperty.call(this.url_object, "key")) {
        this.value_key = this.url_object.key.replace("+", " ");
      }
      if (Object.prototype.hasOwnProperty.call(this.url_object, "mood")) {
        this.value_mood = this.url_object.mood.replace("+", " ");
      }
      if (
        Object.prototype.hasOwnProperty.call(this.url_object, "downloadable")
      ) {
        this.value_downloadable = this.url_object.downloadable.replace(
          "+",
          " "
        );
      }
      if (Object.prototype.hasOwnProperty.call(this.url_object, "price")) {
        let price_push = [];
        let split_price = this.url_object.price.split("-");
        for (let index = 0; index < split_price.length; index++) {
          price_push.push(split_price[index]);
        }
        this.price = price_push;
      }
      if (Object.prototype.hasOwnProperty.call(this.url_object, "bpm")) {
        let bpm_push = [];
        let split_bpm = this.url_object.bpm.split("-");
        for (let index = 0; index < split_bpm.length; index++) {
          bpm_push.push(split_bpm[index]);
        }
        this.bpm = bpm_push;
      }
    }
    axios
      .get(
        this.domain_for_external_js_css_file +
          "api/search_engine/" +
          JSON.stringify(this.url_object),
        axiosConfig
      )
      .then((response) => {
        this.search_beats = response;
        console.log(response);
      });
    axios
      .get(this.base_url + "api/Alltags", axiosConfig)
      .then((response) => (this.tags = response));
  },
  watch: {
    $route() {
      if (this.$route.path == "/beats") {
        if (!this.$route.query.genre) {
          if (Object.prototype.hasOwnProperty.call(this.url_object, "genre")) {
            this.value_genre = "Genre";
            delete this.url_object["genre"];
          }
        } else if (this.$route.query.genre) {
          this.value_genre = this.$route.query.genre.replace("+", " ");
          this.url_object["genre"] = this.$route.query.genre.replace("+", " ");
        }

        if (!this.$route.query.mood) {
          if (Object.prototype.hasOwnProperty.call(this.url_object, "mood")) {
            this.value_mood = "Mood";
            delete this.url_object["mood"];
          }
        } else if (this.$route.query.mood) {
          this.value_mood = this.$route.query.mood;
          this.url_object["mood"] = this.$route.query.mood;
        }
        if (!this.$route.query.key) {
          if (Object.prototype.hasOwnProperty.call(this.url_object, "key")) {
            this.value_key = "";
            delete this.url_object["key"];
          }
        } else if (this.$route.query.key) {
          this.value_key = this.$route.query.key;
          this.url_object["key"] = this.$route.query.key;
        }
        if (!this.$route.query.downloadable) {
          if (
            Object.prototype.hasOwnProperty.call(
              this.url_object,
              "downloadable"
            )
          ) {
            this.value_downloadable = "Downloadable";
            delete this.url_object["downloadable"];
          }
        } else if (this.$route.query.downloadable) {
          this.value_downloadable = this.$route.query.downloadable;
          this.url_object["downloadable"] = this.$route.query.downloadable;
        }
        if (!this.$route.query.q) {
          if (Object.prototype.hasOwnProperty.call(this.url_object, "q")) {
            // document.getElementById("search_box").value = "";
            delete this.url_object["q"];
          }
        } else if (this.$route.query.q) {
          // document.getElementById("search_box").value = this.$route.query.q;
          this.url_object["q"] = this.$route.query.q;
        }
        if (!this.$route.query.price) {
          if (Object.prototype.hasOwnProperty.call(this.url_object, "price")) {
            this.price = [10, 50];
            delete this.url_object["price"];
          }
        } else if (this.$route.query.price) {
          let price_push = [];
          let split_price = this.$route.query.price.split("-");
          for (let index = 0; index < split_price.length; index++) {
            price_push.push(split_price[index]);
          }
          this.price = price_push;
          this.url_object["price"] = this.$route.query.price;
        }
        if (!this.$route.query.bpm) {
          if (Object.prototype.hasOwnProperty.call(this.url_object, "bpm")) {
            this.bpm = [95, 150];
            delete this.url_object["bpm"];
          }
        } else if (this.$route.query.bpm) {
          let price_bpm = [];
          let split_bpm = this.$route.query.bpm.split("-");
          for (let index = 0; index < split_bpm.length; index++) {
            price_bpm.push(split_bpm[index]);
          }
          this.bpm = price_bpm;
          this.url_object["bpm"] = this.$route.query.bpm;
        }

        axios
          .get(
            this.domain_for_external_js_css_file +
              "api/search_engine/" +
              JSON.stringify(this.url_object),
            this.axiosConfig
          )
          .then((response) => {
            this.search_beats = response;
          });
      }
    },
  },

  methods: {
    genre_select(event) {
      if (event.currentTarget.value == "Genre") {
        // alert(event.currentTarget.value);
        this.delete_url_object_function("genre", this.url_object, this.$router);
      } else {
        this.url_object_function(
          "genre",
          event.currentTarget.value,
          this.url_object,
          this.$router
        );
      }
    },
    mood_select(event) {
      if (event.currentTarget.value == "Mood") {
        // alert(event.currentTarget.value);
        this.delete_url_object_function("mood", this.url_object, this.$router);
      } else {
        this.url_object_function(
          "mood",
          event.currentTarget.value,
          this.url_object,
          this.$router
        );
      }
    },
    key_select(event) {
      if (event.currentTarget.value == "Key") {
        // alert(event.currentTarget.value);
        this.delete_url_object_function("key", this.url_object, this.$router);
      } else {
        this.url_object_function(
          "key",
          event.currentTarget.value,
          this.url_object,
          this.$router
        );
      }
    },
    downloadable_select(event) {
      if (event.currentTarget.value == "Downloadable") {
        // alert(event.currentTarget.value);
        this.delete_url_object_function(
          "downloadable",
          this.url_object,
          this.$router
        );
      } else {
        this.url_object_function(
          "downloadable",
          event.currentTarget.value,
          this.url_object,
          this.$router
        );
      }
    },
    getPriceValue() {
      let price_final = "";
      for (let index = 0; index < this.price.length; index++) {
        if (index <= this.price.length) {
          price_final += this.price[index] + "-";
        }
      }
      this.url_object_function(
        "price",
        price_final.substring(0, price_final.length - 1),
        this.url_object,
        this.$router
      );
    },
    getBpmValue() {
      let bpm_final = "";
      for (let index = 0; index < this.bpm.length; index++) {
        if (index <= this.bpm.length) {
          bpm_final += this.bpm[index] + "-";
        }
      }
      this.url_object_function(
        "bpm",
        bpm_final.substring(0, bpm_final.length - 1),
        this.url_object,
        this.$router
      );
    },
    url_object_function(object_add, value, url_object, router) {
      if (window.location.href.split("?")[1] == undefined) {
        url_object[object_add] = value;
        router.replace({
          path: "beats",
          query: url_object,
        });
      } else {
        if (Object.prototype.hasOwnProperty.call(url_object, object_add)) {
          url_object[object_add] = value;
        } else {
          url_object[object_add] = value;
        }
        router.push({
          path: "beats",
          query: url_object,
        });
      }
    },
    delete_url_object_function(object_add, url_object, router) {
      if (Object.prototype.hasOwnProperty.call(url_object, object_add)) {
        delete url_object[object_add];
      }
      router.push({
        path: "beats",
        query: url_object,
      });
    },
    play_liste(event) {
      if (!event.target.matches(".somewhere_playlist")) {
        for (
          let index = 0;
          index < event.currentTarget.parentNode.children.length;
          index++
        ) {
          event.currentTarget.parentNode.children[index].style.background =
            "none";
        }
        event.currentTarget.style.background = "#eefdec";
        let item_id = event.currentTarget.getAttribute("item_id");
        let class_reference =
          event.currentTarget.getAttribute("class_referenceP");

        this.$store.dispatch("play_from_elements", {
          class_reference: class_reference,
          audio: document.querySelector(".track"),
          play_current: this.search_beats.data[item_id],
          play_list: this.search_beats.data,
          item_id: item_id,
        });
        this.$emit("open_playlist_box");
      }
    },
    // emit_from_playlist() { alert(document.querySelector(".play_list_parent_s").children.length)
    //   for (
    //     let index = 0;
    //     index < document.querySelector(".play_list_parent_s").children.length;
    //     index++
    //   ) {
    //     document.querySelector(".play_list_parent_s").children[
    //       index
    //     ].style.background = "none";
    //   }

    //   for (
    //     let index = 0;
    //     index <
    //     document.querySelectorAll(".playlist--" + this.class_referenceProps)
    //       .length;
    //     index++
    //   ) {
    //     document.querySelectorAll(".playlist--" + this.class_referenceProps)[
    //       index
    //     ].style.background = "#eefdec";
    //   }
    // },
    open_share_function(event) {
      this.open_share = true;
      this.link_share =
        "https://49keysbanger.com/" +
        event.currentTarget.getAttribute("link_share");
    },
    open_free_beats_function(event) {
      this.open_free = true;
      this.free_beats_id = event.currentTarget.getAttribute("free_beats_id");
    },
    close_share_function() {
      this.open_share = false;
    },
    close_free_beats_function() {
      this.open_free = false;
    },
  },
};
</script>
