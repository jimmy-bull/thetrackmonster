<template>
  <!-- The Modal -->
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="close_share_function">&times;</span>
      <div>
        <h2>Share Track</h2>
        <h5 style="color: #42b983">MARKETPLACE FULL URL</h5>
      </div>

      <div>
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
      </div>
    </div>
  </div>
</template>
<style scoped>
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
  width: 50%; /* Could be more or less, depending on screen size */
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
  name: "Share",
  components: {},
  data() {
    return {};
  },

  props: {
    open_modal: {
      type: Boolean,
      default: false,
    },
    link_share: {
      type: String,
      required: true,
    },
  },
  

  updated() {
    if (this.open_modal == true) {
      document.getElementById("myModal").style.display = "block";
      document.querySelector("body").style.overflow = "hidden";
      document.querySelector(".copy").textContent = "Copy";
    }
    if (this.open_modal == false) {
      document.getElementById("myModal").style.display = "none";
      document.querySelector("body").style.overflow = "auto";
    }
  },
  methods: {
    close_share_function() {
      this.$emit("close_share_function");
    },
    copy(event) {
      //search_input
      var textArea = document.createElement("textarea");
      textArea.value = this.link_share;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("Copy");
      textArea.remove();
      event.currentTarget.textContent = "Copied";
    },
  },
};
</script>
