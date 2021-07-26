<template>
  <div class="play_list_parent">
    <div
      class="play_list_block_playlist"
      v-for="(item, index) in play_list"
      :key="index"
      @click="play_liste"
      :item_id="index"
      :class_referenceP="item.id"
      :class="`playlist--${item.id}`"
    >
      <div class="image_zone" :class="`pindex--${index}`" :class_referenceP="item.id">
        <div>{{ index + 1 }}</div>
        <div class="image_box">
          <img :src="item.image_link" alt="" />
        </div>
        <div>
          <span class="somewhere_playlist">{{ item.title }}</span>
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
        <div style="cursor: pointer" class="hide_on_576 somewhere_playlist">
          <unicon class="somewhere_playlist" name="share-alt" fill="#42b983" />
        </div>
        <div class="btn_buy_player somewhere_playlist hide_on_576">
          <div class="hide_on_576">
            <div class="somewhere_playlist">
              <unicon
                class="somewhere_playlist"
                name="shopping-bag"
                width="15"
                height="15"
                fill="white"
              />
            </div>
          </div>
          <div class="price_txt somewhere_playlist" v-if="item.downloadable == 'true' ">
            <span
              class="somewhere_playlist"
              style="color: white; font-size: 15px"
              >Free</span
            >
          </div>
           <div class="price_txt somewhere_playlist" v-if="item.downloadable == 'false' ">
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
  props: {
    class_referenceProps: {
      type: Number,
    },
  },
  data() {
    return {
      tags: "",
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
    document.querySelector(
      ".playlist--" + this.class_referenceProps
    ).style.background = "#eefdec";
  },
  created() {
    Axios.get(this.domain_for_external_js_css_file + "api/Alltags/").then(
      (response) => {
        this.tags = response;
      }
    );
  },
  methods: {
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
