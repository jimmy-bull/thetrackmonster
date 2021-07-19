import { createStore } from 'vuex'

export default createStore({
  state: {
    play_current: {},
    play_list: {},
    playing: false,
    has_created_playlist: false,
    wavesurferState: false,
    domain_for_external_js_css_file: 'http://127.0.0.1:8000/',
    TrackDuration: 10,
    TrackCurentTime: 0,
    class_reference: null,
    Alltags: [],
    item_id: null
  },
  mutations: {
    play_pause_player(state, audio) {
      if (state.playing == false) {
        state.playing = true;
        audio.play()
        document.querySelector('.index--' + state.class_reference).classList.replace('fa-play', "fa-pause")
      } else {
        state.playing = false;
        audio.pause();
        document.querySelector('.index--' + state.class_reference).classList.replace('fa-pause', "fa-play")
      }
    },
    timeupdate(state, audio) {
      state.TrackDuration = Math.ceil(audio.duration);
      state.TrackCurentTime = Math.ceil(audio.currentTime);
    },
    play_from_elements(state, { class_reference, audio, play_current, play_list, item_id }) {
      state.play_current = play_current;
      state.item_id = item_id
      state.play_list = play_list
      if (state.class_reference == null) {
        audio.src = state.play_current.src
        audio.play()
        state.playing = true;
        let elementI = document.getElementsByClassName(
          "index--" + class_reference
        );
        for (let it = 0; it < elementI.length; it++) {
          elementI[it].classList.replace(
            "fa-play",
            "fa-pause"
          );
        }
        state.class_reference = class_reference;
      }
      else if (state.class_reference == class_reference) {

        if (state.playing == true) {
          let elementI = document.getElementsByClassName(
            "index--" + class_reference
          );
          for (let it = 0; it < elementI.length; it++) {
            elementI[it].classList.replace(
              "fa-pause",
              "fa-play"
            );
          }
          audio.pause();
          state.playing = false
        } else {
          let elementI = document.getElementsByClassName(
            "index--" + class_reference
          );
          for (let it = 0; it < elementI.length; it++) {
            elementI[it].classList.replace(
              "fa-play",
              "fa-pause"
            );
          }
          audio.play();
          state.playing = true
        }

      } else {
        if (state.playing == true) {
          audio.src = state.play_current.src
          let elementI = document.getElementsByClassName(
            "index--" + state.class_reference
          );
          // document.querySelector('.playlist--' + state.class_reference).style.background = "#eefdec"
          for (let it = 0; it < elementI.length; it++) {
            elementI[it].classList.replace(
              "fa-pause",
              "fa-play"
            );
          }
          let elementINew = document.getElementsByClassName(
            "index--" + class_reference
          );
          for (let it = 0; it < elementINew.length; it++) {
            elementINew[it].classList.replace(
              "fa-play",
              "fa-pause"
            );
          }
          audio.play();
          state.playing = true
          state.class_reference = class_reference;
        }


        else {
          audio.src = state.play_current.src
          let elementINew = document.getElementsByClassName(
            "index--" + class_reference
          );
          for (let it = 0; it < elementINew.length; it++) {
            elementINew[it].classList.replace(
              "fa-play",
              "fa-pause"
            );
          }
          audio.play();
          state.playing = true
          state.class_reference = class_reference;
        }
      }
    },
  },
  actions: {
    play_pause_player(context, audio) {
      context.commit('play_pause_player', audio)
    },
    timeupdate(context, audio) {
      context.commit('timeupdate', audio)
    },
    play_from_elements(context, { class_reference, audio, play_current, play_list, item_id }) {
      context.commit('play_from_elements', { class_reference, audio, play_current, play_list, item_id })
    }
  },
  modules: {
  }
})
