<template>
  <div class="footer_block">
    <div>
      <router-link to="/">
        <img class="logo" src="../../public/logo.png" alt=""
      /></router-link>
    </div>
    <div class="vertical_link_footer">
      <div>
        <router-link to="/">Home</router-link>
      </div>
      <div>
        <router-link to="/beats?q=all">Beats</router-link>
      </div>
      <div>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>

    <div class="vertical_link_footer">
      <!-- <div>
        <router-link to="/">Licensing Info</router-link>
      </div> -->
      <div>
        <router-link to="/contact">Terms of use</router-link>
      </div>
      <div>
        <router-link to="/contact">Privacy policy</router-link>
      </div>
    </div>
    <div class="vertical_link_footer">
      <div>
        <a href=""><unicon name="instagram" fill="#2c3e50" /></a>
      </div>
      <div>
        <a href=""><unicon name="facebook" fill="#2c3e50" /></a>
      </div>
      <div>
        <a href=""><unicon name="youtube" fill="#2c3e50" /></a>
      </div>
    </div>
  </div>
  <!--  -->
</template>
<style scoped>
.social_block > div {
  margin: 0px 2% 0px 2%;
}
.footer_block {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 100px 0 0px 0;
  background: #f5f5f5;
  padding-bottom: 30px;
  padding-top: 30px;
}
.footer_block > div {
  margin: 0px 5% 0px 5%;
}
.vertical_link_footer > div {
  margin-bottom: 10px;
}
a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #42b983;
  margin-top: 60px;
  fill: #42b983;
}
a {
  text-decoration: none;
}
@media only screen and (max-width: 576px) {
  .footer_block > div {
    margin: 0px 2% 50px 2%;
  }
  a {
    font-size: 13px;
  }
}
@media only screen and (max-width: 360px) {
  .footer_block > div {
    margin: 0px 1% 50px 1%;
  }
  .footer_block {
  }
}
</style>
<script>
export default {
  name: "Footer",
};
</script>
