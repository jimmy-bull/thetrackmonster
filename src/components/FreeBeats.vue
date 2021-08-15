<template>
  <!-- The Modal -->
  <div id="myModal_free" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="close_share_function">&times;</span>
      <div>
        <h2>Free Beats Download</h2>
        <h5 style="color: #42b983">Enter your Email Address and Full Name</h5>
        <h4>
          I will send your free track to the email address you provide below.
          Thanks!
        </h4>
      </div>
      <div>
        <input
          style="width: 95%"
          type="text"
          placeholder="E-mail adress *"
          class="txt_email_footer email_input special_txt"
          name="register_mail"
          data-v-26084dc2=""
        />
      </div>
      <div class="mt-5">
        <input
          style="width: 95%; margin-top: 20px"
          type="text"
          placeholder="Full name *"
          class="txt_email_footer email_input special_txt col-lg-12 mt-2"
          name="register_mail"
          data-v-26084dc2=""
        />
      </div>
      <div>
        <button
          style="width: 100px; margin-top: 20px"
          class="
            btn_carou_buy_now_big btn_by_now_simple
            black_on_small
            col-lg-12
            mt-3
          "
          data-v-26084dc2=""
        >
          <div
            data-v-26084dc2=""
            style="display: flex; justify-content: center; align-items: center"
          >
            <span class="ml-2" data-v-26084dc2="">Register</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.black_on_small {
  color: black;
}
.btn_by_now_simple {
  border-radius: 0px;
  background-color: transparent;
  border-bottom-style: solid !important;
  border-color: teal !important;
  border-bottom-width: 1px !important;
}
.btn_carou_buy_now_big {
  border-width: 0px;
  box-shadow: 0 10px 15px rgb(25 25 25 / 10%);
  color: white;
  padding: 10px 20px 10px 20px;
  transition: background-color 1s, color 1s linear;
  border-radius: 20px;
  background-color: #42b983;
  font-size: 12.5px;
}
.txt_email_footer {
  padding: 10px;
  /* border-radius: 20px; */
  box-shadow: 0 10px 15px rgb(25 25 25 / 10%);
  border-width: 0px;
}
.search_input {
  width: 50%;
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
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 100000000; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 30%; /* Could be more or less, depending on screen size */
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
  .modal-content {
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
<script>
export default {
  name: "FreeBeats",
  components: {},
  data() {
    return {};
  },

  props: {
    open_modalfree: {
      type: Boolean,
      default: false,
    },
    free_beats_id: {
      type: Number,
      required: true,
    },
  },

  updated() {
    if (this.open_modalfree == true) {
      document.getElementById("myModal_free").style.display = "block";
      document.querySelector("body").style.overflow = "hidden";
    }
    if (this.open_modalfree == false) {
      document.getElementById("myModal_free").style.display = "none";
      document.querySelector("body").style.overflow = "auto";
    }
  },
  methods: {
    close_share_function() {
      this.$emit("close_free_beats_function");
    },
  },
};
</script>
