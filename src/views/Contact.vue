<template>
  <div class="flex-container">
    <div class="contact_title">
      <h1>CONTACT</h1>
    </div>
    <div class="input_side">
      <div>
        <input type="text" i name="name" class="animation_input" />
        <label for="Post-name" class="text_input animation_champ"> Nom </label>
      </div>
      <div style="margin-left: 20px">
        <input type="text" name="email" class="animation_input" />
        <label for="Post-name" class="text_input animation_champ">
          E-mail
        </label>
      </div>
    </div>
    <div class="box_objet">
      <input type="text" name="subject" class="animation_input" />

      <label for="Post-name" class="text_input animation_champ">
        Subject
      </label>
    </div>

    <div class="box_objet">
      <input type="text" name="message" class="animation_input" />

      <label for="Post-name" class="text_input animation_champ">
        MESSAGE
      </label>
    </div>
    <div style="display: flex; justify-content: flex-end; width: 100%">
      <input class="envoi-btn" type="submit" value="ENVOYER MESSAGE" />
    </div>
  </div>
</template>
<style scoped>
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
}

.envoi-btn:hover {
  background-color: #2c3e50;
  color: white;
  opacity: 1;
  transition: 0.4s ease;
}

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
</style>
<script>
export default {
  name: "Contact",
};
</script>