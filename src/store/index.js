import { createStore } from 'vuex'

export default createStore({
  state: {
    play_current: {},
    play_list: {},
    playing: false,
    has_created_playlist: false,
    wavesurferState: false,
    domain_for_external_js_css_file: 'http://127.0.0.1:8000/',
    TrackDuration: 10000,
    TrackCurentTime: 0,
  },
  mutations: {
    play_pause_player(state, audio) {
      if (state.playing == false) {
        state.playing = true;
        audio.play()
      } else {
        state.playing = false;
        audio.pause();
      }
    },
    timeupdate(state, audio) {
      state.TrackDuration = audio.duration;
      state.TrackCurentTime = audio.currentTime;
    },

  },
  actions: {
    play_pause_player(context, audio) {
      context.commit('play_pause_player', audio)
    },
    timeupdate(context, audio) {
      context.commit('timeupdate', audio)
    },

  },
  modules: {
  }
})
