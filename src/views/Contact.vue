<template>
  <div class="flex-container">
    <div class="contact_title">
      <h1>CONTACT</h1>
    </div>
    <div class="input_side">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          class="animation_input name_c"
        />
        <!-- <label for="Post-name" class="text_input animation_champ"> Nom </label> -->
        <p class="error">{{ name_error }}</p>
      </div>

      <div style="margin-left: 20px">
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          class="animation_input mail"
        />
        <!-- <label for="Post-name" class="text_input animation_champ">
          E-mail
        </label> -->
        <p class="error">{{ mail_error }}</p>
      </div>
    </div>
    <div class="box_objet">
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        class="animation_input subject"
      />
      <!-- <label for="Post-name" class="text_input animation_champ">
        Subject
      </label> -->
      <p class="error">{{ subject_error }}</p>
    </div>

    <div class="box_objet">
      <input
        type="text"
        name="message"
        placeholder="MESSAGE"
        class="animation_input message"
      />
      <p class="error">{{ message_error }}</p>
      <!-- <label for="Post-name" class="text_input animation_champ">
        MESSAGE
      </label> -->
    </div>
    <div
      @click="envoi_btn"
      style="display: flex; justify-content: flex-end; width: 100%"
    >
      <div class="envoi-btn">
        ENVOYER MESSAGE
        <HalfCircleSpinner
          style="margin-left: 50px"
          :animation-duration="1000"
          :size="25"
          color="#2c3e50"
          v-if="loading_co == true"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.error {
  color: #42b983;
}
.contact_title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Serif JP", serif;
  position: relative;
  top: -100px;
  margin-bottom: -90px;
}
.input_side {
  display: flex;
}
.input_side > div {
  width: 100%;
}
.flex-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 150px 25% 0 25%;
}

.box_nom_email {
  display: flex;
}
.box_nom_email > div {
  margin: 0px 20px 0px 20px;
}
input[type="text"] {
  width: 100%;
}
.box_objet {
  width: 100%;
}
.email_width {
  margin-left: 20px;
}

.box_envoi_message {
  background-color: #42b983;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 30px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 7px;
  padding-bottom: 7px;
  opacity: 0.9;
  transition: 0.4s ease;
}

.envoi-btn {
  margin: 20px 0px;
  background-color: #42b983;
  color: black;
  padding: 20px 30px;
  border-radius: 5px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  opacity: 0.9;
  transition: 0.4s ease;
  color: white;
  font-size: 13px;
}

/* .envoi-btn:hover {
  background-color: #2c3e50;
  color: white;
  opacity: 1;
  transition: 0.4s ease;
} */

input {
  outline: 0;
  /* border-width: 0 0 3px; */
  /* border-color: #f5f5f5; */
  background-color: black;
  /* border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden; */
  /* border-bottom-style: groove; */
  background-color: #eee;
  margin-top: 6vh;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  padding: 10px 0px 10px 10px;
  color: #2c3e50;
  border-width: 0px;
}

.text_input {
  margin-bottom: -2px;
  margin-top: 2em;
  /* font-family: "Noto Serif JP", serif; */
  font-size: 13px;
  position: relative;
  top: -20px;
  margin-bottom: -20px;
}

.animation_champ {
  color: black;
  pointer-events: none;
  transition: 0.3s;
}

.animation_input {
  background-color: inherit;
  display: block;
  transition: 0.2s;
}

.animation_input:focus ~ label {
  top: -60px !important;
  font-size: 12px;
  color: #42b983;
  font-weight: bold;
}
label {
  font-size: 12px !important;
  text-transform: uppercase;
  top: -30px !important;
  left: 10px;
}
@media only screen and (max-width: 768px) {
  .flex-container {
    margin: 150px 15% 0 15%;
  }
}
@media only screen and (max-width: 360px) {
  .flex-container {
    margin: 150px 5% 0 5%;
  }
}

@media only screen and (max-width: 576px) {
  .error {
    font-size: 10px;
  }
  .envoi-btn {
    margin: 20px 0px;
    background-color: #42b983;
    color: black;
    padding: 10px 30px;
    border-radius: 5px;
    font-weight: 300;
    border: none;
    cursor: pointer;
    opacity: 0.9;
    transition: 0.4s ease;
    color: white;
    font-size: 10px;
  }
}
</style>
<script>
import Axios from "axios";
import { mapState } from "vuex";
import { HalfCircleSpinner } from "epic-spinners";
export default {
  name: "Contact",
  data() {
    return {
      name_error: "",
      mail_error: "",
      subject_error: "",
      message_error: "",
      loading: false,
    };
  },
  components: {
    HalfCircleSpinner,
  },
  computed: {
    ...mapState([
      "domain_for_external_js_css_file",
      "play_current",
      "playing",
      "play_list",
      "wishlist_count",
    ]),
  },
  methods: {
    envoi_btn() {
      if (document.querySelector(".message").value.trim() == "") {
        this.message_error = "The field must not be empty!";
      } else {
        this.message_error = "";
      }
      if (document.querySelector(".name_c").value.trim() == "") {
        this.name_error = "The field must not be empty!";
      } else {
        this.name_error = "";
      }

      if (document.querySelector(".mail").value.trim() == "") {
        this.mail_error = "The field must not be empty!";
      } else {
        this.mail_error = "";
      }

      if (document.querySelector(".subject").value.trim() == "") {
        this.subject_error = "The field must not be empty!";
      } else {
        this.subject_error = "";
      }
      if (
        document.querySelector(".message").value.trim() != "" &&
        document.querySelector(".name_c").value.trim() != "" &&
        document.querySelector(".mail").value.trim() != "" &&
        document.querySelector(".subject").value.trim() != ""
      ) {
        this.loading = true;
        Axios.get(
          this.domain_for_external_js_css_file +
            "api/email_me/" +
            document.querySelector(".name_c").value.trim() +
            "/" +
            document.querySelector(".mail").value.trim() +
            "/" +
            document.querySelector(".subject").value.trim() +
            "/" +
            document.querySelector(".message").value.trim()
        )
          .then((response) => {
            if (response.data == "Please enter a valid email") {
              this.$swal({
                title: response.data,
                icon: "error",
                showConfirmButton: false,
                timer: 2000,
              });
              this.loading = false;
            } else {
              this.$swal({
                title: "message sent successfully",
                icon: "success",
                showConfirmButton: false,
                timer: 2000,
              });
              this.loading = false;
            }
          })
          .catch((err) => console.log(err));
      }
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>