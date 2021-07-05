import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Unicon from 'vue-unicons'

import { uniLayerGroupMonochrome, uniCarWash, uniShoppingBag, uniHeart, uniBell, uniUser, uniListUiAlt, uniMultiply, uniPlay, uniShareAlt, uniFacebook, uniInstagram, uniYoutube, uniPause, uniSkipForward, uniStepBackward, uniRepeat, uniVolume, } from 'vue-unicons/dist/icons'



Unicon.add([uniLayerGroupMonochrome, uniCarWash, uniShoppingBag, uniHeart, uniBell, uniUser, uniListUiAlt, uniMultiply, uniPlay, uniShareAlt, uniFacebook, uniInstagram, uniYoutube, uniPlay, uniPause, uniSkipForward, uniStepBackward, uniRepeat, uniVolume])
createApp(App).use(store).use(Unicon).use(router).mount('#app')



