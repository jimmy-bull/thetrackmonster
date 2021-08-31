<template>
  <div class="menu_desktop">
    <div>
      <router-link to="/">
        <img class="logo" src="../../public/logo.png" alt=""
      /></router-link>
    </div>

    <div class="hide_on_767">
      <router-link to="/beats?q=all">Beats</router-link>
    </div>
    <!-- <div class="hide_on_767">
      <router-link to="/shop">Shop</router-link>
    </div> -->

    <div class="hide_on_767">
      <router-link to="/contact">Contact</router-link>
    </div>
    <div class="with_up hide_on_767">
      <div class="count_number">
        <span>{{ cart_count }}</span>
      </div>
      <router-link to="/cart">
        <unicon name="shopping-bag" fill="#2c3e50"
      /></router-link>
    </div>
    <div class="with_up hide_on_767">
      <div class="count_number">
        <span>{{ wishlist_count }}</span>
      </div>
      <router-link to="/wishlist">
        <unicon name="heart" fill="#2c3e50"
      /></router-link>
    </div>
    <div class="search_div">
      <input
        class="search_input"
        type="text"
        placeholder="Search for beats "
        name=""
        id=""
        autocomplete="false"
        @keyup="submit"
      />
    </div>
    <!-- <div class="with_up hide_on_767">
      <div class="count_number"><span>0</span></div>
      <router-link to="/cart">
        <unicon name="bell" fill="#2c3e50"
      /></router-link>
    </div> -->
    <div class="with_up hide_on_767">
      <router-link v-if="is_connected == false" to="/account">
        <unicon name="user" fill="#2c3e50"
      /></router-link>
      <router-link v-if="is_connected == true" to="/my-space">
        <unicon name="user" fill="#2c3e50"
      /></router-link>
    </div>
    <div class="with_up hide_up_767" @click="open_menu">
      <unicon name="list-ui-alt" fill="#2c3e50" />
    </div>
  </div>
  <div class="menu_mobile" id="menu_mobile">
    <div class="menu_header">
      <div><span>Menu</span></div>
      <div @click="close_mobile_menu">
        <span><unicon name="multiply" fill="#2c3e50" /></span>
      </div>
    </div>
    <div class="link_menu_mobile">
      <div class="with_up link_block_mobile">
        <div>
          <router-link to="/" @click="close_mobile_menu">
            <unicon name="estate" fill="#2c3e50"
          /></router-link>
        </div>

        <div style="text-indent: 20px">
          <router-link to="/" @click="close_mobile_menu">Home</router-link>
        </div>
      </div>
      <div class="with_up link_block_mobile">
        <div>
          <router-link to="/beats?q=all" @click="close_mobile_menu">
            <unicon name="music" fill="#2c3e50"
          /></router-link>
        </div>

        <div style="text-indent: 20px">
          <router-link to="/beats?q=all" @click="close_mobile_menu"
            >Beats</router-link
          >
        </div>
      </div>
      <div class="with_up link_block_mobile">
        <div>
          <router-link to="/contact" @click="close_mobile_menu">
            <unicon name="comment-alt-medical" fill="#2c3e50"
          /></router-link>
        </div>

        <div style="text-indent: 20px">
          <router-link to="/contact" @click="close_mobile_menu"
            >Contact</router-link
          >
        </div>
      </div>

      <div class="with_up link_block_mobile">
        <div>
          <div class="count_number_phone">
            <span>{{ cart_count }}</span>
          </div>
          <router-link to="/cart" @click="close_mobile_menu">
            <unicon name="shopping-bag" fill="#2c3e50"
          /></router-link>
        </div>
        <div style="text-indent: 20px">
          <router-link to="/cart" @click="close_mobile_menu">Cart</router-link>
        </div>
      </div>

      <div class="with_up link_block_mobile">
        <div>
          <div class="count_number_phone">
            <span>{{ wishlist_count }}</span>
          </div>
          <router-link to="/wishlist" @click="close_mobile_menu">
            <unicon name="heart" fill="#2c3e50"
          /></router-link>
        </div>

        <div style="text-indent: 20px">
          <router-link to="/wishlist" @click="close_mobile_menu"
            >wishlist</router-link
          >
        </div>
      </div>

      <div class="with_up link_block_mobile" v-if="is_connected == false">
        <div>
          <router-link to="/account" @click="close_mobile_menu">
            <unicon name="user" fill="#2c3e50"
          /></router-link>
        </div>

        <div style="text-indent: 20px">
          <router-link to="/account" @click="close_mobile_menu"
            >Login</router-link
          >
        </div>
      </div>
      <div class="with_up link_block_mobile" v-if="is_connected == true">
        <div>
          <router-link to="/my-space" @click="close_mobile_menu">
            <unicon name="user" fill="#2c3e50"
          /></router-link>
        </div>

        <div style="text-indent: 20px">
          <router-link to="/my-space" @click="close_mobile_menu"
            >My Space</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.menu_desktop {
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu_desktop > div {
  margin: 20px;
}
.search_div {
  width: 60%;
}
.search_input {
  width: 100%;
  border-width: 0px;
  background-image: url("../../public/search.png");
  background-repeat: no-repeat;
  background-position: 98%;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  padding: 10px 0px 10px 10px;
  color: #2c3e50;
}
.with_up {
  position: relative;
}
.count_number {
  position: absolute;
  top: -12px;
  font-size: 13px;
  right: -2px;
  color: #42b983;
}
.hide_up_767 {
  display: none;
}
.menu_mobile {
  width: 0%;
  height: 100%;
  position: fixed;
  z-index: 1000000;
  top: 0;
  right: 0;
  background: white;
  transition: ease-in-out all 0.3s;
}
.menu_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}
.link_block_mobile {
  display: flex;
}
@media only screen and (max-width: 767px) {
  .hide_on_767 {
    display: none;
  }
  .hide_up_767 {
    display: block;
  }
  .menu_desktop {
    justify-content: center;
  }
  .link_menu_mobile {
    padding: 20px;
  }
  .link_menu_mobile > div {
    margin-bottom: 20px;
  }
  .count_number_phone {
    position: absolute;
    top: -12px;
    font-size: 13px;
    left: 20px;
    color: #42b983;
  }
}
@media only screen and (max-width: 360px) {
  .menu_desktop {
    justify-content: flex-start;
  }
  .menu_desktop > div {
    margin: 10px;
  }
  .search_div {
    width: 100%;
  }
}
</style>
<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapState(["wishlist_count", "is_connected", "cart_count"]),
  },

  methods: {
    close_mobile_menu() {
      document.getElementById("menu_mobile").style.width = 0;
    },
    open_menu() {
      document.getElementById("menu_mobile").style.width = "100%";
    },
    submit(event) {
      if (event.code === "Enter" && event.currentTarget.value.trim() != "") {
        this.$router.push({
          path: "beats",
          query: { q: event.currentTarget.value },
        });
      }
    },
    takeunique(data, key) {
      //GET UNIQUE VALUES FROM OBJECT OF ARRAYS
      return [...new Map(data.map((x) => [key(x), x])).values()];
    },
  },
  created() {
    if (localStorage.getItem("cart_session")) {
      this.$store.dispatch(
        "update_cart_count",
        this.takeunique(
          JSON.parse(localStorage.getItem("cart_session")),
          (it) => it.id
        ).length
      );
    }
  },
};
</script>
