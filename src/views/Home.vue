<template>
  <Share
    :open_modal="open_share"
    :link_share="link_share"
    @close_share_function="close_share_function"
  ></Share>

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
              <router-link
                :to="{
                  name: 'beats-desc',
                  params: { name: item.beat_link, id: item.id },
                }"
              >
                <img class="img_last_added" :src="item.image_link" alt="" />
              </router-link>
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
                <div
                  @click="open_share_function"
                  :link_share="'beats-desc/' + item.beat_link + '/' + item.id"
                >
                  <span
                    style="margin-top: 5px"
                    :link_share="'beats-desc/' + item.beat_link + '/' + item.id"
                  >
                    <unicon
                      name="share-alt"
                      :link_share="
                        'beats-desc/' + item.beat_link + '/' + item.id
                      "
                      fill="#42b983"
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
          <div
            class="favoris_carou"
            :foreign-id="itemCarou.id"
            @click="favoris"
          >
            <unicon
              name="heart"
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
                  @click="open_cartModal_function"
                  v-if="itemCarou.downloadable == 'false'"
                  :price_get="itemCarou.price"
                  :image_get="itemCarou.image_link"
                  :title_get="itemCarou.title"
                  :id_get="itemCarou.id"
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
      <span>Licensing Info</span>
    </div>
    <splide :options="options_cate">
      <splide-slide>
        <a
          target="_blank"
          style="color: white"
          href="https://49keysbanger.com/server-side/storage/app/public/contract/contrat-mp3.pdf"
        >
          <div style="overflow: hidden">
            <div class="img_cate_gorie_carou_block">
              <div class="top_effect_block_txt">
                <h6>$19.99-$29.99</h6>
              </div>
              <div class="top_effect_block" style=""></div>
              <div class="title_on_blur">
                <h5>MP3 Lease</h5>
              </div>
              <img
                class="img_cate_gorie_carou"
                src="https://actunet.net/wp-content/uploads/2019/09/Digital-Music-Distribution-Companies-2.jpg"
              />
              <div class="bottom_effect_block_txt">
                <div>
                  <h6>Read</h6>
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

            <div class="blur_ground_carou" style="background: black"></div>
          </div>
        </a>
      </splide-slide>
      <splide-slide>
        <a
          target="_blank"
          style="color: white"
          href="https://49keysbanger.com/server-side/storage/app/public/contract/wave-contract.pdf"
        >
          <div style="overflow: hidden">
            <div class="img_cate_gorie_carou_block">
              <div class="top_effect_block_txt">
                <h6 class="wave-price">Only $39.99</h6>
              </div>
              <div class="top_effect_block" style=""></div>
              <div class="title_on_blur">
                <h5>WAV Lease</h5>
              </div>
              <img
                class="img_cate_gorie_carou"
                src="https://musicdistribution.guru/wp-content/uploads/2019/10/music-streaming.jpg"
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
            <div class="blur_ground_carou" style="background: #fd7e39"></div>
          </div>
        </a>
      </splide-slide>
      <splide-slide>
        <a
          target="_blank"
          style="color: white"
          href="https://49keysbanger.com/server-side/storage/app/public/contract/wave-trackouts-contract.pdf"
        >
          <div style="overflow: hidden">
            <div class="img_cate_gorie_carou_block">
              <div class="top_effect_block_txt">
                <h6>Only $79.99</h6>
              </div>
              <div class="top_effect_block" style=""></div>
              <div class="title_on_blur">
                <h5>Trackouts</h5>
              </div>
              <img
                class="img_cate_gorie_carou"
                src="https://objectifsmartphone.fr/wp-content/uploads/2020/03/Apple-Music-hero-005.jpg"
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
            <div class="blur_ground_carou" style="background: #ee686a"></div>
          </div>
        </a>
      </splide-slide>
      <splide-slide>
        <a
          target="_blank"
          style="color: white"
          href="https://49keysbanger.com/server-side/storage/app/public/contract/Unlimited-License.pdf"
        >
          <div style="overflow: hidden">
            <div class="img_cate_gorie_carou_block">
              <div class="top_effect_block_txt">
                <h6>Only $199.99</h6>
              </div>
              <div class="top_effect_block" style=""></div>
              <div class="title_on_blur">
                <h6>Unlimited License</h6>
              </div>
              <img
                class="img_cate_gorie_carou"
                src="https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/NS-WKMAG0730-1595944356.jpg"
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
            <div class="blur_ground_carou" style="background: #000000"></div>
          </div>
        </a>
      </splide-slide>
    </splide>

    <div
      class="discover_title_big"
      style="display: flex; justify-content: center; margin-top: 50px"
    >
      <span>Blog</span>
    </div>

    <div class="blog_grid" style="">
      <div class="blog_items">
        <div>
          <router-link to="/blog-drill">
            <img
              class="image_carou"
              style="border-radius: 3px"
              src="https://cdn.shopify.com/s/files/1/0747/3829/products/mHP2070_1024x1024.jpg?v=1571444675"
            />
            <div class="title_zone_carou">
              <h2>Drill</h2>
              <div class="price_block">
                <div style="padding: 0px 10px 0px 10px">
                  <p style="font-size: 14px">
                    Drill is a style of rap music originating in the south side,
                    in chicago at the beginning of 2010. It is defined by its
                    dark, violent, nihilistic lyrical content and its rhythms
                    influenced by the trap.
                  </p>
                </div>
              </div>
              <h2 style="font-size: 12px; color: #ccc">Last Update: Sept 05</h2>
            </div>
          </router-link>
        </div>
      </div>
      <div class="blog_items">
        <div>
          <router-link to="/blog-afro">
            <img
              class="image_carou"
              style="border-radius: 3px"
              src="https://honestmediablog.files.wordpress.com/2017/04/afrobeatcoverart_fotor.jpg?w=363"
            />
            <div class="title_zone_carou">
              <h2>Afro Beat</h2>
              <div class="price_block">
                <div style="padding: 0px 10px 0px 10px">
                  <p style="font-size: 14px">
                    Afrobeat is a musical genre derived from a blend of
                    traditional Nigerian music, jazz, highlife, funk and vocals
                    accompanied by percussion and vocal styles, popularized in
                    Africa in the 1970s.
                  </p>
                </div>
              </div>
              <h2 style="font-size: 12px; color: #ccc">Last Update: Sept 05</h2>
            </div>
          </router-link>
        </div>
      </div>

      <!-- <div class="blog_items">
        <div>
          <img
            class="image_carou"
            style="border-radius: 3px"
            src="https://thefader-res.cloudinary.com/private_images/w_640,c_limit,f_auto,q_auto:eco/Screen_Shot_2016-06-24_at_2.19.48_PM_uwjjng/gucci-mane-all-my-children-cover-art-frko-interview.jpg"
          />
          <div class="title_zone_carou">
            <h2>Trap Music</h2>
            <div class="price_block">
              <div style="padding: 0px 10px 0px 10px">
                <p style="font-size: 14px">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate, maiores qui nesciunt tenetur minima optio nisi
                  rerum quis quas error.
                </p>
              </div>
            </div>
            <h2 style="font-size: 12px; color: #ccc">Last Update: Sept 05</h2>
          </div>
        </div>
      </div> -->
    </div>
  </div>
  <!-- <div class="flex-container">
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
  </div> -->
  <Contact></Contact>
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
  height: 300px;
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
  height: 300px;
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
  bottom: -300px;
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
  top: -6300px;
  font-weight: bolder;
  /* left: -50px; */
  transition: ease 0.3s all;
}
.img_cate_gorie_carou_block:hover .title_on_blur {
  bottom: -300px;
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
  height: 300px;
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
  width: 200px;
  border-radius: 10px;
  cursor: pointer;
  background: #f5f5f5;
  height: 150px;
  object-fit: cover;
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
  .hot_artist_image {
    width: 35px !important;
    height: 35px !important;
    border-radius: 50%;
    object-fit: cover;
  }
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
    width: 90%;
    margin-top: 20px !important;
  }
}
@media only screen and (max-width: 576px) {
  .img_cate_gorie_carou_block:hover .top_effect_block_txt {
    top: 0px;
  }
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
    height: 300px;
  }
  .img_cate_gorie_carou {
    width: 80%;
    height: 150px;
    object-fit: cover;
  }
  .title_on_blur {
    bottom: -300px;
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
  .top_effect_block_txt {
    left: 0px;
  }
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
import Share from "@/components/Share.vue";
import Contact from "@/views/Contact.vue";

// import axios from "axios";
export default {
  name: "Home",
  components: {
    // HelloWorld
    Splide,
    SplideSlide,
    Share,
    Contact,
  },
  computed: {
    ...mapState([
      "domain_for_external_js_css_file",
      "play_current",
      "playing",
      "play_list",
      "wishlist_count",
    ]),
  },

  data() {
    return {
      price_get: 0,
      open_cartModal: false,
      link_share: "",
      cartData: {},
      open_share: false,
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
  mounted() {
    document.title = "49keysBanger";
    window.scrollTo(0, 0);
  },

  created() {
    //alert(this.domain_for_external_js_css_file + "api/newestbeats/")
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
    if (
      typeof this.beats_genre.data !== "undefined" &&
      this.beats_genre.data.length
    ) {
      if (this.stopCall == 0) {
        document.querySelector(
          ".categories_block"
        ).children[0].style.borderBottomStyle = "solid";

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
    }
  },
  methods: {
    open_share_function(event) {
      this.open_share = true;
      this.link_share =
        "https://49keysbanger.com/" +
        event.currentTarget.getAttribute("link_share");
    },
    open_cartModal_function(event) {
      this.$emit("open_cartModal_function_from_app", event);
    },
    close_share_function() {
      this.open_share = false;
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
    favoris(event) {
      // alert(event.target.getAttribute("foreign-id"));
      if (localStorage.getItem("session_token")) {
        Axios.get(
          this.domain_for_external_js_css_file +
            "api/favoris/" +
            localStorage.getItem("session_token") +
            "/" +
            event.target.getAttribute("foreign-id")
        )
          .then((response) => {
            console.log(response.data);
            if (response.data == "Beat already in wishlist") {
              this.$swal({
                title: response.data,
                icon: "error",
                showConfirmButton: false,
                timer: 2000,
              });
            } else if (response.data == "Not connected") {
              this.$router.push("/account?error=favoris");
            } else {
              this.$swal({
                title: response.data.message,
                icon: "success",
                showConfirmButton: false,
                timer: 2000,
              });
              // console.log(response.data);
              this.$store.dispatch(
                "update_wishlist_count",
                response.data.user_favoris_count
              );
            }
          })
          .catch((err) => console.log(err));
      } else {
        this.$router.push("/account?error=favoris");
      }
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