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
      <div class="count_number"><span>0</span></div>
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
      <div class="">
        <router-link to="/beats">Beats</router-link>
      </div>
      <hr />
      <div class="">
        <router-link to="/contact">Contact</router-link>
      </div>
      <hr />
      <div class="with_up link_block_mobile">
        <div>
          <div class="count_number_phone"><span>0</span></div>
          <router-link to="/cart">
            <unicon name="shopping-bag" fill="#2c3e50"
          /></router-link>
        </div>
        <div style="text-indent: 10px">
          <router-link to="/wishlist">Cart</router-link>
        </div>
      </div>
      <hr />
      <div class="with_up link_block_mobile">
        <div class="count_number_phone"><span>0</span></div>
        <router-link to="/wishlist">
          <unicon name="heart" fill="#2c3e50"
        /></router-link>
        <div style="text-indent: 10px">
          <router-link to="/wishlist">wishlist</router-link>
        </div>
      </div>

      <hr />
      <!-- <div class="with_up link_block_mobile">
        <div class="count_number_phone"><span>0</span></div>
        <router-link to="/wishlist">
          <unicon name="bell" fill="#2c3e50"
        /></router-link>
        <div style="text-indent: 10px">
          <router-link to="/wishlist">Notification</router-link>
        </div>
      </div> -->
      <hr />

      <div class="with_up link_block_mobile">
        <div class="count_number_phone"><span>0</span></div>
        <router-link to="/wishlist">
          <unicon name="user" fill="#2c3e50"
        /></router-link>
        <div style="text-indent: 10px">
          <router-link to="/wishlist">Login</router-link>
        </div>
      </div>
      <hr />
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
    ...mapState(["wishlist_count", "is_connected"]),
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
  },
};
</script>
