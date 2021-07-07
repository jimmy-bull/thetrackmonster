<template style="position:relative;">
  <div class="player_block">
    <div class="player">
      <div class="silder_progress_block">
        <Slider
          tooltip="none"
          v-model="value_volume"
          :max="max_volume"
          :min="min_volume"
          :tooltips="false"
        ></Slider>
      </div>
      <div class="player_image_box hide_on_576">
        <img
          class="player_image"
          src="https://en.pressemag.fr/wp-content/uploads/2021/01/DaBaby-Press-Photo-1_Photo-Credit_Jackie-Dimailig.jpg"
          alt=""
        />
      </div>
      <div class="title">
        <div><span class="title">Dababy type beat</span></div>
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
        <div class="hide_on_576">
          <span style="color: white; font-size: 15px">$29.99</span>
        </div>
      </div>
      <div class="play_zone">
        <div>
          <unicon name="step-backward" width="15" height="15" fill="#42b983" />
        </div>
        <div>
          <unicon name="play" width="35" height="35" fill="#42b983" />
        </div>
        <div>
          <unicon name="skip-forward" width="15" height="15" fill="#42b983" />
        </div>
        <div>
          <unicon name="repeat" width="18" height="18" fill="#42b983" />
        </div>
      </div>
      <div class="hide_on_768">
        <unicon name="volume" width="18" height="18" fill="#42b983" />
      </div>
      <div style="width: 100px" class="hide_on_768">
        <Slider
          tooltip="none"
          v-model="value_volume"
          :max="max_volume"
          :min="min_volume"
          :tooltips="false"
        ></Slider>
      </div>
      <div @click="open_playlist" style="cursor: pointer">
        <unicon name="list-ui-alt" fill="#42b983" />
      </div>
    </div>
  </div>

  <Playlist class="play_list_block"></Playlist>
</template>
<style scoped>
.silder_progress_block {
  width: 100%;
  z-index: 10000000;
  position: absolute;
  top: 0;
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
.btn_buy_player > div {
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
    };
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
  },
};
</script>
