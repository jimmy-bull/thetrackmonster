import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
import Unicon from 'vue-unicons'


import { uniLayerGroupMonochrome, uniCarWash, uniShoppingBag, uniHeart, uniBell, uniUser, uniListUiAlt, uniMultiply, uniPlay, uniShareAlt, uniFacebook, uniInstagram, uniYoutube, uniPause, uniSkipForward, uniStepBackward, uniRepeat, uniVolume, uniClock, uniVolumeMute, } from 'vue-unicons/dist/icons'

// App.config.globalProperties.$http = Axios;

Unicon.add([uniLayerGroupMonochrome, uniCarWash, uniShoppingBag, uniHeart, uniBell, uniUser, uniListUiAlt, uniMultiply, uniPlay, uniShareAlt, uniFacebook, uniInstagram, uniYoutube, uniPlay, uniPause, uniSkipForward, uniStepBackward, uniRepeat, uniVolume, uniClock, uniVolumeMute])
createApp(App).use(store).use(Unicon).use(router).use($).mount('#app')



