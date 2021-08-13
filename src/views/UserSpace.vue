<template>
  <div style="margin: 4%">
    <div>
      <h2>
        Welcome Back
        <strong style="color: #42b983">💯 🎧 🎹 🎶</strong>
      </h2>
    </div>

    <div @click="go_off">
      <strong style="color: #42b983; font-size: 18px; cursor: pointer"
        >Sign out</strong
      >
    </div>
    <div class="d-block_space">
      <div class="menu_update">
        <h3>Change your Password</h3>
        <div class="mt-5 col-lg-12">
          <h3>Update</h3>
          <!-- <div class="mt-5">
            <label for="">Name</label>
            <input
              type="text"
              placeholder="Name *"
              class="txt_email_footer special_txt col-lg-12 login_mail"
              name="login_mail"
            />
            <p class="error_message">{{ error_email_false_login }}</p>
          </div> -->
          <div class="mt-5">
            <label for="">New Password</label>
            <input
              type="password"
              placeholder="Password *"
              class="txt_email_footer special_txt col-lg-12 login_pass"
              name="login_pass"
            />
            <p class="error_message">{{ error_password }}</p>
          </div>

          <div class="mt-5">
            <button
              @click="change_pass"
              class="
                btn_carou_buy_now_big btn_by_now_simple
                black_on_small
                col-lg-12
              "
            >
              <div
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <span class="ml-2">Update</span>
                <i class="fas fa-arrow-right ml-2" aria-hidden="true"></i>
                <HalfCircleSpinner
                  style="margin-left: 50px"
                  :animation-duration="1000"
                  :size="25"
                  color="#2c3e50"
                  v-if="loading_co == true"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div class="menu_commande">
        <h3 class="cc">Order</h3>
        <div class="mt-5 commande_head">
          <div class="beats_block">
            <h3>Beats</h3>
            <div class="inline_block_beats">
              <div class="img_block">
                <img
                  style="
                    width: 35px;
                    height: 35px;
                    -o-object-fit: cover;
                    object-fit: cover;
                    border-radius: 3px;
                  "
                  src="http://127.0.0.1:8000/images/6lack.jpeg"
                  alt=""
                />
              </div>
              <div>
                <span>Lil wayne type beats</span>
              </div>
              <div class="btn_buy_player">
                <span style="color: white">$25</span>
              </div>
            </div>
          </div>
          <div>
            <h3>Status</h3>
            <div style="margin-top: 30px">
              <span style="color: #42b983">Sold</span>
            </div>
          </div>
          <div class="date_block">
            <h3>Date</h3>
            <div style="margin-top: 30px"><span>20/04/2021</span></div>
          </div>
          <div>
            <h3>means of payment</h3>
            <div
              style="margin-top: 30px; display: flex; justify-content: flex-end"
            >
              <span> Paypal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.error_message {
  color: #42b983;
  margin-top: 20px;
}
.inline_block_beats {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.inline_block_beats > div {
  margin-top: 5%;
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
.beats_block {
  width: 40%;
}
.date_block {
  width: 10%;
}
.commande_head {
  display: flex;
}
.commande_head > div {
  color: gray;
  margin: 0% 2% 0% 2%;
}
.menu_update {
  width: 30%;
}
.menu_commande {
  width: 70%;
}
.d-block_space {
  display: flex;
  margin-top: 30px;
}
.d-block_space > div {
  margin: 0 3% 0 3%;
}
.link_a {
  margin-left: 20px;
  font-size: 14px;
  cursor: pointer;
  color: gray;
}
.link_a:hover {
  text-decoration: underline;
}
h3 {
  text-transform: uppercase;
  font-size: 13px !important;
  color: grey;
}
@media screen and (max-width: 992px) {
  .d-block_space {
    flex-direction: column;
  }
  .menu_update {
    width: 100%;
  }
  .menu_commande {
    width: 100%;
  }
  .cc {
    margin-top: 30px;
  }
}
@media screen and (max-width: 576px) {
  .commande_head {
    flex-wrap: wrap;
    border-bottom-style: solid;
    border-width: 0.5px;
    border-color: grey;
  }
  .commande_head > div {
    margin-bottom: 20px;
  }
  .beats_block {
    width: 80%;
  }
  .date_block {
    width: 20%;
  }
}
</style>
<style scoped src="../assets/custom.css">
</style>
<style scoped src ="../assets/home4.css">
</style>
<style scoped src="../assets/bootstrap.css">
</style>
<style scoped src="../assets/aos.css">
</style>
<style scoped>
@import "http://127.0.0.1:8000/assets/css/animate.min.css";
</style>
<style scoped src="../assets/main.css">
</style>
<style scoped src="../assets/grid_view_1.css">
</style>
<style scoped src= "../assets/accordion/main.css">
</style>
<style scoped src= "../assets/aos.css">
</style>
<style scoped src= "../assets/radio_button.css">
</style>
<script>
import { mapState } from "vuex";
import Axios from "axios";
import { HalfCircleSpinner } from "epic-spinners";
export default {
  name: "UserSpace",
  data() {
    return {
      error_password: "",
      loading_co: false,
    };
  },
  components: {
    HalfCircleSpinner,
  },
  computed: {
    ...mapState(["domain_for_external_js_css_file"]),
  },
  methods: {
    change_pass() {
      if (document.querySelector(".login_pass").value.trim() != "") {
        this.error_password = "";
        this.loading_co = true;
        Axios.get(
          this.domain_for_external_js_css_file +
            "api/update_password/" +
            localStorage.getItem("session_token") +
            "/" +
            document.querySelector(".login_pass").value
        )
          .then((response) => {
            console.log(response.data);
            if (response.data != "Password has been changed successfully.") {
              this.loading_co = false;

              this.error_password = response.data;
            } else {
              this.error_password = "";
              this.loading_co = false;
              this.$swal({
                title: response.data,
                icon: "success",
                showConfirmButton: false,
                timer: 2000,
              });
            }
          })
          .catch((err) => console.log(err));
      } else {
        this.error_password = "This field must not be empty.";
      }
    },
    importScript(script_link) {
      let scriptAdd = document.createElement("script");
      scriptAdd.setAttribute(
        "src",
        this.domain_for_external_js_css_file + script_link
      );
      document.body.appendChild(scriptAdd);
    },
    importScriptHead(script_link) {
      let scriptAdd = document.createElement("script");
      scriptAdd.setAttribute(
        "src",
        this.domain_for_external_js_css_file + script_link
      );

      document.head.appendChild(scriptAdd);
    },
    go_off() {
      localStorage.removeItem("session_token");
      this.$router.push("/");
      this.$store.dispatch("is_connected_f", false);
      this.$store.dispatch("update_wishlist_count", 0);
    },
  },
  mounted() {
    this.importScriptHead("assets/js/jquery.js");
    this.importScriptHead("assets/js/popper.js");
    this.importScriptHead("assets/js/bootstrap.min.js"); //
    this.importScriptHead("assets/js/fontawesome.js");

    this.importScript("assets/js/main.js"); //
    this.importScript("assets/css/accordion/main.js");
    this.importScript("assets/js/grid_view_1.js");
    this.importScript("assets/js/carousel/owlcarousel/owl.carousel.min.js");
    this.importScript("assets/js/aos.js");
    this.importScript("assets/js/home5.js");
    this.importScript("assets/js/common_page_2.js");
    if (localStorage.getItem("session_token")) {
      Axios.get(
        this.domain_for_external_js_css_file +
          "api/token_verify/" +
          localStorage.getItem("session_token")
      )
        .then((response) => {
          console.log(response.data);
          if (response.data != "Already connected") {
            this.$router.push("/");
          }
        })
        .catch((err) => console.log(err));
    } else {
      this.$router.push("/");
    }
  },
};
</script>
