<template>
  <div class="filter_zone">
    <multiselect
      class="select_style"
      placeholder="Genre"
      :options="options_genre"
      id="select_genre"
      v-model="value_genre"
    >
    </multiselect>
    <multiselect
      class="select_style"
      placeholder="Mood"
      :options="options_genre"
      id="select_genre"
      v-model="value_genre"
    >
    </multiselect>
    <multiselect
      class="select_style"
      placeholder="Key"
      :options="options_genre"
      id="select_genre"
      v-model="value_genre"
    >
    </multiselect>
    <multiselect
      class="select_style"
      placeholder="Downloadable"
      :options="options_genre"
      id="select_genre"
      v-model="value_genre"
    >
    </multiselect>
    <Slider
      style="margin-top: 40px"
      tooltip="none"
      :max="max_price"
      v-model="price"
      :min="min_price"
      ref="slider_price"
    ></Slider>
    <Slider
      style="margin-top: 40px"
      :max="max_price"
      v-model="price"
      :min="min_price"
      ref="slider_price"
    ></Slider>
  </div>
  <div class="search_div">
    <input
      class="search_input"
      type="text"
      placeholder="Search for beats "
      name=""
      id=""
    />
  </div>
  <div style="margin-top: 50px">
    <div class="play_list_block_playlist">
      <div class="image_zone">
        <div>1</div>
        <div class="image_box">
          <img
            src="https://en.pressemag.fr/wp-content/uploads/2021/01/DaBaby-Press-Photo-1_Photo-Credit_Jackie-Dimailig.jpg"
            alt=""
          />
        </div>
        <div>
          <span>Over</span>
        </div>
      </div>
      <div class="minute_box_big">
        <div class="minute_box">
          <span> 02:38</span>
        </div>
        <div class="bpm_box">
          <span>79</span>
        </div>
        <div class="tag_box">
          <div class="tags_element"><span>#Dababy</span></div>
          <div class="tags_element"><span>#lil durk</span></div>
        </div>
      </div>
      <div class="buy_share_block">
        <div style="cursor: pointer" class="hide_on_576">
          <unicon name="share-alt" fill="#42b983" />
        </div>
        <div class="btn_buy_player hide_on_576">
          <div class="hide_on_576">
            <div>
              <unicon name="shopping-bag" width="15" height="15" fill="white" />
            </div>
          </div>
          <div class="price_txt">
            <span style="color: white; font-size: 15px">$29.99</span>
          </div>
        </div>
      </div>
    </div>
    <div class="play_list_block_playlist">
      <div class="image_zone">
        <div>1</div>
        <div class="image_box">
          <img
            src="https://en.pressemag.fr/wp-content/uploads/2021/01/DaBaby-Press-Photo-1_Photo-Credit_Jackie-Dimailig.jpg"
            alt=""
          />
        </div>
        <div>
          <span>Over</span>
        </div>
      </div>
      <div class="minute_box_big">
        <div class="minute_box">
          <span> 02:38</span>
        </div>
        <div class="bpm_box">
          <span>79</span>
        </div>
        <div class="tag_box">
          <div class="tags_element"><span>#Dababy</span></div>
          <div class="tags_element"><span>#lil durk</span></div>
        </div>
      </div>
      <div class="buy_share_block">
        <div style="cursor: pointer" class="hide_on_576">
          <unicon name="share-alt" fill="#42b983" />
        </div>
        <div class="btn_buy_player hide_on_576">
          <div class="hide_on_576">
            <div>
              <unicon name="shopping-bag" width="15" height="15" fill="white" />
            </div>
          </div>
          <div class="price_txt">
            <span style="color: white; font-size: 15px">$29.99</span>
          </div>
        </div>
      </div>
    </div>
    <div class="play_list_block_playlist">
      <div class="image_zone">
        <div>1</div>
        <div class="image_box">
          <img
            src="https://en.pressemag.fr/wp-content/uploads/2021/01/DaBaby-Press-Photo-1_Photo-Credit_Jackie-Dimailig.jpg"
            alt=""
          />
        </div>
        <div>
          <span>Over</span>
        </div>
      </div>
      <div class="minute_box_big">
        <div class="minute_box">
          <span> 02:38</span>
        </div>
        <div class="bpm_box">
          <span>79</span>
        </div>
        <div class="tag_box">
          <div class="tags_element"><span>#Dababy</span></div>
          <div class="tags_element"><span>#lil durk</span></div>
        </div>
      </div>
      <div class="buy_share_block">
        <div style="cursor: pointer" class="hide_on_576">
          <unicon name="share-alt" fill="#42b983" />
        </div>
        <div class="btn_buy_player hide_on_576">
          <div class="hide_on_576">
            <div>
              <unicon name="shopping-bag" width="15" height="15" fill="white" />
            </div>
          </div>
          <div class="price_txt">
            <span style="color: white; font-size: 15px">$29.99</span>
          </div>
        </div>
      </div>
    </div>
    <div class="play_list_block_playlist">
      <div class="image_zone">
        <div>1</div>
        <div class="image_box">
          <img
            src="https://en.pressemag.fr/wp-content/uploads/2021/01/DaBaby-Press-Photo-1_Photo-Credit_Jackie-Dimailig.jpg"
            alt=""
          />
        </div>
        <div>
          <span>Over</span>
        </div>
      </div>
      <div class="minute_box_big">
        <div class="minute_box">
          <span> 02:38</span>
        </div>
        <div class="bpm_box">
          <span>79</span>
        </div>
        <div class="tag_box">
          <div class="tags_element"><span>#Dababy</span></div>
          <div class="tags_element"><span>#lil durk</span></div>
        </div>
      </div>
      <div class="buy_share_block">
        <div style="cursor: pointer" class="hide_on_576">
          <unicon name="share-alt" fill="#42b983" />
        </div>
        <div class="btn_buy_player hide_on_576">
          <div class="hide_on_576">
            <div>
              <unicon name="shopping-bag" width="15" height="15" fill="white" />
            </div>
          </div>
          <div class="price_txt">
            <span style="color: white; font-size: 15px">$29.99</span>
          </div>
        </div>
      </div>
    </div>
    <div class="play_list_block_playlist">
      <div class="image_zone">
        <div>1</div>
        <div class="image_box">
          <img
            src="https://en.pressemag.fr/wp-content/uploads/2021/01/DaBaby-Press-Photo-1_Photo-Credit_Jackie-Dimailig.jpg"
            alt=""
          />
        </div>
        <div>
          <span>Over</span>
        </div>
      </div>
      <div class="minute_box_big">
        <div class="minute_box">
          <span> 02:38</span>
        </div>
        <div class="bpm_box">
          <span>79</span>
        </div>
        <div class="tag_box">
          <div class="tags_element"><span>#Dababy</span></div>
          <div class="tags_element"><span>#lil durk</span></div>
        </div>
      </div>
      <div class="buy_share_block">
        <div style="cursor: pointer" class="hide_on_576">
          <unicon name="share-alt" fill="#42b983" />
        </div>
        <div class="btn_buy_player hide_on_576">
          <div class="hide_on_576">
            <div>
              <unicon name="shopping-bag" width="15" height="15" fill="white" />
            </div>
          </div>
          <div class="price_txt">
            <span style="color: white; font-size: 15px">$29.99</span>
          </div>
        </div>
      </div>
    </div>
    <div class="play_list_block_playlist">
      <div class="image_zone">
        <div>1</div>
        <div class="image_box">
          <img
            src="https://en.pressemag.fr/wp-content/uploads/2021/01/DaBaby-Press-Photo-1_Photo-Credit_Jackie-Dimailig.jpg"
            alt=""
          />
        </div>
        <div>
          <span>Over</span>
        </div>
      </div>
      <div class="minute_box_big">
        <div class="minute_box">
          <span> 02:38</span>
        </div>
        <div class="bpm_box">
          <span>79</span>
        </div>
        <div class="tag_box">
          <div class="tags_element"><span>#Dababy</span></div>
          <div class="tags_element"><span>#lil durk</span></div>
        </div>
      </div>
      <div class="buy_share_block">
        <div style="cursor: pointer" class="hide_on_576">
          <unicon name="share-alt" fill="#42b983" />
        </div>
        <div class="btn_buy_player hide_on_576">
          <div class="hide_on_576">
            <div>
              <unicon name="shopping-bag" width="15" height="15" fill="white" />
            </div>
          </div>
          <div class="price_txt">
            <span style="color: white; font-size: 15px">$29.99</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
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
  width: 20%;
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

<script>
import Multiselect from "@vueform/multiselect";
import Slider from "@vueform/slider";
// import axios from "axios";
// import { mapState } from "vuex";
//  @select="genre_select"
//         @remove="remove_genre"
export default {
  name: "Search",
  data() {
    return {
      value_genre: "",
      options_genre: ["Trap", "hip hop"],
      price: [20, 70],
      max_price: 70,
      min_price: 20,
    };
  },
  computed: {},
  components: {
    Multiselect,
    Slider,
  },
 
};
</script>
