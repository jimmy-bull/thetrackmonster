<template>
     <!-- DIV COVER AND SONG INFOS -->
        <div class="Lil_div_cover_song_info">

            <!-- Div SONG DETAILS AND TAG-->
            <div class="infos_song">
                

                <!-- COVER IMAGE -->
                <div class="cover"> <img src="images/Playing/drake.jpg"> </div>

                <div class="div_song_details">

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

            </div>

                <!-- SONG TAGS DIV-->
                <div class="div_song_tags">
                    <div class="tags"> #Tag 1</div>
                    <div class="tags"> #Tag 2</div>
                    <div class="tags"> #Tag 3</div>
                </div>
                <!-- End song tags div-->

            <!-- End div SONG DETAILS AND TAG-->

        </div>
</template>

 


<style scoped>
 .flex_container {}

        .Lil_div_cover_song_info {
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 10vh;
        }

        .infos_song {
            display: flex;
        }

        .infos_song > div { 
            margin: 0 20px 0 20px;
        }


        .cover > img {
            height: 190px;
            width: 190px;
            object-fit: cover;

        }

        .div_song_details {

        }

        #play-pause {
            width: 70px;
            height: 30px;
            margin-left: -18px;
        }

        .div_songTitle_play-boutton {
            margin-bottom: 11px;
        }

        .Title {
            font-size: 30px;
            font-weight: bold;
        }

        .div_nom_artiste {
            margin-bottom: 11px;
        }


        .artiste_name {
            font-weight: bold;
            margin-bottom: 11px;
            font-size: 18px;
        }

        .div_bpm_date {
            display: flex;
            margin-bottom: 11px;
            font-size: 15px;
        }

        .little_bpm_div {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid white;
            background-color: #42b983;
            color: white;
            border-radius: 3px;
            font-size: 8px;
            padding-left: 5px;
            padding-right: 5px;
        }

        .bpm_number {
            padding-left: 2px;
            margin-right: 15px;
            font-weight: bold;
        }

        .date {
            font-weight: bold;
        }

        .div_prix_share {
            display: flex;
        }

        .prix_share {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #42b983;
            color: white;
            width: 125px;
            height: 45px;
            border-radius: 3px;
            transition: transform .2s; /* Animation */
        }

        .prix_share:hover{
            transform: scale(1.1);
        }


        .space_prix {
            margin-right: 10px;
        }


        .div_song_tags {
            display: flex;
            margin-top: 78px;
        }

        .tags {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid black;
            margin-right: 13px;
            border-radius: 20px;
            height: 40px;
            width: 110px;
            background-color: white;
            color: black;
        }


        /* REPONSIVE MEDIA QUERIES */
        @media only screen and (max-width: 1024px) {

            .infos_song > div {
                width: 100%;
            }

            .infos_song {
                justify-content: center;
                flex-direction: column;
            }

            .Lil_div_cover_song_info{
                justify-content: center;
                flex-direction: column;
            }

            .cover img{
                margin-left: 11%;
            }

            .div_songTitle_play-boutton{
                margin-left: 17%;
            }

            .div_nom_artiste{
                margin-left: 32%;
            }

            .div_bpm_date{
                margin-left: 16%;
            }



        }

</style>
<script>
export default {
  name: "Beats-desc",
};
</script>
