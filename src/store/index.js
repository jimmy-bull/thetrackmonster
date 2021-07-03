import { createStore } from 'vuex'

export default createStore({
  state: {
    play_current: {},
    play_list: {},
    has_created_playlist: false,
    wavesurferState: false
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
