<template>
  <div id="page-content">
    <!--CART MAIN ZONE -->
    <div class="container" style="margin-top: 100px">
      <h1 class="text-center" style="color: rgb(102, 102, 102)">Cart Review</h1>
      <div class="row">
        <div class="col-lg-8 col-12" style="margin-top: 100px">
          <hr />
          <div class="row">
            <div class="col-lg-2 col-md-2 col-4">
              <img
                class="col-lg-12"
                src="https://content.beatstars.com/fit-in/100x100/filters:format(.jpeg):quality(50):fill(000000)/users/prod/1361959/image/1629565512/239478097-165997705584211.jpg"
                alt=""
              />
            </div>
            <div class="col-lg-6 col-8 col-md-5 mt-2">
              <div>
                <span class="cart_color"
                  >Over The Top by Pluto, Quantich, Michael Fournier</span
                >
              </div>
              <div>
                <span class="cart_color" style="font-size: 13px; color: grey"
                  >TRACK•MP3 Lease (MP3)</span
                >
              </div>
              <!-- <div><span class="cart_color">Size: 45</span></div> -->
            </div>
            <!-- <div class="col-lg-2 col-4 col-md-2 mt-2">
              <multiselect
                class="select_style"
                placeholder="Quantity"
                :options="options_genre"
                id="select_genre"
                v-model="value_genre"
              ></multiselect>
            </div> -->
            <div class="col-lg-2 col-md-2 col-4 mt-3">
              <div class="cart_color">$839</div>
            </div>
            <div class="col-lg-1 col-md-1 col-4 mt-3">
              <div>
                <span
                  class="close close_main_menu text-right"
                  style="font-size: 20px"
                  >×</span
                >
              </div>
            </div>
          </div>
          <hr />
          <div class="d-flex justify-content-end">
            <div class="p-2">
              <input
                type="text"
                placeholder="Coupon Code"
                class="txt_email_footer special_txt"
                name="email_footer"
              />
            </div>

            <div class="p-2">
              <button
                onclick="window.location.href='#'"
                class="btn_carou_buy_now_big btn_by_now_simple black_on_small"
              >
                <span class="ml-2">Apply Coupon</span>
                <i class="fas fa-arrow-right ml-2" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div class="d-flex justify-content-center mt-5">
            <div class="p-2 continue_S1">
              <button
                onclick="window.location.href='#'"
                class="btn_carou_buy_now_big btn_by_now_simple black_on_small"
              >
                <span class="ml-2">Go to home page</span>
                <i class="fas fa-arrow-right ml-2" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12 total_zone">
          <h5 style="color: rgb(102, 102, 102)">Cart Totals</h5>
          <hr />
          <div class="row">
            <div class="col-lg-8 col-8">
              <h6 style="color: rgb(102, 102, 102)">SubTotal</h6>
            </div>
            <div>$839</div>
          </div>

          <hr />
          <!-- <h6 style="color: rgb(102, 102, 102)">Cart Totals</h6>
          <div class="radio_englobe">
            <div class="radio_button_parent ml-1 row">
              <div class="radio_button_sub_parent">
                <div class="self_radio_button active_radio_button"></div>
              </div>
              <div class="ml-2 cart_color">Free Shipping</div>
            </div>

            <div class="radio_button_parent ml-1 row">
              <div class="radio_button_sub_parent">
                <div class="self_radio_button"></div>
              </div>
              <div class="cart_color ml-2">Flate Rate: $10.00</div>
            </div>
          </div>
          <hr /> -->
          <div class="row">
            <div style="color: rgb(102, 102, 102)" class="col-lg-8 col-8">
              Total
            </div>
            <div class="col-lg-4 col-4">$839</div>
          </div>
          <div class="mt-4">
            <button
              onclick="window.location.href='#'"
              class="
                btn_carou_buy_now_big btn_by_now_simple
                black_on_small
                col-lg-12
              "
            >
              <span class="ml-2">PAY VIA PAYPAL OR CREDIT CARD</span>
              <i class="fas fa-arrow-right ml-2" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-5">
      <div class="p-2 continue_S2">
        <button
          onclick="window.location.href='#'"
          class="btn_carou_buy_now_big btn_by_now_simple black_on_small"
        >
          <span class="ml-2">Go to home page</span>
          <i class="fas fa-arrow-right ml-2" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.btn_carou_buy_now_big {
  /* background-color: #42b983 !important; */
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
@import "https://49keysbanger.com/server-side/storage/app/public/assets/css/animate.min.css";
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
<style src="@vueform/multiselect/themes/default.css"></style>
<script lang="ts">
import { mapState } from "vuex";
// import Multiselect from "@vueform/multiselect";
export default {
  name: "Cart",
  components: {
    // Multiselect,
  },
  computed: {
    ...mapState(["domain_for_external_js_css_file"]),
  },
  methods: {
    importScript(script_link) {
      let scriptAdd = document.createElement("script");
      scriptAdd.setAttribute(
        "src",
        "https://49keysbanger.com/server-side/storage/app/public/" + script_link
      );
      document.body.appendChild(scriptAdd);
    },
    importScriptHead(script_link) {
      let scriptAdd = document.createElement("script");
      scriptAdd.setAttribute(
        "src",
        "https://49keysbanger.com/server-side/storage/app/public/" + script_link
      );

      document.head.appendChild(scriptAdd);
    },
  },
  data() {
    return {
      value_genre: "",
      options_genre: ["Trap", "hip hop"],
      test: [],
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
    this.importScript("assets/js/radio_button.js");
    // this.importScript("assets/js/carousel/big.js");
  },
  // created() {
  //   this.test.push({ image: "jimmy", price: "ok", license: "", title: "" });
  //   console.log(this.test);
  // },
};
</script>