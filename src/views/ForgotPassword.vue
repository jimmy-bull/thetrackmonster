<template>
  <div id="page-content">
    <div class="container">
      <div class="row d-flex justify-content-center" style="margin-top: 20vh">
        <div class="col-lg-6">
          <h3>I reset my password</h3>
          <div class="cart_color_solo">
            <p>Enter your email and receive a link to reset your password.</p>
          </div>
          <div class="mt-3">
            <input
              type="text"
              placeholder="E-mail adress *"
              class="txt_email_footer email_input special_txt col-lg-10"
              name="register_mail"
            />
            <p class="error_message">{{ error_password_forgot }}</p>
          </div>
          <div class="mt-3">
            <button
              @click="new_password"
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
                <span class="ml-2">Send</span>
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
  name: "ForgotPassword",
  components: {
    HalfCircleSpinner,
  },
  computed: {
    ...mapState(["domain_for_external_js_css_file"]),
  },
  data() {
    return {
      error_password_forgot: "",
      loading: false,
    };
  },
  methods: {
    new_password() {
      if (document.querySelector(".email_input").value.trim() != "") {
        this.loading = true;

        Axios.get(
          this.domain_for_external_js_css_file +
            "api/forgotPassword/" +
            document.querySelector(".email_input").value
        )
          .then((response) => {
            console.log(response.data);
            if (response.data != "new password sent") {
              this.loading = false;
              this.error_password_forgot = response.data;
            } else if (response.data == "new password sent") {
              this.$swal({
                title: "A new password has been sent to you.",
                icon: "success",
                showConfirmButton: false,
                timer: 3000,
              });
              this.error_password_forgot = "";
              this.loading = false;
              setTimeout(() => {
                this.$router.push({ path: "account" });
              }, 3000);
            }
          })
          .catch((err) => console.log(err));
      } else {
        this.error_password_forgot = "the field must not be empty!";
      }
    },
  },
};
</script>