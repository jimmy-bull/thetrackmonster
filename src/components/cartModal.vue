<template>
  <!-- The Modal -->
  <div id="modal_cart" class="modal_cart">
    <!-- Modal content -->
    <div class="modal_cart-content">
      <span class="close" @click="close_cartModal_function">&times;</span>
      <div>
        <h3>Choose license type</h3>
      </div>
      <div class="accordion" @click="open_accordion">
        <span>MP3 Lease</span> <br />
        <span style="font-size: 10px">MP3</span>
      </div>
      <div class="panel">
        <h5 class="usage_title">Usage terms</h5>
        <div class="usage_block">
          <div>
            <p style="display: flex">
              <unicon name="microphone" fill="#42b983" />
              <span style="margin-left: 10px; font-size: 13px"
                >Used for Music Recording</span
              >
            </p>
            <p style="display: flex">
              <unicon name="laptop-cloud" fill="#42b983" />
              <span style="margin-left: 10px; font-size: 13px"
                >500000 Online Audio Streams</span
              >
            </p>
            <p style="display: flex">
              <unicon name="microphone" fill="#42b983" />
              <span style="margin-left: 10px; font-size: 13px">
                For Profit Live Performances</span
              >
            </p>
          </div>
          <div>
            <p style="display: flex">
              <unicon name="horizontal-distribution-center" fill="#42b983" />
              <span style="margin-left: 10px; font-size: 13px"
                >Distribute up to 3000 copies</span
              >
            </p>
            <p style="display: flex">
              <unicon name="video" fill="#42b983" />
              <span style="margin-left: 10px; font-size: 13px"
                >1 Music Video</span
              >
            </p>
            <p style="display: flex">
              <unicon name="headphones" fill="#42b983" />
              <span style="margin-left: 10px; font-size: 13px">
                Radio Broadcasting rights (2 Stations)</span
              >
            </p>
          </div>
        </div>
        <div
          @click="add_to_cart"
          license="MP3 Lease"
          :price="price_get"
          class="btn_buy_player somewhere_playlist hide_on_576"
        >
          <div class="hide_on_576">
            <div class="somewhere_playlist">
              <unicon
                class="somewhere_playlist"
                name="shopping-bag"
                width="15"
                height="15"
                fill="white"
              />
            </div>
          </div>

          <div class="price_txt somewhere_playlist">
            <span
              class="somewhere_playlist"
              style="color: white; font-size: 15px"
              >${{ price_get }}</span
            >
          </div>
        </div>
      </div>

      <div class="accordion" @click="open_accordion">
        <span> WAV Lease </span> <br />
        <span style="font-size: 10px">MP3 and WAV</span>
      </div>
      <div class="panel">
        <h5 class="usage_title">Usage terms</h5>
        <div class="usage_block">
          <div>
            <p style="display: flex">
              <unicon name="microphone" fill="#42b983" />
              <span style="margin-left: 10px; font-size: 13px"
                >Used for Music Recording</span
              >
            </p>
            <p style="display: flex">
              <unicon name="laptop-cloud" fill="#42b983" />
              <span style="margin-left: 10px; font-size: 13px"
                >500000 Online Audio Streams</span
              >
            </p>
            <p style="display: flex">
              <unicon name="microphone" fill="#42b983" />
              <span style="margin-left: 10px; font-size: 13px">
                For Profit Live Performances</span
              >
            </p>
          </div>
          <div>
            <p style="display: flex">
              <unicon name="horizontal-distribution-center" fill="#42b983" />
              <span style="margin-left: 10px; font-size: 13px"
                >Distribute up to 5000 copies</span
              >
            </p>
            <p style="display: flex">
              <unicon name="video" fill="#42b983" />
              <span style="margin-left: 10px; font-size: 13px"
                >1 Music Video</span
              >
            </p>
            <p style="display: flex">
              <unicon name="headphones" fill="#42b983" />
              <span style="margin-left: 10px; font-size: 13px">
                Radio Broadcasting rights (2 Stations)</span
              >
            </p>
          </div>
        </div>
        <div
          @click="add_to_cart"
          license="Wave Lease"
          price="39"
          class="btn_buy_player somewhere_playlist hide_on_576"
        >
          <div class="hide_on_576">
            <div class="somewhere_playlist">
              <unicon
                class="somewhere_playlist"
                name="shopping-bag"
                width="15"
                height="15"
                fill="white"
              />
            </div>
          </div>

          <div class="price_txt somewhere_playlist">
            <span
              class="somewhere_playlist"
              style="color: white; font-size: 15px"
              >$39</span
            >
          </div>
        </div>
      </div>

      <div class="accordion" @click="open_accordion">
        <span> WAV Trackouts </span> <br />
        <span style="font-size: 10px">MP3, WAV and TRACK STEMS </span>
      </div>
      <div class="panel">
        <h5 class="usage_title">Usage terms</h5>
        <div class="usage_block">
          <div>
            <p style="display: flex">
              <unicon name="microphone" fill="#42b983" />
              <span style="margin-left: 10px; font-size: 13px"
                >Used for Music Recording</span
              >
            </p>
            <p style="display: flex">
              <unicon name="laptop-cloud" fill="#42b983" />
              <span style="margin-left: 10px; font-size: 13px"
                >500000 Online Audio Streams</span
              >
            </p>
            <p style="display: flex">
              <unicon name="microphone" fill="#42b983" />
              <span style="margin-left: 10px; font-size: 13px">
                For Profit Live Performances</span
              >
            </p>
          </div>
          <div>
            <p style="display: flex">
              <unicon name="horizontal-distribution-center" fill="#42b983" />
              <span style="margin-left: 10px; font-size: 13px"
                >Distribute up to 10000 copies</span
              >
            </p>
            <p style="display: flex">
              <unicon name="video" fill="#42b983" />
              <span style="margin-left: 10px; font-size: 13px"
                >2 Music Video</span
              >
            </p>
            <p style="display: flex">
              <unicon name="headphones" fill="#42b983" />
              <span style="margin-left: 10px; font-size: 13px">
                Radio Broadcasting rights (2 Stations)</span
              >
            </p>
          </div>
        </div>
        <div
          @click="add_to_cart"
          license="Wave Trackouts"
          price="79"
          class="btn_buy_player somewhere_playlist hide_on_576"
        >
          <div class="hide_on_576">
            <div class="somewhere_playlist">
              <unicon
                class="somewhere_playlist"
                name="shopping-bag"
                width="15"
                height="15"
                fill="white"
              />
            </div>
          </div>

          <div class="price_txt somewhere_playlist">
            <span
              class="somewhere_playlist"
              style="color: white; font-size: 15px"
              >$79</span
            >
          </div>
        </div>
      </div>

      <div class="accordion" @click="open_accordion">
        <span> Unlimited License </span> <br />
        <span style="font-size: 10px">MP3, WAV and TRACK STEMS </span>
      </div>
      <div class="panel">
        <h5 class="usage_title">Usage terms</h5>
        <div class="usage_block">
          <div>
            <p style="display: flex">
              <unicon name="microphone" fill="#42b983" />
              <span style="margin-left: 10px; font-size: 13px"
                >Used for Music Recording</span
              >
            </p>
            <p style="display: flex">
              <unicon name="laptop-cloud" fill="#42b983" />
              <span style="margin-left: 10px; font-size: 13px"
                >Unlimited Online Audio Streams</span
              >
            </p>
            <p style="display: flex">
              <unicon name="microphone" fill="#42b983" />
              <span style="margin-left: 10px; font-size: 13px">
                For Profit Live Performances</span
              >
            </p>
          </div>
          <div>
            <p style="display: flex">
              <unicon name="horizontal-distribution-center" fill="#42b983" />
              <span style="margin-left: 10px; font-size: 13px"
                >Distribute up to Unlimited copies</span
              >
            </p>
            <p style="display: flex">
              <unicon name="video" fill="#42b983" />
              <span style="margin-left: 10px; font-size: 13px"
                >Unlimited Music Video</span
              >
            </p>
            <p style="display: flex">
              <unicon name="headphones" fill="#42b983" />
              <span style="margin-left: 10px; font-size: 13px">
                Radio Broadcasting rights (Unlimited Stations)</span
              >
            </p>
          </div>
        </div>
        <div
          @click="add_to_cart"
          license="Unlimited License"
          price="199"
          class="btn_buy_player somewhere_playlist hide_on_576"
        >
          <div class="hide_on_576">
            <div class="somewhere_playlist">
              <unicon
                class="somewhere_playlist"
                name="shopping-bag"
                width="15"
                height="15"
                fill="white"
              />
            </div>
          </div>

          <div class="price_txt somewhere_playlist">
            <span
              class="somewhere_playlist"
              style="color: white; font-size: 15px"
              >$199</span
            >
          </div>
        </div>
      </div>

      <div class="accordion" @click="open_accordion">
        <span> Exclusive License</span> <br />
        <span style="font-size: 10px">NEGOTIATE</span>
      </div>
      <div class="panel">
        <div
          class="btn_buy_player somewhere_playlist hide_on_576"
          style="width: 100px"
        >
          <div class="price_txt somewhere_playlist">
            <router-link to="/contact" @click="close_mobile_menu">
              <span
                class="somewhere_playlist"
                style="color: white; font-size: 15px"
                >Contact me
              </span>
            </router-link>
          </div>
        </div>
      </div>

      <!-- <div>
        <div class="search_div">
          <div class="search_input">
            <span>{{ link_share }}</span>
          </div>
          <div
            class="copy"
            @click="copy"
            style="color: #42b983; cursor: pointer"
          >
            Copy
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<style scoped>
#modal_cart {
  overflow-y: scroll;
}
.search_input {
  width: 80%;
  border-width: 0px;
  box-shadow: 0 10px 15px rgb(25 25 25 / 10%);
  padding: 10px 0px 10px 10px;
  color: #2c3e50;
  overflow: hidden;
  border-radius: 5px;
}
.search_div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-items: center;
}

/* The Modal (background) */
.modal_cart {
  display: none;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  max-height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  overflow: hidden;
}

/* Modal Content/Box */
.modal_cart-content {
  position: relative;
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  max-width: 80%; /* Could be more or less, depending on screen size */
  border-color: white;
  border-radius: 5px;
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
@media only screen and (max-width: 600px) {
  .search_input {
    margin: 50px 10% 0px 10%;
  }
}
@media only screen and (max-width: 768px) {
  .modal_cart-content {
    width: 80%; /* Could be more or less, depending on screen size */
  }
  .search_div {
    flex-direction: column;
  }
  .search_div > div {
    margin-bottom: 20px;
  }
  .search_input {
    width: 100%;
  }
}
</style>
<style scoped>
.btn_buy_player {
  background: #42b983;
  display: flex;
  padding: 2px 15px 5px 15px;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: pointer;
  width: 50px;
  margin-bottom: 20px;
}
.btn_buy_player > div {
  margin: 0 2px 0 2px;
}
.usage_block {
  display: flex;
  justify-content: space-between;
  width: 70%;
}
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
  border-radius: 5px;
  margin-bottom: 10px;
}

.active,
.accordion:hover {
  background-color: lightgray;
}
.usage_title {
  color: #42b983;
}
.accordion:after {
  content: "\002B";
  color: #42b983;
  font-weight: bold;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "\2212";
}

.panel {
  padding: 0 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}
@media only screen and (max-width: 767px) {
  .usage_block {
    width: 100%;
  }
}
</style>
<script>
import { mapState } from "vuex";
export default {
  name: "CartModal",
  data() {
    return {
      test: {},
      cartArray: [],
      correspond: 0,
    };
  },
  props: {
    open_cartModal: {
      type: Boolean,
      default: false,
    },
    price_get: {
      type: String,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(["cart_count"]),
  },
  updated() {
    if (this.open_cartModal == true) {
      document.getElementById("modal_cart").style.display = "block";
      document.querySelector("body").style.overflow = "hidden";

      //this.cartArray.push(this.data.price);
      //console.log(this.cartArray);
    }
    if (this.open_cartModal == false) {
      document.getElementById("modal_cart").style.display = "none";
      document.querySelector("body").style.overflow = "auto";
    }
  },
  methods: {
    close_cartModal_function() {
      this.$emit("close_cartModal_function");
    },
    open_accordion(event) {
      event.currentTarget.classList.toggle("active");
      var panel = event.currentTarget.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
      let modal_cart_content = document.querySelector(".modal_cart-content");
      for (let i = 0; i < modal_cart_content.children.length; i++) {
        // modal_content.children[i].classList.remove("active");
      }
    },
    takeunique(data, key) {
      //GET UNIQUE VALUES FROM OBJECT OF ARRAYS
      return [...new Map(data.map((x) => [key(x), x])).values()];
    },
    add_to_cart(event) {
      if (!localStorage.getItem("cart_session")) {
        let newData = {};
        newData = this.data;
        newData.license = event.currentTarget.getAttribute("license");
        newData.price = event.currentTarget.getAttribute("price");
        this.cartArray.push(newData);
        localStorage.setItem("cart_session", JSON.stringify(this.cartArray));
        this.$store.dispatch(
          "update_cart_count",
          this.takeunique( JSON.parse(localStorage.getItem("cart_session")),(it) => it.id  ).length
        );
        this.$swal({
          title: "The beat was successfully added",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        let cart_session_array = JSON.parse(
          localStorage.getItem("cart_session")
        );

        cart_session_array.forEach((element, index) => {
          if (
            cart_session_array[index].id == this.data.id &&
            event.currentTarget.getAttribute("license") !=
              cart_session_array[index].license
          ) {
            cart_session_array[index].license =
              event.currentTarget.getAttribute("license");
            cart_session_array[index].price =
              event.currentTarget.getAttribute("price");
          } else if (cart_session_array[index].id != this.data.id) {
            let newData = {};
            newData = this.data;
            newData.license = event.currentTarget.getAttribute("license");
            newData.price = event.currentTarget.getAttribute("price");
            cart_session_array.push(newData);
            newData = {};
          }
        });
        localStorage.setItem(
          "cart_session",
          JSON.stringify(cart_session_array)
        );

        this.$store.dispatch(
          "update_cart_count",
          this.takeunique(
            JSON.parse(localStorage.getItem("cart_session")),
            (it) => it.id
          ).length
        );
        this.$swal({
          title: "The beat was successfully added",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    },
  },
  created() {
    // let cart_session_array = JSON.parse(localStorage.getItem("cart_session"));
    // cart_session_array.forEach((element, index) => {
    //   console.log(cart_session_array[index].price);
    // });
    //localStorage.removeItem("cart_session");
  },
};
</script>
