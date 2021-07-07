import { createStore } from 'vuex'

export default createStore({
  state: {
    play_current: {},
    play_list: {},
    has_created_playlist: false,
    wavesurferState: false,
    domain_for_external_js_css_file: 'http://127.0.0.1:8000/'
  },
  mutations: {
    wavesurferState(state) {
      state.wavesurferState = true;
    }
  },
  actions: {
    wavesurferState(context) {
      context.commit('wavesurferState')
    }
  },
  modules: {
  }
})
