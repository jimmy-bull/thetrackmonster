<template>
  <div id="page-content">
    <!--CART MAIN ZONE -->
    <div class="container" style="margin-top: 50px">
      <h1 class="text-center" style="color: rgb(102, 102, 102)">Cart Review</h1>
      <div class="row" v-if="is_empty_cart == false">
        <div class="col-lg-8 col-12" style="margin-top: 50px">
          <hr />
          <div v-for="(item, index) in cartInobjectArray" :key="index">
            <div class="row">
              <div class="col-lg-2 col-md-2 col-3">
                <img class="col-lg-12" :src="item.image" alt="" />
              </div>
              <div class="col-lg-6 col-5 col-md-5">
                <div>
                  <span class="cart_color">{{ item.title }}</span>
                </div>
                <div>
                  <span class="cart_color" style="font-size: 13px; color: grey"
                    >TRACK• {{ item.license }}</span
                  >
                </div>
              </div>

              <div class="col-lg-2 col-md-2 col-2 mt-3">
                <div class="cart_color">${{ item.price }}</div>
              </div>
              <div
                @click="delete_in_cart"
                :id_to_delete="item.id"
                class="col-lg-1 col-md-1 col-2 mt-3"
              >
                <div>
                  <span
                    class="close close_main_menu text-right"
                    style="font-size: 20px; cursor: pointer"
                    >×</span
                  >
                </div>
              </div>
            </div>
            <hr />
          </div>

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
                @click="apply_coupon"
                class="btn_carou_buy_now_big btn_by_now_simple black_on_small"
              >
                <span class="ml-2">Apply Coupon</span>
                <i class="fas fa-arrow-right ml-2" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div class="d-flex justify-content-center mt-5">
            <div class="p-2 continue_S1">
              <router-link
                to="/"
                onclick="window.location.href='#'"
                class="btn_carou_buy_now_big btn_by_now_simple black_on_small"
              >
                <span class="ml-2">Go to home page</span>
                <i class="fas fa-arrow-right ml-2" aria-hidden="true"></i>
              </router-link>
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
            <div>${{ cart_total }}</div>
          </div>

          <hr />

          <div class="row">
            <div class="col-lg-8 col-8">
              <h6 style="color: rgb(102, 102, 102)">Discount</h6>
            </div>
            <div>$0</div>
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
            <div class="col-lg-4 col-4">${{ cart_total }}</div>
          </div>
          <div class="mt-4">
            <button
              id="bouton-paypal"
              style="background:none;box-shadow:none"
              class="
                btn_carou_buy_now_big btn_by_now_simple
                black_on_small
                col-lg-12
              "
            >
              <!-- <span class="ml-2">PAY VIA PAYPAL OR CREDIT CARD</span> -->
              <!-- <i class="fas fa-arrow-right ml-2" aria-hidden="true"></i> -->
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="is_empty_cart == true">
      <h5 class="text-center mt-3" style="color: rgb(102, 102, 102)">
        You have not added any item in your cart.
      </h5>
      <div class="d-flex justify-content-center mt-3">
        <div class="p-2 continue_S1">
          <router-link
            to="/"
            class="btn_carou_buy_now_big btn_by_now_simple black_on_small"
          >
            <span class="ml-2">Go to home page</span>
            <i class="fas fa-arrow-right ml-2" aria-hidden="true"></i>
          </router-link>
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
    takeunique(data, key) {
      //GET UNIQUE VALUES FROM OBJECT OF ARRAYS
      return [...new Map(data.map((x) => [key(x), x])).values()];
    },
    apply_coupon() {
      this.$swal({
        title: "Invalid promo code !",
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
      });
    },
    delete_in_cart(event) {
      //    alert(event.currentTarget.getAttribute("id_to_delete"));
      this.cartInobjectArray.forEach((element, index) => {
        if (
          this.cartInobjectArray[index].id ==
          event.currentTarget.getAttribute("id_to_delete")
        ) {
          this.cart_total -= parseInt(this.cartInobjectArray[index].price);
          this.cartInobjectArray.splice([index], 1);
          localStorage.setItem(
            "cart_session",
            JSON.stringify(this.cartInobjectArray)
          );
          this.$store.dispatch(
            "update_cart_count",
            this.takeunique(
              JSON.parse(localStorage.getItem("cart_session")),
              (it) => it.id
            ).length
          );

          if (this.cartInobjectArray.length == 0) {
            localStorage.removeItem("cart_session");
            this.is_empty_cart = true;
          }
        }
      });

      // console.log(this.cartInobjectArray);
    },
  },
  data() {
    return {
      value_genre: "",
      options_genre: ["Trap", "hip hop"],
      test: [],
      is_empty_cart: true,
      cartInobjectArray: [],
      cart_total: 0,
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
  created() {
    if (localStorage.getItem("cart_session")) {
      this.is_empty_cart = false;

      this.cartInobjectArray = this.takeunique(
        JSON.parse(localStorage.getItem("cart_session")),
        (it) => it.id
      );
      console.log(this.cartInobjectArray);
      this.cartInobjectArray.forEach((element, index) => {
        this.cart_total += parseInt(this.cartInobjectArray[index].price);
      });
    }
      this.importScript("assets/js/paypal.js"); //
  },
};
</script>