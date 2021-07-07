<template>

</template>

  <div class="flex_container">
        
        <div class="div_songCover_infos">
            
            <div class="cover"> </div>

            <!-- Div Informations sur le Song-->
            <div class="infos_song">
                
                <!-- Div Titre son -->
                <div class="div_songTitle_play-boutton">
                    <input type="checkbox" id="play-pause" /> 
                    <span class="Title"> TITLE </span>
                </div>
                <!-- End div Titre son -->


                <!-- Div nom artiste -->
                <div class="div_nom_artiste">
                    <span class="artiste_name"> Pluto </span>
                </div>
                <!-- end div nom artiste -->


                <!-- Div nom BPM Date -->
                <div class="div_bpm_date">
                    <div class="little_bpm_div">BPM</div> 
                    <span class="bpm_number">126</span>
                    <span class="date">July 6, 2021</span>
                </div>
                <!-- end nom BPM Date -->


                <div class="div_prix_share">
                    <div class="prix_share space_prix">
                         <img href="#" class="icons_price_share"> $29.99
                    </div> 

                    <div class="prix_share">Share</div>
                </div>

            </div>
            <!-- End div Informations sur le Song-->


                    <!-- SONG TAGS DIV-->
                <div class="div_song_tags">
                    <div class="tags"> #Tag 1</div>
                    <div class="tags"> #Tag 2</div>
                    <div class="tags"> #Tag 3</div>
                </div>
                <!-- End song tags div-->
        </div>

    </div>


<style scoped>

body{
    font-family: sans-serif;
}


.flex_container{
    margin-top: 5%;
}

.div_songCover_infos{
    display: flex;
    justify-content: center;
    align-items: center;
}

.infos_song{
    display: block;
    padding: 6px;
    margin-right: 20%;
    margin-left: 25px;
}


.cover{
    width: 180px;
    height: 180px;
    background-image: url("images/panier/drake.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 4px;
}


#play-pause{
    width: 60px;
    height: 25px;
    margin-left: -18px;
}


.div_songTitle_play-boutton{
    display: flex;
    margin-bottom: 11px;
}

.Title{
    font-size: 20px;
    position: relative;
    top: 5px;
    font-weight: bold;
}

.div_nom_artiste{
    margin-bottom: 11px;
}


.artiste_name{
    font-weight: bold;
    margin-bottom: 11px;
}

.div_bpm_date{
    display: flex;
    margin-bottom: 11px;
}

.little_bpm_div{
    border: 1px solid white;
    background-color: black;
    color: white;
    border-radius: 3px;
    font-size: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 3px;
    padding-right: 3px;
}

.bpm_number{
    padding-left: 2px;
    margin-right: 15px;
    font-weight: bold;
}

.date{
    font-weight: bold;
}

.div_prix_share{
    display: flex;
}

.prix_share{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    width: 110px;
    height: 40px;
    border-radius: 3px;
}


.space_prix{
    margin-right: 10px;
}

.div_song_tags{
    display: flex;  
}

.tags{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    margin-right: 13px;
    border-radius: 14px;
    height: 34px;
    width: 120px;
    background-color: black;
    color: white;
    margin-top: 23%;
}



</style>
<script>
export default {
  name: "Beats-desc",
};
</script>
