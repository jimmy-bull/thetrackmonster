<template>
  <div class="home">
    <div class="first_block_parent">
      <div class="first_block">
        <div
          v-if="
            typeof latest_beat.data !== 'undefined' &&
            latest_beat.data.length > 0
          "
        >
          <div
            class="first_block_first"
            v-for="(item, index) in latest_beat.data"
            :key="index"
          >
            <div>
              <img class="img_last_added" :src="item.image_link" alt="" />
            </div>

            <div>
              <span>{{ item.title }}</span>
              <div class="tags">
                <div v-for="(tags_item, tags_index) in tags" :key="tags_index">
                  <span>
                    <router-link
                      style="color: #42b983"
                      class="link"
                      :to="{ path: '/beats', query: { q: tags_item } }"
                      >#{{ tags_item }}
                    </router-link>
                  </span>
                </div>
              </div>
              <div class="play_zone_first_block">
                <div
                  class="btn_play"
                  @click="play"
                  :item_id="index"
                  :class_reference="item.id"
                >
                  <span>
                    <i
                      class="fa fa-play"
                      :class="`index--${item.id}`"
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
                <div>
                  <span style="margin-top: 5px">
                    <unicon name="share-alt" fill="#42b983"
                  /></span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3>Hot Artist Type Beats</h3>
            <div class="hot_artist">
              <div>
                <img
                  class="hot_artist_image"
                  src="https://en.pressemag.fr/wp-content/uploads/2021/01/DaBaby-Press-Photo-1_Photo-Credit_Jackie-Dimailig.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="hot_artist_image"
                  src="https://generations.fr/media/news/thumb/870x489_5f809d337f97a-polo-g-696x442.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="hot_artist_image"
                  src="https://www.rap-up.com/app/uploads/2019/11/tory-lanez-chanel.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="hot_artist_image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFO9Yl5y2P3t9FAqwz2P_H1nxCOxQ45HnmbnaSiSp0NfeWM9_Ndt6C34TuKHOfjr8SU8g&usqp=CAU"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="hot_artist_image"
                  src="http://image-api.nrj.fr/medias/2018/09/drake_5ba8a8c8494ff.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="hot_artist_image"
                  src="https://yt3.ggpht.com/ytc/AAUvwnhaDKV5AgvI8gW1Ez314ZiXybmjJL5GvUdmdtNOLA=s900-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="hot_artist_image"
                  src="https://views.fr/wp-content/uploads/2020/01/migos.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          v-else
          style="display: flex; justify-content: center; align-items: center"
        >
          <div class="loader"></div>
        </div>
      </div>
      <!-- <div id="waveform"></div> -->
    </div>
  </div>
  <div class="splide_parent">
    <div
      class="categories_block"
      v-if="
        typeof beats_genre.data !== 'undefined' && beats_genre.data.length > 0
      "
    >
      <div
        v-for="(item, index) in beats_genre.data"
        :key="index"
        @click="search_by_genre"
      >
        <span
          ><router-link :to="{ path: 'beats', query: { q: item.genre } }">{{
            item.genre
          }}</router-link></span
        >
      </div>
    </div>
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
          <div class="favoris_carou">
            <unicon
              name="heart"
              height="15"
              style="margin-top: 7px"
              fill="#42b983"
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
      v-else
      style="display: flex; justify-content: center; align-items: center"
    >
      <div class="loader"></div>
    </div>
  </div>
  <div class="product_place splide_parent">
    <div class="discover_title_small">
      <span>Discover</span>
    </div>
    <div class="discover_title_big">
      <span>Shop Categories</span>
    </div>
    <splide :options="options_cate">
      <splide-slide>
        <div style="overflow: hidden">
          <div class="img_cate_gorie_carou_block">
            <div class="top_effect_block_txt">
              <h3>In earheadset</h3>
            </div>
            <div class="top_effect_block" style=""></div>
            <div class="title_on_blur">
              <h3>In earheadset</h3>
            </div>
            <img
              class="img_cate_gorie_carou"
              src="https://static.lexpress.fr/medias_12180/w_1000,c_fill,g_north/apple-airpods-pro_6236430.jpg"
            />
            <div class="bottom_effect_block_txt">
              <div>
                <h6>Discover</h6>
              </div>
              <div
                style="
                  border-style: solid;
                  height: 0px;
                  width: 50px;
                  border-width: 1px;
                  margin-top: 12px;
                "
              ></div>
            </div>
          </div>
          <div
            class="blur_ground_carou"
            style="
              background: url('https://static.lexpress.fr/medias_12180/w_1000,c_fill,g_north/apple-airpods-pro_6236430.jpg');
            "
          ></div>
        </div>
      </splide-slide>
      <splide-slide>
        <div style="overflow: hidden">
          <div class="img_cate_gorie_carou_block">
            <div class="top_effect_block_txt">
              <h3>In earheadset</h3>
            </div>
            <div class="top_effect_block" style=""></div>
            <div class="title_on_blur">
              <h3>In earheadset</h3>
            </div>
            <img
              class="img_cate_gorie_carou"
              src="https://sc04.alicdn.com/kf/HTB15z5Lj67nBKNjSZLeq6zxCFXa5.jpg"
            />
            <div class="bottom_effect_block_txt">
              <div>
                <h6>Discover</h6>
              </div>
              <div
                style="
                  border-style: solid;
                  height: 0px;
                  width: 50px;
                  border-width: 1px;
                  margin-top: 12px;
                "
              ></div>
            </div>
          </div>
          <div
            class="blur_ground_carou"
            style="
              background: url('https://sc04.alicdn.com/kf/HTB15z5Lj67nBKNjSZLeq6zxCFXa5.jpg');
            "
          ></div>
        </div>
      </splide-slide>
      <splide-slide>
        <div style="overflow: hidden">
          <div class="img_cate_gorie_carou_block">
            <div class="top_effect_block_txt">
              <h3>In earheadset 2</h3>
            </div>
            <div class="top_effect_block" style=""></div>
            <div class="title_on_blur">
              <h3>In earheadset 1</h3>
            </div>
            <img
              class="img_cate_gorie_carou"
              src="https://media.materiel.net/cms/materiel_net/Guides_d_achat/Guide-casques-audio/page3_image2.jpg"
            />
            <div class="bottom_effect_block_txt">
              <div>
                <h6>Discover</h6>
              </div>
              <div
                style="
                  border-style: solid;
                  height: 0px;
                  width: 50px;
                  border-width: 1px;
                  margin-top: 12px;
                "
              ></div>
            </div>
          </div>
          <div
            class="blur_ground_carou"
            style="
              background: url('https://media.materiel.net/cms/materiel_net/Guides_d_achat/Guide-casques-audio/page3_image2.jpg');
            "
          ></div>
        </div>
      </splide-slide>
      <splide-slide>
        <div style="overflow: hidden">
          <div class="img_cate_gorie_carou_block">
            <div class="top_effect_block_txt">
              <h3>In earheadset</h3>
            </div>
            <div class="top_effect_block" style=""></div>
            <div class="title_on_blur">
              <h3>In earheadset</h3>
            </div>
            <img
              class="img_cate_gorie_carou"
              src="https://ae01.alicdn.com/kf/H99cb34bd88d8465db5cfbc73acc106dea/Autocollant-pour-couteurs-sans-fil-couleur-Pure-en-vinyle-pour-Beats-Solo-2-solo-3-pour.jpg_q50.jpg"
            />
            <div class="bottom_effect_block_txt">
              <div>
                <h6>Discover</h6>
              </div>
              <div
                style="
                  border-style: solid;
                  height: 0px;
                  width: 50px;
                  border-width: 1px;
                  margin-top: 12px;
                "
              ></div>
            </div>
          </div>
          <div
            class="blur_ground_carou"
            style="
              background: url('https://ae01.alicdn.com/kf/H99cb34bd88d8465db5cfbc73acc106dea/Autocollant-pour-couteurs-sans-fil-couleur-Pure-en-vinyle-pour-Beats-Solo-2-solo-3-pour.jpg_q50.jpg');
            "
          ></div>
        </div>
      </splide-slide>
    </splide>

    <div class="discover_title_big" style="margin-top: 20px">
      <span>Blog</span>
    </div>

    <div class="blog_grid" style="">
      <div class="blog_items">
        <div>
          <img
            class="image_carou"
            style="border-radius: 3px"
            src="https://img.redbull.com/images/c_crop,w_2100,h_1400,x_0,y_0,f_auto,q_auto/c_scale,w_1500/redbullcom/2020/1/22/pxdp8bfw4cobruzwobjm/uk_drill_artists_2020"
          />
          <div class="title_zone_carou">
            <h2>Drill</h2>
            <div class="price_block">
              <div style="padding: 0px 10px 0px 10px">
                <p style="font-size: 14px">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate, maiores qui nesciunt tenetur minima optio nisi
                  rerum quis quas error.
                </p>
              </div>
            </div>
            <h2 style="font-size: 12px; color: #ccc">Last Update: Dec 29</h2>
          </div>
        </div>
      </div>
      <div class="blog_items">
        <div>
          <img
            class="image_carou"
            style="border-radius: 3px"
            src="https://i.scdn.co/image/ab67706c0000bebb1f4d6d643db0a0f2b84bceaa"
          />
          <div class="title_zone_carou">
            <h2>Afro Beats</h2>
            <div class="price_block">
              <div style="padding: 0px 10px 0px 10px">
                <p style="font-size: 14px">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate, maiores qui nesciunt tenetur minima optio nisi
                  rerum quis quas error.
                </p>
              </div>
            </div>
            <h2 style="font-size: 12px; color: #ccc">Last Update: Dec 29</h2>
          </div>
        </div>
      </div>

      <div class="blog_items">
        <div>
          <img
            class="image_carou"
            style="border-radius: 3px"
            src="https://cdn.shopify.com/s/files/1/2312/4771/products/TRAPSOUL-DADCAP-FRONT_1024x.png?v=1600976888"
          />
          <div class="title_zone_carou">
            <h2>Trap Soul</h2>
            <div class="price_block">
              <div style="padding: 0px 10px 0px 10px">
                <p style="font-size: 14px">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate, maiores qui nesciunt tenetur minima optio nisi
                  rerum quis quas error.
                </p>
              </div>
            </div>
            <h2 style="font-size: 12px; color: #ccc">Last Update: Dec 29</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex-container">
    <div class="contact_title">
      <h1>CONTACT</h1>
    </div>
    <div class="input_side">
      <div>
        <input type="text" name="name" class="animation_input" />
        <label for="Post-name" class="text_input animation_champ"> Nom </label>
      </div>
      <div style="margin-left: 20px">
        <input type="text" name="mail" class="animation_input" />
        <label for="Post-name" class="text_input animation_champ">
          E-mail
        </label>
      </div>
    </div>
    <div class="box_objet">
      <input type="text" name="subject" class="animation_input" />

      <label for="Post-name" class="text_input animation_champ">
        Subject
      </label>
    </div>

    <div class="box_objet">
      <input type="text" name="message" class="animation_input" />

      <label for="Post-name" class="text_input animation_champ">
        MESSAGE
      </label>
    </div>
    <div style="display: flex; justify-content: flex-end; width: 100%">
      <input class="envoi-btn" type="submit" value="ENVOYER MESSAGE" />
    </div>
  </div>
</template>

<style scoped>
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
<script>
import { mapState } from "vuex";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Axios from "axios";
// import axios from "axios";
export default {
  name: "Home",
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
    ]),
  },
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

  created() {
    Axios.get(this.domain_for_external_js_css_file + "api/genre/")
      .then((response) => {
        this.beats_genre = response;
      })
      .catch((err) => console.log(err));

    Axios.get(this.domain_for_external_js_css_file + "api/newestbeats/")
      .then((response) => {
        this.latest_beat = response;
        if (this.latest_beat != "") {
          this.isloading_latest_beat = true;
        }
        Axios.get(
          this.domain_for_external_js_css_file +
            "api/tags/" +
            this.latest_beat.data[0].id
        ).then((response) => {
          response.data.forEach((element) => {
            this.tags.push(element.tags);
          });
          // console.log(this.tags);
        });
      })
      .catch((err) => console.log(err));
  },
  updated() {
    document.querySelector(
      ".categories_block"
    ).children[0].style.borderBottomStyle = "solid";

    if (this.stopCall == 0) {
      Axios.get(
        this.domain_for_external_js_css_file +
          "api/select_depending_on_genre/" +
          document.querySelector(".categories_block").children[0].textContent
      )
        .then((response) => {
          this.carou_beats_data = response;
          this.isLoading_genre_filters = true;
        })
        .catch((err) => console.log(err));
      this.stopCall = 1;
    }
  },
  methods: {
    search_by_genre() {
      // for (let i = 0; i < event.currentTarget.parentNode.children.length; i++) {
      //   event.currentTarget.parentNode.children[i].style.borderBottomStyle =
      //     "none";
      // }
      // event.currentTarget.style.borderBottomStyle = "solid";
      // Axios.get(
      //   this.domain_for_external_js_css_file +
      //     "api/select_depending_on_genre/" +
      //     event.currentTarget.textContent
      // )
      //   .then((response) => {
      //     this.carou_beats_data = response;
      //     console.log(this.carou_beats_data);
      //   })
      //   .catch((err) => console.log(err));
    },
    play(event) {
      let item_id = event.currentTarget.getAttribute("item_id");
      let class_reference = event.currentTarget.getAttribute("class_reference");

      this.$store.dispatch("play_from_elements", {
        class_reference: class_reference,
        audio: document.querySelector(".track"),
        play_current: this.latest_beat.data[item_id],
        play_list: this.carou_beats_data.data,
        item_id: item_id,
      });
      this.$emit("open_playlist_box");
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
      // this.play_list.forEach((element) => {
      //   this.tags.push(element.tags);
      //   console.log(this.tags);
      // });
    },
  },
};
</script>
<style scoped>
.slidecontainer {
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}
</style>