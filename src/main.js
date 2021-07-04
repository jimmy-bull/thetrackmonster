import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import WaveSurferVue from "wavesurfer.js-vue";
import Unicon from 'vue-unicons'

import { uniLayerGroupMonochrome, uniCarWash, uniShoppingBag, uniHeart, uniBell, uniUser, uniListUiAlt, uniMultiply, uniPlay, uniShareAlt, uniFacebook, uniInstagram, uniYoutube, } from 'vue-unicons/dist/icons'



Unicon.add([uniLayerGroupMonochrome, uniCarWash, uniShoppingBag, uniHeart, uniBell, uniUser, uniListUiAlt, uniMultiply, uniPlay, uniShareAlt, uniFacebook, uniInstagram, uniYoutube])
createApp(App).use(store).use(Unicon).use(router).use(WaveSurferVue).mount('#app')



