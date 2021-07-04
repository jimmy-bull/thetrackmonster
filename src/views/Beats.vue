<template>
  <div class="recent_play">
    <div class="">
      <div class="open_filter_search" @click="open_pen_filter">
        <p class="filter_element">
          Filters <i class="fa fa-filter" aria-hidden="true"></i>
        </p>
      </div>
    </div>
    <div class="filter_box_desktop">
      <div>
        <multiselect
          class="select_style"
          placeholder="Genre"
          :options="options_genre"
          @select="genre_select"
          @remove="remove_genre"
          id="select_genre"
          v-model="value_genre"
        >
        </multiselect>
      </div>
      <div>
        <multiselect
          class="select_style"
          placeholder="Mood"
          :multiple="false"
          :close-on-select="true"
          v-model="value_mood"
          :options="options_mood"
          @select="mood_select"
          @remove="remove_mood"
        >
        </multiselect>
      </div>
      <div>
        <multiselect
          class="select_style"
          placeholder="Key"
          :multiple="false"
          :close-on-select="true"
          v-model="value_key"
          :options="options_key"
          @select="key_select"
          @remove="remove_key"
        >
        </multiselect>
      </div>
      <div>
        <multiselect
          class="select_style"
          placeholder="Downloadable"
          :close-on-select="true"
          v-model="value_downloadable"
          :options="options_downloadable"
          @select="download_select"
          @remove="remove_downloadable"
        >
        </multiselect>
      </div>
      <div class="price_block">
        <div>
          <span style="font-size: 12px">Price</span>
        </div>
        <div class="price_block_input">
          <div class="input_price" style="width: 100%">
            <Slider
              :max="max_price"
              v-model="price"
              :min="min_price"
              ref="slider_price"
              @change="getPriceValue"
            ></Slider>
          </div>
        </div>
      </div>
      <div class="price_block">
        <div>
          <span style="font-size: 12px">BPM</span>
        </div>
        <div class="price_block_input">
          <div class="input_price" style="width: 100%">
            <Slider
              :max="max_bpm"
              v-model="bpm"
              :min="min_bpm"
              ref="slider_bpm"
              @change="getBpmValue"
            ></Slider>
          </div>
        </div>
      </div>
    </div>
    <div style="search_result">
      <div
        v-for="(itemAll, indexy) in search_beats.data"
        :key="indexy"
        class="palylist_zone"
      >
        <div class="palylist_zone_2">
          <div class="rank_image_play_title">
            <div class="number_rank">
              <strong style="font-size: 13px">{{
                parseInt(indexy) + 1
              }}</strong>
            </div>
            <div class="img_palyer_list_box">
              <img class="img_palyer_list" :src="itemAll.image_link" alt="" />
            </div>
            <div
              class="player_list_btn_play"
              :id-ref="indexy"
              :item_id="indexy"
              :class_reference="itemAll.id"
              @click="play_from_data_base_all"
            >
              <i
                :class="`index--${itemAll.id}`"
                class="uil-play-circle fa-play-circle_palyer"
                aria-hidden="true"
              ></i>
            </div>
            <div class="title_tag_box">
              <div>
                <a class="title_insta title_o_instant">{{ itemAll.title }}</a>
              </div>
              <div class="tag_box enbas-tag">
                <div class="tag_content">
                  <span>
                    <a
                      target="blank"
                      class="title_insta instagram_link"
                      href="https://www.instagram.com/thetrackmonster/?hl=fr"
                      >{{ itemAll.instagram_name }}</a
                    ></span
                  >
                </div>
                <div class="tag_content">
                  <span>BPM: {{ itemAll.bpm }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="title_tag_box title_title_tag_box">
            <div>
              <a class="title_insta title_o_instant"
                >{{ itemAll.sub_title }} 🔥</a
              >
            </div>
            <div class="tag_box enbas-tag">
              <div
                v-for="(tags_item, tags_index) in tags.data"
                :key="tags_index"
              >
                <div
                  v-if="tags_item.foreign_id == itemAll.id"
                  class="tag_content"
                >
                  <span>
                    <router-link
                      class="link"
                      :to="{ path: '/search', query: { q: tags_item.tags } }"
                      >#{{ tags_item.tags }}
                    </router-link></span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="palyer_lisyt_time">
            <a class="title_insta" style="color: grey">
              {{ itemAll.duration }}</a
            >
          </div>
          <div class="buy_donwload_more_box">
            <div class="arrow_download_box_download">
              <i
                style="font-size: 12px"
                @click="moadal_sent"
                id="2345"
                class="fas fa-arrow-down"
              ></i>
            </div>
            <div @click="moadal_added_to_cart" class="arrow_download_box">
              <span style="font-size: 12px">
                <i data-v-68eae891="" class="uil uil-shopping-bag"></i>
                ${{ itemAll.price }}
              </span>
            </div>
            <div class="dot_box">
              <div>
                <i
                  style="font-size: 12px"
                  class="fa fa-share"
                  aria-hidden="true"
                  @click="moadal_share"
                  link_to_share="http://localhost:8080/beats-lilwayne-34685"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="block_filter_box_on_mobile">
      <div class="block_filter_box_on_mobile_header">
        <div>Filters</div>
        <div @click="close_filter"><i class="fas fa-window-close"></i></div>
      </div>
      <div style="padding: 20px">
        <div>
          <multiselect
            class="select_style"
            placeholder="Genre"
            :options="options_genre"
            @select="genre_select"
            @remove="remove_genre"
            id="select_genre"
            v-model="value_genre"
          >
          </multiselect>
        </div>
        <div>
          <multiselect
            class="select_style"
            placeholder="Mood"
            :multiple="false"
            :close-on-select="true"
            v-model="value_mood"
            :options="options_mood"
            @select="mood_select"
            @remove="remove_mood"
          >
          </multiselect>
        </div>
        <div>
          <multiselect
            class="select_style"
            placeholder="Key"
            :multiple="false"
            :close-on-select="true"
            v-model="value_key"
            :options="options_key"
            @select="key_select"
            @remove="remove_key"
          >
          </multiselect>
        </div>
        <div>
          <multiselect
            class="select_style"
            placeholder="Downloadable"
            :close-on-select="true"
            v-model="value_downloadable"
            :options="options_downloadable"
            @select="download_select"
            @remove="remove_downloadable"
          >
          </multiselect>
        </div>
        <!-- <div>
          <multiselect
            class="select_style"
            placeholder="Duration"
            :close-on-select="true"
            v-model="selected_duration"
            :options="options_duration"
          >
          </multiselect>
        </div> -->
        <div class="price_block" style="width: 100%">
          <div>
            <span style="font-size: 12px">Price</span>
          </div>
          <div class="price_block_input" style="width: 100%">
            <div class="input_price" style="width: 100%">
              <Slider
                :max="max_price"
                v-model="price"
                :min="min_price"
                ref="slider_price"
                @change="getPriceValue"
              ></Slider>
            </div>
          </div>
        </div>
        <div class="price_block" style="width: 100%">
          <div>
            <span style="font-size: 12px">BPM</span>
          </div>
          <div class="price_block_input">
            <div class="input_price" style="width: 100%">
              <Slider
                :max="max_bpm"
                v-model="bpm"
                :min="min_bpm"
                ref="slider_bpm"
                @change="getBpmValue"
              ></Slider>
            </div>
          </div>
        </div>
        <div style="width: 100%">
          <button
            @click="close_filter"
            style="width: 100%"
            _ngcontent-uxy-c270=""
            mat-button=""
            type="button"
            class="mat-focus-indicator btn-send mat-button mat-button-base"
          >
            <span class="mat-button-wrapper"> See Result </span>
            <div matripple="" class="mat-ripple mat-button-ripple"></div>
            <div class="mat-button-focus-overlay"></div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.filter_element {
  position: fixed;
  z-index: 1000;

  background: #1b1b1b;
  padding: 5px 15px 5px 15px;
  border-radius: 10px;
}
.price_block {
  width: 30%;
}
.btn-send[_ngcontent-uxy-c270] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 0;
  height: 44px;
  font-family: Poppins, Roboto, Helvetica Neue, sans-serif;
  font-size: 14px;
  line-height: 14px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  width: auto;
  padding: 0 30px;
  margin: 20px 0 10px;
  background: #42b983;
  color: white;
  border-width: 0px;
}
.block_filter_box_on_mobile_header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.block_filter_box_on_mobile {
  height: 0%;
  width: 100%;
  position: fixed;
  z-index: 100000000000000000000000000000 !important;
  bottom: 0;
  background: #0a0a09 !important;
  overflow-x: hidden;
  transition: 0.3s;
  padding-top: 10px;
  left: 0;
}
.open_filter_search {
  display: none;
}
.price_block {
  display: flex;
  flex-direction: column;
}
.price_block_input {
  display: flex;
  align-items: center;
  justify-content: center;
}
.filter_box_desktop {
  display: flex;
  margin-bottom: 30px;
  margin-top: 30px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.filter_box_desktop div {
  margin: 0px 2px 0px 2px;
}
.modal_added_to_cart {
  display: none;
}
.modal_download {
  display: none;
}
.modal_share {
  display: none;
}
.pop_element {
  position: absolute;
  padding: 8px;
  max-width: 100%;
  max-height: 100%;
  box-shadow: 0 0 18px 0 rgb(0 0 0 / 25%);
  background-color: #1b1b1b;
  border-radius: 5px !important;
  right: 30px;
}
.dot_box {
  display: flex;
  flex-direction: column;
}
.palylist_zone:hover {
  cursor: pointer;
}
.buy_donwload_more_box {
  display: flex;
  justify-content: space-between;
}
.buy_donwload_more_box > div {
  margin: 5px;
}
.arrow_download_box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px 10px 1px 10px;
  border-radius: 3px;
  background: #42b983;
}
.img_palyer_list {
  width: 50px;
  height: 50px;
  border-radius: 3px;
  object-fit: cover;
  background: #f1f1f1;
}
.rank_image_play_title {
  display: flex;
  align-items: center;
}
.rank_image_play_title > div {
  margin: 5px;
}
.title_tag_box {
  display: flex;
  flex-direction: column;
}
.title_tag_box > div {
  margin-bottom: 5px;
}
.tag_box {
  display: flex;
  justify-content: center;
}
.tag_content {
  border: 1px solid hsla(0, 0%, 98%, 0.25);
  /* border-radius: 15px; */
  padding: 6px 16px;
  display: flex;
  align-items: center;
  max-width: 135px;
  margin-right: 10px;
  overflow: hidden;
  color: #9f9f9f;
}
.tag_content span {
  font-size: 10px;
}

*:focus {
  outline: 0 !important;
}

.title_insta {
  font-size: 13px;
}
.instagram_link {
  color: #42b983;
}
/* .search_box {
  margin-top: 50px;
  width: 50%;
  line-height: 20px;
  font-family: "Bodoni Moda", serif;
  color: #f1f1f1;
  background: transparent;
  border-width: 0px;
  border-color: #f1f1f1;
  margin-bottom: 50px;
  padding: 5px;
} */
.price_box {
  width: 100%;
  font-family: "Bodoni Moda", serif;
  color: #f1f1f1;
  background: #0a0a09;
  border-width: 0px 0px 1px 0px;
}
/* .input_search_box {
  display: flex;
  justify-content: center;
}
.input_search_box > div {
  width: 70%;
} */
input:focus {
  outline: none;
}
button {
  appearance: none !important;
  border: none !important;
  outline: none !important;
}

.carousel_newest_beats .img_slide {
  margin: 5px;
  position: relative;
}
.carousel_newest_beats .img_slide img {
  border-radius: 5px;
  height: 250px;
  width: 100%;
  object-fit: cover;
  background: #f1f1f1;
  position: relative;
  transition: ease 0.5s;
}
.carousel_newest_beats .img_slide img:hover {
  opacity: 0.7;
  cursor: pointer;
  transform: scale(1.02, 1.03);
}
.player_btn {
  position: absolute;
  left: 40%;
  top: 40%;
  background: transparent;
  border-width: 2px;
  border-color: #42b983;
  border-style: solid;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  transition: ease 0.5s;
}
.player_btn:hover {
  transform: scale(1.1, 1.1);
}

.carou_title {
  position: absolute;
  color: white;
}

.title_sub_title_block {
  position: absolute;

  z-index: 100000000;
}

.fa-play-circle_palyer {
  font-size: 40px;
  cursor: pointer;
}
.modal_added_to_cart {
  display: none;
}
.modal_download {
  display: none;
}
.modal_share {
  display: none;
}
.pop_element {
  position: absolute;
  padding: 8px;
  max-width: 100%;
  max-height: 100%;
  box-shadow: 0 0 18px 0 rgb(0 0 0 / 25%);
  background-color: #1b1b1b;
  border-radius: 5px !important;
  right: 30px;
}
.dot_box {
  display: flex;
  flex-direction: column;
}
.palylist_zone:hover {
  cursor: pointer;
}
.buy_donwload_more_box {
  display: flex;
  justify-content: space-between;
}
.buy_donwload_more_box > div {
  margin: 5px;
}
.arrow_download_box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px 10px 1px 10px;
  border-radius: 3px;
  background: #42b983;
}
.img_palyer_list {
  width: 50px;
  height: 50px;
  border-radius: 3px;
  object-fit: cover;
  background: #f1f1f1;
}
.rank_image_play_title {
  display: flex;
  align-items: center;
}
.rank_image_play_title > div {
  margin: 5px;
}
.title_tag_box {
  display: flex;
  flex-direction: column;
}
.title_tag_box > div {
  margin-bottom: 5px;
}
.tag_box {
  display: flex;
  justify-content: center;
}
.tag_content {
  border: 1px solid hsla(0, 0%, 98%, 0.25);
  /* border-radius: 15px; */
  padding: 6px 16px;
  display: flex;
  align-items: center;
  max-width: 135px;
  margin-right: 10px;
  overflow: hidden;
  color: #9f9f9f;
}
.tag_content span {
  font-size: 10px;
}
.palylist_zone {
  display: flex;
  flex-direction: column;
  transition: ease 0.5s;
}
.palylist_zone > div {
  /* margin-top: 30px; */
  border-style: solid;
  border-width: 1px 0px 0px 0px;
  border-right-color: none;
  max-width: 100%;
  border-radius: 2px;
  padding: 10px 20px 10px 20px;
  /* border-color: #42b983; */
  align-items: center; /* Vertical */
}
.palylist_zone > div:hover {
  background: rgba(144, 238, 144, 0.1);
}
.palylist_zone_2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

*:focus {
  outline: 0 !important;
}

.title_insta {
  font-size: 13px;
}
.instagram_link {
  color: #42b983;
}
/* .search_box {
  margin-top: 50px;
  width: 50%;
  line-height: 20px;
  font-family: "Bodoni Moda", serif;
  color: #f1f1f1;
  background: transparent;
  border-width: 0px 0px 1px 0px;
} */

input:focus {
  outline: none;
}
button {
  appearance: none !important;
  border: none !important;
  outline: none !important;
}

.carousel_newest_beats .img_slide {
  padding: 5px;
  position: relative;
}
.carousel_newest_beats .img_slide img {
  border-radius: 5px;
  height: 250px;
  width: 100%;
  object-fit: cover;
  background: #f1f1f1;
  position: relative;
  transition: ease 0.5s;
}
.carousel_newest_beats .img_slide img:hover {
  opacity: 0.7;
  cursor: pointer;
  transform: scale(1.02, 1.03);
}
.player_btn {
  position: absolute;
  left: 40%;
  top: 40%;
  background: transparent;
  border-width: 2px;
  border-color: #42b983;
  border-style: solid;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  transition: ease 0.5s;
}
.player_btn:hover {
  transform: scale(1.1, 1.1);
}

.carou_title {
  position: absolute;
  color: white;
}

@media only screen and (max-width: 750px) {
  .enbas-tag {
    display: none;
  }
}
@media only screen and (max-width: 576px) {
  /* .carousel_newest_beats .img_slide {
    margin: 0px;
  } */
  .player_btn {
    height: 10px;
    width: 10px;
    padding: 10px;
  }
  .title_title_tag_box,
  .tag_box,
  .palyer_lisyt_time {
    display: none;
  }
  .carousel_newest_beats .img_slide img {
    height: 150px;
  }

  /* .search_box {
    margin-top: 0px;
    width: 100%;
  } */
  .palylist_zone > div {
    padding: 5px;
  }
}
@media only screen and (max-width: 375px) {
  .number_rank,
  .player_list_btn_play {
    display: none;
  }
}

@media only screen and (max-width: 750px) {
  .enbas-tag {
    display: none;
  }
}

.title_sub_title_block {
  position: absolute;
  z-index: 100000000;
}
@media only screen and (max-width: 1200px) {
  .enbas-tag {
    display: none;
  }
  .filter_element {
    left: 50%;
    bottom: 20%;
  }
}
@media only screen and (max-width: 992px) {
  .filter_box_desktop {
    display: none;
  }

  .open_filter_search {
    display: flex;
    justify-content: center;
    position: relative;
    width: 10% !important;
    cursor: pointer;
  }
}
@media only screen and (max-width: 375px) {
  .number_rank,
  .player_list_btn_play {
    display: none;
  }
  /* .input_search_box_mobile {
    width: 70% !important;
  } */
  .open_filter_search {
    display: flex;
    justify-content: center;
    width: 30% !important;
    cursor: pointer;
  }
}
@media only screen and (max-width: 1024px) {
  .filter_box_desktop {
    justify-content: flex-start;
  }
}
@media only screen and (max-width: 768px) {
  .filter_element {
    left: 50%;
    bottom: 10%;
  }
}
@media only screen and (max-width: 576px) {
  /* .carousel_newest_beats .img_slide {
    margin: 0px;
  } */
  .player_btn {
    height: 10px;
    width: 10px;
    padding: 10px;
  }
  .title_title_tag_box,
  .tag_box,
  .palyer_lisyt_time {
    display: none;
  }
  .carousel_newest_beats .img_slide img {
    height: 150px;
  }
  /* .input_search_box {
    margin: 0% 2% 5% 2%;
  } */
  /* .search_box {
    margin-top: 0px !important;
    width: 100%;
  } */
  .palylist_zone > div {
    padding: 5px;
  }
  /* .input_search_box_mobile {
    width: 60% !important;
  } */

  .open_filter_search {
    display: block;

    width: 20% !important;
    cursor: pointer;
  }
  .filter_element {
    left: 40%;
    bottom: 15%;
  }
}
</style>
<style src="@vueform/multiselect/themes/default.css"></style>
<style src="@vueform/slider/themes/default.css"></style>
<script>
import Multiselect from "@vueform/multiselect";
import Slider from "@vueform/slider";
import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "Search",
  data() {
    return {
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
      base_url: "http://127.0.0.1:8000",
      options_moody: "",
      search_result: [],
      url_object: {},
      value_genre: "",
      value_mood: "",
      value_key: "",
      value_downloadable: "",
      search_beats: "",
      tags: "",
      axiosConfig: "",
    };
  },
  computed: {
    ...mapState([
      "id",
      "link_to_share",
      "play_list",
      "play_current",
      "id_current_play",
      "playing",
      "item_id_cur_play",
      "class_reference",
    ]),
  },
  components: {
    Multiselect,
    Slider,
  },
  mounted() {
    let axiosConfig = {
      headers: {
        "Content-Type": "audio/mp3",
      },
    };
    axios.get(this.base_url + "/api/moods", axiosConfig).then((response) => {
      for (let mood in response.data) {
        this.options_mood.push(response.data[mood].mood);
      }
    });
    axios.get(this.base_url + "/api/genre", axiosConfig).then((response) => {
      for (let genre in response.data) {
        this.options_genre.push(response.data[genre].genre);
      }
    });
    axios.get(this.base_url + "/api/keys", axiosConfig).then((response) => {
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
        this.value_genre = this.url_object.genre;
      }
      if (Object.prototype.hasOwnProperty.call(this.url_object, "key")) {
        this.value_key = this.url_object.key;
      }
      if (Object.prototype.hasOwnProperty.call(this.url_object, "mood")) {
        this.value_mood = this.url_object.mood;
      }
      if (
        Object.prototype.hasOwnProperty.call(this.url_object, "downloadable")
      ) {
        this.value_downloadable = this.url_object.downloadable;
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
        this.base_url + "/api/search_engine/" + JSON.stringify(this.url_object),
        axiosConfig
      )
      .then((response) => {
        this.search_beats = response;
      });
    console.log(this.search_beats);
    axios
      .get(this.base_url + "/api/tags", axiosConfig)
      .then((response) => (this.tags = response));
    //console.log(this.all_beats)
  },
  watch: {
    $route() {
      if (!this.$route.query.genre) {
        if (Object.prototype.hasOwnProperty.call(this.url_object, "genre")) {
          this.value_genre = "";
          delete this.url_object["genre"];
        }
      } else if (this.$route.query.genre) {
        this.value_genre = this.$route.query.genre;
        this.url_object["genre"] = this.$route.query.genre;
      }

      if (!this.$route.query.mood) {
        if (Object.prototype.hasOwnProperty.call(this.url_object, "mood")) {
          this.value_mood = "";
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
          Object.prototype.hasOwnProperty.call(this.url_object, "downloadable")
        ) {
          this.value_downloadable = "";
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
          this.base_url +
            "/api/search_engine/" +
            JSON.stringify(this.url_object),
          this.axiosConfig
        )
        .then((response) => {
          this.search_beats = response;
          // alert( this.all_beats[0].bpm)
        });
    },
  },

  methods: {
    moadal_sent(event) {
      this.id = event.target.getAttribute("id");
      document.querySelector(".modal_download").style.display = "flex";
    },
    moadal_share(event) {
      this.link_to_share = event.target.getAttribute("link_to_share");
      document.querySelector(".modal_share").style.display = "flex";
    },
    moadal_added_to_cart() {
      document.querySelector(".modal_added_to_cart").style.display = "flex";
    },
    open_pen_filter() {
      document.querySelector(".block_filter_box_on_mobile").style.height =
        "100%";
    },
    close_filter() {
      document.querySelector(".block_filter_box_on_mobile").style.height = "0%";
    },
    search_form(event) {
      event.preventDefault();
    },
    url_object_function(object_add, value, url_object, router) {
      if (window.location.href.split("?")[1] == undefined) {
        url_object[object_add] = value;
        router.replace({
          path: "search",
          query: url_object,
        });
      } else {
        if (Object.prototype.hasOwnProperty.call(url_object, object_add)) {
          url_object[object_add] = value;
        } else {
          url_object[object_add] = value;
        }
        router.push({
          path: "search",
          query: url_object,
        });
      }
    },
    delete_url_object_function(object_add, url_object, router) {
      if (Object.prototype.hasOwnProperty.call(url_object, object_add)) {
        delete url_object[object_add];
      }
      router.push({
        path: "search",
        query: url_object,
      });
    },
    submit(event) {
      // if (event.code === "Enter") {
      this.url_object_function(
        "q",
        event.currentTarget.value,
        this.url_object,
        this.$router
      );
      //}
    },
    genre_select(value) {
      this.url_object_function("genre", value, this.url_object, this.$router);
    },
    remove_genre() {
      this.delete_url_object_function("genre", this.url_object, this.$router);
    },
    mood_select(value) {
      this.url_object_function("mood", value, this.url_object, this.$router);
    },
    remove_mood() {
      this.delete_url_object_function("mood", this.url_object, this.$router);
    },
    key_select(value) {
      this.url_object_function("key", value, this.url_object, this.$router);
    },
    remove_key() {
      this.delete_url_object_function("key", this.url_object, this.$router);
    },
    download_select(value) {
      this.url_object_function(
        "downloadable",
        value,
        this.url_object,
        this.$router
      );
    },
    remove_downloadable() {
      this.delete_url_object_function(
        "downloadable",
        this.url_object,
        this.$router
      );
    },
    getPriceValue() {
      let price_final = "";
      for (
        let index = 0;
        index < this.$refs.slider_price.getValue().length;
        index++
      ) {
        if (index <= this.$refs.slider_price.getValue().length) {
          price_final += this.$refs.slider_price.getValue()[index] + "-";
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
      for (
        let index = 0;
        index < this.$refs.slider_bpm.getValue().length;
        index++
      ) {
        if (index <= this.$refs.slider_bpm.getValue().length) {
          bpm_final += this.$refs.slider_bpm.getValue()[index] + "-";
        }
      }
      this.url_object_function(
        "bpm",
        bpm_final.substring(0, bpm_final.length - 1),
        this.url_object,
        this.$router
      );
    },
    play_from_data_base_all(event) {
      let take_id = event.currentTarget.getAttribute("id-ref");
      let item_id = event.currentTarget.getAttribute("item_id");
      let class_reference = event.currentTarget.getAttribute("class_reference");

      let elementI = document.getElementsByClassName(
        "index--" + class_reference
      );

      for (let it = 0; it < elementI.length; it++) {
        if (this.playing == false) {
          this.$store.dispatch("new_item_id_current_play", item_id);
          this.$store.dispatch("class_reference", class_reference);
          elementI[it].classList.replace("uil-play-circle", "uil-pause-circle");
        } else if (this.playing == true) {
          if (class_reference != this.class_reference) {
            elementI[it].classList.replace(
              "uil-play-circle",
              "uil-pause-circle"
            );
            let elementINew = document.getElementsByClassName(
              "index--" + this.class_reference
            );

            for (let itN = 0; itN < elementINew.length; itN++) {
              elementINew[itN].classList.replace(
                "uil-pause-circle",
                "uil-play-circle"
              );
            }
            this.$store.dispatch("new_item_id_current_play", item_id);
            this.$store.dispatch("class_reference", class_reference);
          } else if (class_reference == this.class_reference) {
            elementI[it].classList.replace(
              "uil-pause-circle",
              "uil-play-circle"
            );
            this.$store.dispatch("new_item_id_current_play", item_id);
            this.$store.dispatch("class_reference", class_reference);
          }
        }
      }

      const originalObj = {};
      this.$store.dispatch("play_current", originalObj);
      this.$store.dispatch("play_list", originalObj);

      this.$store.dispatch("play_current", this.search_beats.data[take_id]);
      this.$store.dispatch("play_list", this.search_beats.data);

      this.$store.dispatch("play_pause_playlist", {
        audio: document.querySelector(".audio_player"),
        id_play: class_reference,
        id_current_play: take_id,
      });
    },
    open_menu() {
      document.querySelector(".block_menu_on_mobile").style.width = "100%";
    },
    close_menu() {
      document.querySelector(".block_menu_on_mobile").style.width = "0%";
    },
  },
};
</script>