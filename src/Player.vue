<template style="position:relative;">
  <FreeBeats
    :open_modalfree="open_free"
    :free_beats_id="free_beats_id"
    @close_free_beats_function="close_free_beats_function"
  ></FreeBeats>
  <!-- share Modal -->
  <div id="myModal_" class="modal">
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
            class="copy_"
            @click="copy"
            style="color: #42b983; cursor: pointer"
          >
            Copy
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="player_block">
    <div class="player">
      <div class="silder_progress_block">
        <input
          type="range"
          min="0"
          :max="TrackDuration"
          :value="TrackCurentTime"
          class="slider"
          id="myRange"
          @input="rangeEvent"
        />
        <div class="slider_tomb_progress"></div>
        <div class="slider_tomb_progress_parent"></div>
        <div class="minute_block">
          <div><span class="minute">0</span></div>
        </div>
      </div>
      <router-link
        class="player_image_box hide_on_576"
        :to="{
          name: 'beats-desc',
          params: { name: play_current.beat_link, id: play_current.id },
        }"
      >
        <img class="player_image" :src="play_current.image_link" alt="" />
      </router-link>
      <div class="title">
        <router-link
          :to="{
            name: 'beats-desc',
            params: { name: play_current.beat_link, id: play_current.id },
          }"
        >
          <span class="title">{{ play_current.title }}</span>
        </router-link>
        <div style="font-size: 11px; margin-top: 5px; color: #ccc">
          @49keysbanger
        </div>
      </div>

      <div
        @click="open_share_function"
        :link_share="
          'beats-desc/' + play_current.beat_link + '/' + play_current.id
        "
        style="cursor: pointer"
        class="hide_on_576"
      >
        <unicon
          :link_share="
            'beats-desc/' + play_current.beat_link + '/' + play_current.id
          "
          name="share-alt"
          fill="#42b983"
        />
      </div>
      <div
        class="btn_buy_player hide_on_576"
        @click="open_cartModal_function"
        :price_get="play_current.price"
        :image_get="play_current.image_link"
        :title_get="play_current.title"
        :id_get="play_current.id"
        v-if="play_current.downloadable == 'false'"
      >
        <div class="hide_on_576">
          <div>
            <unicon name="shopping-bag" width="15" height="15" fill="white" />
          </div>
        </div>

        <div class="hide_on_576">
          <span style="color: white; font-size: 15px"
            >${{ play_current.price }}</span
          >
        </div>
      </div>

      <div
        class="btn_buy_player hide_on_576"
        v-if="play_current.downloadable == 'true'"
        :free_beats_id="play_current.id"
        @click="open_free_beats_function"
      >
        <div class="hide_on_576">
          <div>
            <unicon name="import" width="15" height="15" fill="white" />
          </div>
        </div>
        <div class="hide_on_576">
          <span style="color: white; font-size: 15px">free</span>
        </div>
      </div>
      <div class="play_zone">
        <div>
          <unicon
            name="step-backward"
            style="cursor: pointer"
            @click.stop="prevPlay"
            width="15"
            height="15"
            fill="#42b983"
          />
        </div>
        <div
          v-if="playing == false"
          @click="play_pause_player"
          style="cursor: pointer"
        >
          <unicon name="play" width="35" height="35" fill="#42b983" />
        </div>
        <div v-if="playing" @click="play_pause_player" style="cursor: pointer">
          <unicon name="pause" width="35" height="35" fill="#42b983" />
        </div>
        <div>
          <unicon
            name="skip-forward"
            @click.stop="nextPlay"
            width="15"
            height="15"
            style="cursor: pointer"
            fill="#42b983"
          />
        </div>
        <div @click="repeat" v-if="loop" style="cursor: pointer">
          <unicon name="repeat" width="18" height="18" fill="orangered" />
        </div>
        <div @click="repeat" v-if="!loop" style="cursor: pointer">
          <unicon name="repeat" width="18" height="18" fill="#42b983" />
        </div>
      </div>
      <div
        v-if="volume_mute == false"
        @click="volume_state"
        class="hide_on_768"
      >
        <unicon
          name="volume"
          style="cursor: pointer"
          width="18"
          height="18"
          fill="#42b983"
        />
      </div>
      <div v-if="volume_mute == true" @click="volume_state">
        <unicon
          name="volume-mute"
          style="cursor: pointer"
          width="18"
          height="18"
          fill="#42b983"
        />
      </div>
      <div style="width: 100px" class="hide_on_768">
        <Slider
          tooltip="none"
          v-model="value_volume"
          :max="max_volume"
          :min="min_volume"
          :tooltips="false"
          @change="update_volume"
        ></Slider>
      </div>
      <div @click="open_playlist" style="cursor: pointer">
        <unicon name="list-ui-alt" fill="#42b983" />
      </div>
    </div>
  </div>

  <Playlist
    @open_free_beats_function_from_plalist="
      open_free_beats_function_from_plalist
    "
    @open_cartModal_function_playlist="open_cartModal_function"
    class="play_list_block"
    :class_referenceProps="class_reference"
  ></Playlist>
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
.minute_block {
  position: absolute;
  top: -15px;
  border-style: solid;
  height: 10px;
  width: 10px;
  font-size: 10px;
  padding: 0px 10px 8px 10px;
  display: flex;
  justify-content: center;
  align-content: center;
  border-width: 1px;
  background: #42b983;
  border-width: 0px;
  color: white;
  border-radius: 3px;
}
.slider_tomb_progress {
  position: absolute;
  margin: 0 !important;
  border-width: 0px;
  height: 5px;
  top: 12px;
  background: #42b983;
  z-index: 2;
  border-radius: 3px;
  max-width: 100%;
  width: 0%;
}
.slider_tomb_progress_parent {
  position: absolute;
  margin: 0 !important;
  border-width: 0px;
  height: 5px;
  top: 12px;
  background: lightgray;
  z-index: 1;
  border-radius: 3px;
  width: 100%;
}
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  cursor: pointer;
  background: transparent;
  position: relative;
  z-index: 3;
  height: 10px;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  top: 0;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.slider::-moz-range-thumb {
  position: relative;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-width: 0px;
}
.silder_progress_block {
  width: 95%;
  z-index: 10000000;
  position: absolute;
  top: -15px;
  margin: 0 !important;
}

.play_list_block {
  position: fixed;
  bottom: 0;
  height: 0px;
  transition: ease-in-out 0.5s all;
  border-top-width: solid;
  border-width: 1px;
  border-color: #42b983;
  background: white;
  width: 100%;
  z-index: 10;
  overflow: scroll;
}
.play_zone {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
}
.play_zone > div {
  margin: 0px 10px;
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
.btn_buy_player div {
  margin: 0 2px 0 2px;
}
.player {
  background: white;
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding: 30px 0px 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease-in-out 0.5s all;
  z-index: 100000;
  position: fixed;
  bottom: 0;
}
.player_block {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 10;
}
.player > div {
  margin: 0px 15px 0px 15px;
}
.player_image {
  object-fit: cover;
  width: 50px;
  height: 50px;
}
@media only screen and (max-width: 768px) {
  .hide_on_768 {
    display: none;
  }
}
@media only screen and (max-width: 576px) {
  .hide_on_576 {
    display: none;
  }
  .title {
    font-size: 13px;
  }
}
</style>
<style src="@vueform/slider/themes/default.css"></style>
<script>
import Slider from "@vueform/slider";
import Playlist from "@/components/Playlist.vue";
import FreeBeats from "@/components/FreeBeats.vue";
import { mapState } from "vuex";
export default {
  name: "Player",
  components: {
    Slider,
    Playlist,
    FreeBeats,
  },
  data() {
    return {
      value_volume: 10,
      max_volume: 10,
      min_volume: 0,
      is_open: false,
      volume_mute: false,
      loop: false,
      open_free: false,
      free_beats_id: 0,
      link_share: "",
      open_share: false,
      open_modal: false,
    };
  },
  computed: {
    ...mapState([
      "TrackDuration",
      "TrackCurentTime",
      "playing",
      "TrackMax",
      "play_current",
      "class_reference",
      "play_list",
      "item_id",
    ]),
  },
  mounted() {},
  methods: {
    open_cartModal_function(event) {
      this.$emit("open_cartModal_function_from_app", event);
    },
 
    open_share_function(event) {
      this.link_share =
        "https://49keysbanger.com/" +
        event.currentTarget.getAttribute("link_share");
      document.getElementById("myModal_").style.display = "block";
      document.querySelector("body").style.overflow = "hidden";
      document.querySelector(".copy_").textContent = "Copy";
    },
    copy(event) {
      var textArea = document.createElement("textarea");
      textArea.value = this.link_share;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
      event.currentTarget.textContent = "Copied";
    },
    close_share_function() {
      document.getElementById("myModal_").style.display = "none";
      document.querySelector("body").style.overflow = "auto";
    },
    close_free_beats_function() {
      this.open_free = false;
    },
    open_free_beats_function(event) {
      this.open_free = true;
      this.free_beats_id = event.currentTarget.getAttribute("free_beats_id");
    },
    open_free_beats_function_from_plalist() {
      this.open_free = true;
      this.free_beats_id = event.currentTarget.getAttribute("free_beats_id");
    },
    open_playlist() {
      if (this.is_open == false) {
        document.querySelector(".player").style.bottom = 250 + "px";
        this.is_open = true;
        document.querySelector(".play_list_block").style.height = 250 + "px";
        document.querySelector(".play_list_block").style.borderStyle = "solid";
      } else {
        document.querySelector(".player").style.bottom = 0;
        document.querySelector(".play_list_block").style.height = 0 + "px";
        document.querySelector(".play_list_block").style.borderStyle = "none";
        this.is_open = false;
      }
    },
    play_pause_player() {
      this.$store.dispatch(
        "play_pause_player",
        document.querySelector(".track")
      );
    },
    updtateAudioCurrentTime(event) {
      document.querySelector(".track").currentTime = event;
    },
    update_volume(event) {
      if (event == 0) {
        this.volume_mute = true;
        document.querySelector(".track").volume = 0;
        document.querySelector(".track").muted = true;
      } else {
        this.volume_mute = false;
        document.querySelector(".track").volume = event / 10;
        document.querySelector(".track").muted = false;
      }
    },
    volume_state() {
      if (this.volume_mute == false) {
        this.volume_mute = true;
        document.querySelector(".track").muted = true;
        document.querySelector(".track").volume = 0;
        this.value_volume = 0;
      } else {
        this.volume_mute = false;
        document.querySelector(".track").muted = false;
        document.querySelector(".track").volume = 1;
        this.value_volume = 10;
      }
    },
    repeat() {
      if (this.loop == false) {
        this.loop = true;
        document.querySelector(".track").loop = true;
      } else {
        this.loop = false;
        document.querySelector(".track").loop = false;
      }
    },
    rangeEvent(event) {
      document.querySelector(".track").currentTime = event.currentTarget.value;
      document.querySelector(".slider_tomb_progress").style.width =
        Math.ceil((this.TrackCurentTime / this.TrackDuration) * 100) + "%";
    },
    nextPlay() {
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
    prevPlay() {
      if (this.item_id > 0) {
        let iteme_id = parseInt(this.item_id) - 1;
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
  },
};
</script>
