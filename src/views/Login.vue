<template>
  <div id="page-content">
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
              onclick="window.location.href='#'"
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
              class="txt_email_footer special_txt col-lg-10"
              name="register_mail"
            />
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
              onclick="window.location.href='#'"
              class="
                btn_carou_buy_now_big btn_by_now_simple
                black_on_small
                col-lg-10
              "
            >
              <span class="ml-2">Register</span>
              <i class="fas fa-arrow-right ml-2" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.select .select_content {
  background-color: white;
  color: #666;
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
export default {
  name: "Login",
  computed: {
    ...mapState(["domain_for_external_js_css_file"]),
  },
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
  },
  data() {
    return {
      value_genre: "",
      options_genre: ["Trap", "hip hop"],
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
