<template>
  <div class="play_list_parent">
    <div id="myModal__" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close" @click="close_share_function">&times;</span>
        <div>
          <h2>Share Track</h2>
          <h5 style="color: #42b983">MARKETPLACE FULL URL</h5>
        </div>

        <div>
          <div class="search_div">
            <div class="search_input">
              <span>{{ link_share }}</span>
            </div>
            <div
              class="copy__"
              @click="copy"
              style="color: #42b983; cursor: pointer"
            >
              Copy
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="play_list_block_playlist"
      v-for="(item, index) in play_list"
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
          <router-link
            :to="{
              name: 'beats-desc',
              params: { name: item.beat_link, id: item.id },
            }"
          >
            <span class="somewhere_playlist">{{ item.title }}</span>
          </router-link>
        </div>
      </div>
      <div class="minute_box_big">
        <div class="minute_box">
          <span> {{ item.duration }}</span>
        </div>
        <div class="bpm_box">
          <span>{{ item.bpm }}</span>
        </div>
        <div class="tag_box">
          <div v-for="(tags_item, tags_index) in tags.data" :key="tags_index">
            <div
              class="tags_element somewhere_playlist"
              v-if="tags_item.foreign_id == item.id"
            >
              <span class="somewhere_playlist">#{{ tags_item.tags }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="buy_share_block">
        <div
          @click="open_share_function"
          :link_share="'beats-desc/' + item.beat_link + '/' + item.id"
          style="cursor: pointer"
          class="hide_on_576 somewhere_playlist"
        >
          <unicon
            @click="open_share_function"
            :link_share="'beats-desc/' + item.beat_link + '/' + item.id"
            class="somewhere_playlist"
            name="share-alt"
            fill="#42b983"
          />
        </div>
        <div
          class="btn_buy_player somewhere_playlist hide_on_576"
          v-if="item.downloadable == 'true'"
        >
          <div class="hide_on_576">
            <div class="somewhere_playlist">
              <unicon
                v-if="item.downloadable == 'false'"
                class="somewhere_playlist"
                name="shopping-bag"
                width="15"
                height="15"
                fill="white"
              />
              <unicon
                v-if="item.downloadable == 'true'"
                :free_beats_id="item.id"
                @click="open_free_beats_function_from_plalist"
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
            @click="open_free_beats_function_from_plalist"
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
        <div
          class="btn_buy_player somewhere_playlist hide_on_576"
          v-if="item.downloadable == 'false'"
          @click="open_cartModal_function_playlist"
          :price_get="item.price"
          :image_get="item.image_link"
          :title_get="item.title"
          :id_get="item.id"
        >
          <div class="hide_on_576">
            <div class="somewhere_playlist">
              <unicon
                class="somewhere_playlist"
                name="shopping-bag"
                width="15"
                height="15"
                fill="white"
              />
              <unicon
                v-if="item.downloadable == 'true'"
                :free_beats_id="item.id"
                @click="open_free_beats_function_from_plalist"
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
            @click="open_free_beats_function_from_plalist"
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
  </div>
</template>
<style scoped>
.search_input {
  width: 80%;
  border-width: 0px;
  box-shadow: 0 10px 15px rgb(25 25 25 / 10%);
  padding: 10px 0px 10px 10px;
  color: #2c3e50;
  overflow: hidden;
  border-radius: 5px;
}
.search_div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-items: center;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 100; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 50%; /* Could be more or less, depending on screen size */
  border-color: white;
  border-radius: 5px;
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
@media only screen and (max-width: 600px) {
  .search_input {
    margin: 50px 10% 0px 10%;
  }
}
@media only screen and (max-width: 768px) {
  .modal-content {
    width: 80%; /* Could be more or less, depending on screen size */
  }
  .search_div {
    flex-direction: column;
  }
  .search_div > div {
    margin-bottom: 20px;
  }
  .search_input {
    width: 100%;
  }
}
</style>
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
import { mapState } from "vuex";
import Axios from "axios";
export default {
  name: "Playlist",
  computed: {
    ...mapState(["play_list", "domain_for_external_js_css_file"]),
  },
  components: {},
  props: {
    class_referenceProps: {
      type: Number,
    },
  },
  data() {
    return {
      tags: "",
      open_free: false,
      free_beats_id: 0,
      link_share: "",
      open_share: false,
      open_modal: false,
    };
  },
  updated() {
    for (
      let index = 0;
      index < document.querySelector(".play_list_parent").children.length;
      index++
    ) {
      document.querySelector(".play_list_parent").children[
        index
      ].style.background = "none";
    }
    if (this.$route.path == "/beats") {
      for (
        let index = 0;
        index < document.querySelector(".play_list_parent_s").children.length;
        index++
      ) {
        document.querySelector(".play_list_parent_s").children[
          index
        ].style.background = "none";
      }
    }

    for (
      let index = 0;
      index <
      document.querySelectorAll(".playlist--" + this.class_referenceProps)
        .length;
      index++
    ) {
      document.querySelectorAll(".playlist--" + this.class_referenceProps)[
        index
      ].style.background = "#eefdec";
    }
  },
  created() {
    Axios.get(this.domain_for_external_js_css_file + "api/Alltags/").then(
      (response) => {
        this.tags = response;
      }
    );
  },
  methods: {
    open_share_function(event) {
      this.link_share =
        "https://49keysbanger.com/" +
        event.currentTarget.getAttribute("link_share");
      document.getElementById("myModal__").style.display = "block";
      document.querySelector("body").style.overflow = "hidden";
      document.querySelector(".copy__").textContent = "Copy";
    },
    copy(event) {
      var textArea = document.createElement("textarea");
      textArea.value = this.link_share;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("Copy");
      textArea.remove();
      event.currentTarget.textContent = "Copied";
    },
    close_share_function() {
      document.getElementById("myModal__").style.display = "none";
      document.querySelector("body").style.overflow = "auto";
    },
    open_free_beats_function_from_plalist() {
      this.$emit("open_free_beats_function_from_plalist");
    },
    open_cartModal_function_playlist(event) {
      this.$emit("open_cartModal_function_playlist", event);
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
          play_current: this.play_list[item_id],
          play_list: this.play_list,
          item_id: item_id,
        });
      }
    },
  },
};
</script>
