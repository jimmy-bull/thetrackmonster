import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
import Unicon from 'vue-unicons'
import AudioVisual from 'vue-audio-visual'
import { uniLayerGroupMonochrome, uniCarWash, uniShoppingBag, uniHeart, uniBell, uniUser, uniListUiAlt, uniMultiply, uniPlay, uniShareAlt, uniFacebook, uniInstagram, uniYoutube, uniPause, uniSkipForward, uniStepBackward, uniRepeat, uniVolume, uniClock, uniVolumeMute, uniTimes, uniImport, uniMusic, uniCommentAltMedical, uniEstate, } from 'vue-unicons/dist/icons'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// App.config.globalProperties.$http = Axios;

Unicon.add([uniLayerGroupMonochrome, uniCarWash, uniShoppingBag, uniHeart, uniBell, uniUser, uniListUiAlt, uniMultiply, uniPlay, uniShareAlt, uniFacebook, uniInstagram, uniYoutube, uniPlay, uniPause, uniSkipForward, uniStepBackward, uniRepeat, uniVolume, uniClock, uniVolumeMute, uniTimes, uniImport, uniMusic, uniCommentAltMedical,uniEstate])
createApp(App).use(store).use(Unicon).use(router).use($).use(AudioVisual).use(VueSweetalert2).mount('#app')



