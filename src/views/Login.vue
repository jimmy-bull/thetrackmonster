<template>
  <div id="page-content">
    <!-- <atom-spinner
      v-if="loading == true"
      :animation-duration="1000"
      :size="60"
      :color="'#42b983'"
    /> -->
    <div class="container">
      <div class="row">
        <div class="mt-5 col-lg-6">
          <h3>Login</h3>
          <div class="mt-5">
            <input
              type="text"
              placeholder="E-mail adress *"
              class="txt_email_footer special_txt col-lg-10"
              name="login_mail"
            />
          </div>
          <div class="mt-5">
            <input
              type="password"
              placeholder="Password *"
              class="txt_email_footer special_txt col-lg-10"
              name="login_pass"
            />
          </div>
          <div class="text-center mt-4">
            <a class="cart_color_solo" href="newpassword.html"
              >Lost your password?</a
            >
          </div>
          <div class="mt-5">
            <button
              class="
                btn_carou_buy_now_big btn_by_now_simple
                black_on_small
                col-lg-10
              "
            >
              <span class="ml-2">Login</span>
              <i class="fas fa-arrow-right ml-2" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div class="mt-5 col-lg-6">
          <h3>Register</h3>
          <div class="mt-5">
            <input
              type="text"
              placeholder="E-mail adress *"
              class="txt_email_footer email_input special_txt col-lg-10"
              name="register_mail"
            />
            <p class="error_message">{{ errorRegister }}</p>
          </div>
          <div class="cart_color_solo mt-5">
            <p>A password will be sent to your email address.</p>
            <p class="paragraph_register">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
          </div>
          <div class="mt-5">
            <button
              @click="register"
              class="
                btn_carou_buy_now_big btn_by_now_simple
                black_on_small
                col-lg-10
              "
            >
              <div
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <span class="ml-2">Register</span>
                <i class="fas fa-arrow-right ml-2" aria-hidden="true"></i>
                <HalfCircleSpinner
                  style="margin-left: 50px"
                  :animation-duration="1000"
                  :size="25"
                  color="#2c3e50"
                  v-if="loading == true"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.atom-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.select .select_content {
  background-color: white;
  color: #666;
}
.error_message {
  color: #42b983;
  margin-top: 20px;
}

.first_select_element {
  border-radius: 30px;
  border-color: white;
  background-color: white;
  color: #666;
  text-indent: 5px;
}

.main_grid_view_box {
  margin: 5%;
}

@media screen and (max-width: 767px) {
  .main_grid_view_box {
    margin: 0%;
  }
}

@media screen and (max-width: 992px) {
  .accordion_title {
    background-color: white;
    padding: 10px;
    color: black;
    margin-top: 10px;
    box-shadow: none;
    text-transform: uppercase;
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
  name: "Login",
  components: {
    HalfCircleSpinner,
  },
  computed: {
    ...mapState(["domain_for_external_js_css_file"]),
  },
  created() {},
  methods: {
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
    register() {
      if (document.querySelector(".email_input").value.trim() != "") {
        this.loading = true;
        Axios.get(
          this.domain_for_external_js_css_file +
            "api/register/" +
            document.querySelector(".email_input").value
        )
          .then((response) => {
            console.log(response.data);
            if (response.data != "successfully connected.") {
              this.loading = false;
              this.errorRegister = response.data;
            } else if (response.data == "successfully connected.") {
              this.$swal({
                title:
                  "Your account has been successfully created, a password has been generated, use it to log in.",
                icon: "success",
                showConfirmButton: false,
                timer: 5000,
              });
              this.errorRegister = "";
              this.loading = false;
            }
          })
          .catch((err) => console.log(err));
      } else {
        this.errorRegister = "the field must not be empty!";
      }
    },
  },
  data() {
    return {
      value_genre: "",
      options_genre: ["Trap", "hip hop"],
      errorRegister: "",
      loading: false,
    };
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
  },
};
</script>
