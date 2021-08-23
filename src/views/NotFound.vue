<template >
  <div class="no_main">
    <div>
      <h3 class="text-center" style="color: teal">Opps! Page not found.</h3>
      <p class="cart_color_solo">
        We are sorry, but the page you're looking for cannot be found.
      </p>
      <div class="d-flex p-2 justify-content-lg-center">
        <button class="btn_carou_buy_now_big btn_by_now_simple black_on_small">
          <router-link to="/" class="link_go_back">
            <span class="ml-2">Back To Home Page</span>
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.no_main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}
.btn_carou_buy_now_big {
  border-width: 0px;
  box-shadow: 0 10px 15px rgb(25 25 25 / 10%);

  padding: 10px 20px 10px 20px;
  transition: background-color 1s, color 1s linear;
  border-radius: 20px;
  background-color: #40423c;
  font-size: 12.5px;
  cursor: pointer;
}
.link_go_back {
  color: white;
}
@media screen and (max-width: 576px) {
  .btn_by_now_simple {
    border-radius: 0px;
    background-color: transparent;
    border-bottom-style: solid !important;
    border-color: teal !important;
    border-bottom-width: 1px !important;
  }
  .link_go_back {
    color: teal;
  }
  .no_main {
    margin: 0 2% 0 2%;
  }
}
</style>
<script>
export default {
  name: "NotFound",
  data() {
    return {};
  },
};
</script>
