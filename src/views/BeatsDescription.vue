<template>
  <div>
    <!-- DIV COVER AND SONG INFOS -->
    <div v-if="typeof beat_desc.data !== 'undefined'">
      <div
        class="Lil_div_cover_song_info"
        v-for="(item, index) in beat_desc.data"
        :key="index"
      >
        <!-- Div SONG DETAILS AND TAG-->
        <div class="infos_song">
          <!-- COVER IMAGE -->
          <div class="cover">
            <img id="main_image" :src="item.image_link" />
          </div>

          <div class="div_song_details">
            <!-- Div Titre son -->
            <div class="div_songTitle_play-boutton">
              <div
                class="play_btn_carou"
                :item_id="index"
                :class_reference="item.id"
                :genre="item.genre"
                @click="play"
              >
                <i
                  class="fa fa-play"
                  style="color: white; margin-top: 3px; margin-left: 2px"
                  :class="`index--${item.id}`"
                  aria-hidden="true"
                ></i>
              </div>
              <div style="margin-left: 10px">
                <span class="title">{{ item.title }}</span>
              </div>
            </div>
            <!-- End div Titre son -->

            <!-- Div nom artiste -->
            <div class="div_nom_artiste">
              <span class="artiste_name"> @Thetrackmonster </span>
            </div>
            <!-- end div nom artiste -->

            <!-- Div nom BPM Date -->
            <div class="div_bpm_date">
              <div class="little_bpm_div">BPM</div>
              <span class="bpm_number">{{ item.bpm }}</span>
              <span class="date">July 6, 2021</span>
            </div>
            <!-- end nom BPM Date -->

            <div class="div_prix_share">
              <div class="prix_share space_prix">
                <img href="#" class="icons_price_share" />
                <span>
                  <unicon
                    class="somewhere_playlist"
                    name="shopping-bag"
                    width="15"
                    height="15"
                    fill="white"
                  />${{ item.price }}</span
                >
              </div>

              <div class="prix_share">
                <span>
                  <unicon
                    class="somewhere_playlist"
                    name="share-alt"
                    fill="white"
                    width="15"
                    height="15"
                  />
                  Share</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- SONG TAGS DIV-->
        <div class="div_song_tags">
          <div
            class="tags"
            v-for="(tags_item, tags_index) in tags"
            :key="tags_index"
          >
            <router-link
              style="color: #42b983"
              class="link somewhere_playlist"
              :to="{ path: '/beats', query: { q: tags_item } }"
            >
              #{{ tags_item }}
            </router-link>
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

    <div class="comment_block">
      <div>
        <input class="comment_zone" placeholder="Write a comment" type="text" />
      </div>
    </div>
    <div class="btn_block" @click="send_comment">
      <div class="btn_buy_player"><span>Add a comment</span></div>
    </div>
    <div class="comment_my_block" v-if="typeof comments.data !== 'undefined'">
      <h2>Comment</h2>
      <div class="comment_element"  v-for='(item, index)  in comments.data'  :key='index'>
        <div class="div_img">
          <img
            style="
              width: 100%;
              height: 100%;
              border-radius: 50%;
              object-fit: cover;
            "
            src="../../public/logo.png"
            alt=""
          />
        </div>
        <div class="comment_txt_block">
          <div>
            <span>****{{item.user_email}}</span>
            <span style="font-size: 13px; color: #42b983;margin-left:20px"> {{  Date(item.created_at) }}</span>
          </div>
          <div style="font-size: 14px; margin-top: 10px">
           {{item.comment_text}}
          </div>
        </div>
      </div>
      <div v-if="comments.data.length == 0">
        <h3>No comment yet.</h3>
      </div>
    </div>
    <div
      v-else
      style="display: flex; justify-content: center; align-items: center"
    >
      <div class="loader"></div>
    </div>
  </div>
</template>

<style scoped>
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
.comment_txt_block {
  margin-left: 2%;
}
.div_img {
  width: 46px;
  min-width: 46px;
  max-width: 46px;
  height: 46px;
}
.comment_element {
  display: flex;
  margin-bottom: 30px;
}

.btn_buy_player {
  background: #42b983;
  display: flex;
  padding: 2px 15px 5px 15px;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: pointer;
  color: white;
}
.btn_block {
  display: flex;
  justify-content: flex-end;
  margin: 0px 8.5% 0px 8.5%;
  margin-top: 30px;
}
.comment_block div,
.comment_block div input {
  width: 100%;
}
.comment_block {
  margin: 0px 10% 0px 10%;
}
.comment_my_block {
  margin: 0px 10% 0px 10%;
}
.comment_block div input {
  padding: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  border-width: 0px;
}
#canvas {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.play_btn_carou {
  background: #42b983;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
.Lil_div_cover_song_info,
.comment_block {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10vh;
}

.infos_song {
  display: flex;
  align-items: center;
}

.infos_song > div {
  margin: 0 20px 0 20px;
}

.cover > img {
  height: 190px;
  width: 190px;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

#play-pause {
  width: 70px;
  height: 30px;
  margin-left: -18px;
}

.div_songTitle_play-boutton {
  margin-bottom: 11px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.Title {
  font-size: 30px;
  font-weight: bold;
}

.div_nom_artiste {
  margin-bottom: 11px;
}

.artiste_name {
  font-weight: bolder;
  margin-bottom: 11px;
  font-size: 15px;
}

.div_bpm_date {
  display: flex;
  margin-bottom: 11px;
  font-size: 15px;
}

.little_bpm_div {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px solid white;
  background-color: #42b983;
  color: white;
  border-radius: 3px;
  font-size: 8px;
  padding-left: 5px;
  padding-right: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.bpm_number {
  padding-left: 2px;
  margin-right: 15px;
  font-weight: bold;
  font-size: 15px;
}

.date {
  font-weight: bold;
}

.div_prix_share {
  display: flex;
}

.prix_share {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #42b983;
  color: white;
  width: 125px;
  height: 45px;
  border-radius: 3px;
  transition: transform 0.2s; /* Animation */
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.prix_share:hover {
  /* transform: scale(1.1); */
  cursor: pointer;
}

.space_prix {
  margin-right: 10px;
}

.div_song_tags {
  display: flex;
  margin-top: 78px;
}

.tags {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #42b983;
  margin-right: 13px;
  color: #42b983;
  height: 30px;
  width: 110px;
  background-color: white;
  font-size: 12px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 5px;
}

/* REPONSIVE MEDIA QUERIES */
@media only screen and (max-width: 1024px) {
  .infos_song > div {
    width: 100%;
  }

  .infos_song {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .Lil_div_cover_song_info {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .cover {
    display: flex;
    justify-content: center;
  }

  .div_songTitle_play-boutton {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  .div_nom_artiste {
    display: flex;
    justify-content: center;
  }

  .div_bpm_date {
    display: flex;
    justify-content: center;
  }
  .div_prix_share {
    justify-content: center;
  }
}
</style>
<script>
//https://www.youtube.com/watch?v=2TIHglVz9NQ
import { mapState } from "vuex";
import Axios from "axios";
export default {
  name: "Beats-desc",
  data() {
    return {
      beat_desc: "",
      tags: [],
      item_id: null,
      comments: "",
    };
  },
  computed: {
    ...mapState(["domain_for_external_js_css_file"]),
  },
  created() {
    Axios.get(
      this.domain_for_external_js_css_file +
        "api/beat_desc/" +
        this.$route.params.id
    )
      .then((response) => {
        this.beat_desc = response;
        console.log(this.beat_desc);
      })
      .catch((err) => console.log(err));

    Axios.get(
      this.domain_for_external_js_css_file + "api/tags/" + this.$route.params.id
    ).then((response) => {
      response.data.forEach((element) => {
        this.tags.push(element.tags);
      });
      // console.log(this.tags);
    });
    Axios.get(
      this.domain_for_external_js_css_file +
        "api/show_comment/" +
        this.$route.params.id
    ).then((response) => {
      this.comments = response;
      // console.log(this.tags);
    });
  },

  methods: {
    play(event) {
      let item_id = event.currentTarget.getAttribute("item_id");
      let class_reference = event.currentTarget.getAttribute("class_reference");
      let genre = event.currentTarget.getAttribute("genre");

      Axios.get(
        this.domain_for_external_js_css_file + "api/get_desc_siblings/" + genre
      )
        .then((response) => {
          this.$store.dispatch("play_from_elements", {
            class_reference: class_reference,
            audio: document.querySelector(".track"),
            play_current: this.beat_desc.data[item_id],
            play_list: response.data,
            item_id: item_id,
          });
          this.$emit("open_playlist_box");
        })
        .catch((err) => console.log(err));
    },
    send_comment() {
      if (document.querySelector(".comment_zone").value.trim() != "") {
        if (localStorage.getItem("session_token")) {
          Axios.get(
            this.domain_for_external_js_css_file +
              "api/add_comment/" +
              localStorage.getItem("session_token") +
              "/" +
              this.$route.params.id +
              "/" +
              document.querySelector(".comment_zone").value
          )
            .then((response) => {
              console.log(response.data);
              if (response.data != "Comment successfully added") {
                this.$router.push("/account?error=favoris");
              } else if (response.data == "Comment successfully added") {
                this.$swal({
                  title: "Comment successfully added",
                  icon: "success",
                  showConfirmButton: false,
                  timer: 2000,
                });
              }
            })
            .catch((err) => console.log(err));
        } else {
          this.$router.push("/account?error=comment");
        }
      } else {
        this.$swal({
          title: "You have not written any comments",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
  },
};
</script>
