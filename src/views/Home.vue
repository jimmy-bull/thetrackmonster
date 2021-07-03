<template>
  <div class="home">
    <div class="first_block_parent">
      <div class="first_block">
        <div>
          <div class="first_block_first">
            <div>
              <img
                class="img_last_added"
                src="https://variety.com/wp-content/uploads/2020/12/Roddy-Ricch-Variety-Hitmakers-4-16x9-1.jpg?w=1024"
                alt=""
              />
            </div>
            <div>
              <span>Roddy rich x Lil Wayne Type Beats</span>
              <div class="tags">
                <div>
                  <span>Energetique</span>
                </div>
                <div>
                  <span>Trap</span>
                </div>
                <div>
                  <span>Roddy Rich</span>
                </div>
              </div>
              <div class="play_zone_first_block">
                <div class="btn_play" @click="play">
                  <span style="margin-top: 5px">
                    <unicon name="play" fill="#fff"
                  /></span>
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
      </div>
      <!-- <div id="waveform"></div> -->
    </div>
  </div>
  <div class="splide_parent">
    <div class="categories_block">
      <div @click="search_by_genre">
        <span>Drill</span>
      </div>
      <div @click="search_by_genre">
        <span>Trap Soul</span>
      </div>
      <div @click="search_by_genre">
        <span>Hip Hop</span>
      </div>
      <div @click="search_by_genre">
        <span>Trap</span>
      </div>
      <div @click="search_by_genre">
        <span>Afro Beats</span>
      </div>
    </div>
    <splide class="splide" :options="options">
      <splide-slide class="img_items">
        <div>
          <div class="favoris_carou">
            <unicon
              name="heart"
              height="15"
              style="margin-top: 7px"
              fill="#42b983"
            />
          </div>
          <div class="play_btn_carou">
            <unicon name="play" height="15" fill="#fff" />
          </div>
          <img
            class="image_carou"
            src="https://en.pressemag.fr/wp-content/uploads/2021/01/DaBaby-Press-Photo-1_Photo-Credit_Jackie-Dimailig.jpg"
          />
          <div class="title_zone_carou">
            <h4>Dababy Type beats</h4>
            <div class="price_block">
              <div>
                <unicon name="shopping-bag" height="20" fill="#42b983" />
              </div>
              <div>
                <span class="price_carou">$24.99</span>
              </div>
            </div>
          </div>
        </div>
      </splide-slide>

      <splide-slide class="img_items">
        <div>
          <div class="favoris_carou">
            <unicon
              name="heart"
              height="15"
              style="margin-top: 7px"
              fill="#42b983"
            />
          </div>
          <div class="play_btn_carou">
            <unicon name="play" height="15" fill="#fff" />
          </div>
          <img
            class="image_carou"
            src="https://generations.fr/media/news/thumb/870x489_5f809d337f97a-polo-g-696x442.jpg"
          />
          <div class="title_zone_carou">
            <h4>Dababy Type beats</h4>
            <div class="price_block">
              <div>
                <unicon name="shopping-bag" height="20" fill="#42b983" />
              </div>
              <div>
                <span class="price_carou">$24.99</span>
              </div>
            </div>
          </div>
        </div>
      </splide-slide>

      <splide-slide class="img_items">
        <div>
          <div class="favoris_carou">
            <unicon
              name="heart"
              height="15"
              style="margin-top: 7px"
              fill="#42b983"
            />
          </div>
          <div class="play_btn_carou">
            <unicon name="play" height="15" fill="#fff" />
          </div>
          <img
            class="image_carou"
            src="https://www.rap-up.com/app/uploads/2019/11/tory-lanez-chanel.jpg"
          />
          <div class="title_zone_carou">
            <h4>Dababy Type beats</h4>
            <div class="price_block">
              <div>
                <unicon name="shopping-bag" height="20" fill="#42b983" />
              </div>
              <div>
                <span class="price_carou">$24.99</span>
              </div>
            </div>
          </div>
        </div>
      </splide-slide>

      <splide-slide class="img_items">
        <div>
          <div class="favoris_carou">
            <unicon
              name="heart"
              height="15"
              style="margin-top: 7px"
              fill="#42b983"
            />
          </div>
          <div class="play_btn_carou">
            <unicon name="play" height="15" fill="#fff" />
          </div>
          <img
            class="image_carou"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFO9Yl5y2P3t9FAqwz2P_H1nxCOxQ45HnmbnaSiSp0NfeWM9_Ndt6C34TuKHOfjr8SU8g&usqp=CAU"
          />
          <div class="title_zone_carou">
            <h4>Dababy Type beats</h4>
            <div class="price_block">
              <div>
                <unicon name="shopping-bag" height="20" fill="#42b983" />
              </div>
              <div>
                <span class="price_carou">$24.99</span>
              </div>
            </div>
          </div>
        </div>
      </splide-slide>

      <splide-slide class="img_items">
        <div>
          <div class="favoris_carou">
            <unicon
              name="heart"
              height="15"
              style="margin-top: 7px"
              fill="#42b983"
            />
          </div>
          <div class="play_btn_carou">
            <unicon name="play" height="15" fill="#fff" />
          </div>
          <img
            class="image_carou"
            src="http://image-api.nrj.fr/medias/2018/09/drake_5ba8a8c8494ff.jpg"
          />
          <div class="title_zone_carou">
            <h4>Dababy Type beats</h4>
            <div class="price_block">
              <div>
                <unicon name="shopping-bag" height="20" fill="#42b983" />
              </div>
              <div>
                <span class="price_carou">$24.99</span>
              </div>
            </div>
          </div>
        </div>
      </splide-slide>

      <splide-slide class="img_items">
        <div>
          <div class="favoris_carou">
            <unicon
              name="heart"
              height="15"
              style="margin-top: 7px"
              fill="#42b983"
            />
          </div>
          <div class="play_btn_carou">
            <unicon name="play" height="15" fill="#fff" />
          </div>
          <img
            class="image_carou"
            src="https://yt3.ggpht.com/ytc/AAUvwnhaDKV5AgvI8gW1Ez314ZiXybmjJL5GvUdmdtNOLA=s900-c-k-c0x00ffffff-no-rj"
          />
          <div class="title_zone_carou">
            <h4>Dababy Type beats</h4>
            <div class="price_block">
              <div>
                <unicon name="shopping-bag" height="20" fill="#42b983" />
              </div>
              <div>
                <span class="price_carou">$24.99</span>
              </div>
            </div>
          </div>
        </div>
      </splide-slide>

      <splide-slide class="img_items">
        <div>
          <div class="favoris_carou">
            <unicon
              name="heart"
              height="15"
              style="margin-top: 7px"
              fill="#42b983"
            />
          </div>
          <div class="play_btn_carou">
            <unicon name="play" height="15" fill="#fff" />
          </div>
          <img
            class="image_carou"
            src="https://views.fr/wp-content/uploads/2020/01/migos.jpg"
          />
          <div class="title_zone_carou">
            <h4>Dababy Type beats</h4>
            <div class="price_block">
              <div>
                <unicon name="shopping-bag" height="20" fill="#42b983" />
              </div>
              <div>
                <span class="price_carou">$24.99</span>
              </div>
            </div>
          </div>
        </div>
      </splide-slide>
    </splide>
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
              src="https://images.frandroid.com/wp-content/uploads/2020/04/pikachu-ecouteurs-sans-fil-razer.jpg"
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
              background: url('https://images.frandroid.com/wp-content/uploads/2020/04/pikachu-ecouteurs-sans-fil-razer.jpg');
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
              <h3>In earheadset</h3>
            </div>
            <div class="top_effect_block" style=""></div>
            <div class="title_on_blur">
              <h3>In earheadset</h3>
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
</template>

<style scoped>
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
  background-size: cover;
  background-position: center;
  filter: blur(8px);
  -webkit-filter: blur(8px);
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
</style>
<script>
import { mapState } from "vuex";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
// import axios from "axios";
export default {
  name: "Home",
  components: {
    // HelloWorld
    Splide,
    SplideSlide,
  },
  directives: {},
  computed: {
    ...mapState(["wavesurferState"]),
  },
  data() {
    return {
      info: "",
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
    };
  },
  // created() {
  //   axios
  //     .get("http://127.0.0.1:8000/api/allbeats/")
  //     .then((response) => (this.info = response));
  // },

  mounted() {
    // // if (this.wavesurferState == false) {
    // //   let xhr = {
    // //     mode: "no-cors",
    // //   };
    // //   this.wavesurfer = WaveSurfer.create({
    // //     container: "#waveform",
    // //     scrollParent: true,
    // //     hideScrollbar: true,
    // //     progressColor: "#42b983",
    // //     waveColor: "#f5f5f5",
    // //     barGap: 2,
    // //     cursorColor: "#fff",
    // //     xhr: xhr,
    // //     barHeight: 0.5,
    // //     height: 100,
    // //   });
    // //   this.wavesurfer.load(require("../../public/calboy-12-offical-video.mp3"));
    // }
  },
  methods: {
    // play() {
    //   this.wavesurfer.play();
    // }, git clone ssh://u104441536@access867887356.webspace-data.io/~/repositories/my_repo.git
    search_by_genre(event) {
      for (let i = 0; i < event.currentTarget.parentNode.children.length; i++) {
        event.currentTarget.parentNode.children[i].style.borderBottomStyle =
          "none";
      }
      event.currentTarget.style.borderBottomStyle = "solid";
    },
  },
};
</script>
