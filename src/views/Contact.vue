<!DOCTYPE html>
<html>
<head>
<title>Contact</title>
</head>

<body>


<div class="flex-container" >

    <div class="contact_title">
        <h1> CONTACT </h1>
    </div>

    <div class="box_nom_email">

            <div class="width_inputs">

                <input type="text" id="name" name="name" required
                minlength="4" maxlength="8" size="38" class="animation_input">

                <label for="Post-name" class="text_input animation_champ"> VOTRE NOM </label>

            </div>


            <div class="width_inputs email_width">
                
                <input type="text" id="E-mail" name="name" required
                minlength="4" maxlength="8" size="38" class="animation_input">
           
                <label for="Post-name" class="text_input animation_champ"> ADRESSE E-MAIL </label>

            </div>
    </div>


            <div class="box_objet width_inputs">

                <input type="text" id="E-mail" name="name" required
                minlength="4" maxlength="8" size="84" class="animation_input">

                <label for="Post-name" class="text_input animation_champ"> OBJET </label>
            </div>


            <div class="width_inputs">

                <input type="text" id="E-mail" name="name" required
                minlength="4" maxlength="8" size="84" class="animation_input">

                <label for="Post-name" class="text_input animation_champ"> MESSAGE </label>
            </div>


            <input class="envoi-btn" type="submit" value="ENVOYER MESSAGE">

</div>



<style> 

@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@900&display=swap');

.contact_title{
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Noto Serif JP', serif;
    position: relative;
    top: -100px;;
    margin-bottom: -90px;;
}


.flex-container{
    border: 1px solid green;
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
}


.box_nom_email{
    display: flex;
    flex-wrap: wrap;
}


.email_width{
    margin-left: 20px;
}


.box_envoi_message{
    background-color: #42b983;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    margin-top: 30px;
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 7px;
    padding-bottom: 7px;
    opacity:0.9;
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
            margin-left: 28em;
            opacity:0.9;
            transition: 0.4s ease;
        }


.envoi-btn:hover{
    background-color: black;
    color: white;
    opacity:1;
    transition: 0.4s ease;
}


input{
  outline: 0;
  border-width: 0 0 2px;
  border-color:#f5f5f5;
  background-color: black;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  background-color: #eee;
  margin-top: 6vh;
}


.text_input{
    margin-bottom: -2px;
    margin-top: 2em;
    font-family: 'Noto Serif JP', serif;
    font-size: 13px;
    position: relative;
    top: -20px;
    margin-bottom: -20px;
}

.animation_champ{
    color:black;
    pointer-events: none;
    transition: 0.3s;
}

.animation_input{
    background-color: inherit;
    display: block;
    transition: 0.2s;
}

.animation_input:focus~label {
    top: -50px;
    font-size: 12px;
    color:#42b983;
    font-weight: bold;
}



</style>


</body>


</html>