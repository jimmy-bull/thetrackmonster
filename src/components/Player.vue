<template style="position:relative;">
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
      <div class="player_image_box hide_on_576">
        <img class="player_image" :src="play_current.image_link" alt="" />
      </div>
      <div class="title">
        <div>
          <span class="title">{{ play_current.title }}</span>
        </div>
        <div style="font-size: 11px; margin-top: 5px; color: #ccc">
          TheTrackMonster
        </div>
      </div>
      <div style="cursor: pointer" class="hide_on_576">
        <unicon name="share-alt" fill="#42b983" />
      </div>
      <div class="btn_buy_player hide_on_576">
        <div class="hide_on_576">
          <div>
            <unicon name="shopping-bag" width="15" height="15" fill="white" />
          </div>
        </div>
        <div class="hide_on_576" v-if="play_current.downloadable == 'true' ">
          <span style="color: white; font-size: 15px"
            >free</span
          >
        </div>
        <div class="hide_on_576" v-if="play_current.downloadable == 'false' ">
          <span style="color: white; font-size: 15px"
            >${{ play_current.price }}</span
          >
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
    class="play_list_block"
    :class_referenceProps="class_reference"
  ></Playlist>
</template>
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
  z-index: 10000000;
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
  z-index: 10000;
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
import { mapState } from "vuex";
export default {
  name: "Player",
  components: {
    Slider,
    Playlist,
  },
  data() {
    return {
      value_volume: 10,
      max_volume: 10,
      min_volume: 0,
      is_open: false,
      volume_mute: false,
      loop: false,
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
