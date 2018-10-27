// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app
// firebase config
const config = {
  apiKey: 'AIzaSyD8T0hPaVLFZF3SrrF_xdD-XKHF7SBS7cc',
  authDomain: 'vue-golang-fireauth-7c892.firebaseapp.com',
  databaseURL: 'https://vue-golang-fireauth-7c892.firebaseio.com',
  projectId: 'vue-golang-fireauth-7c892',
  storageBucket: 'vue-golang-fireauth-7c892.appspot.com',
  messagingSenderId: '245710126728'
}
firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(user => {
  /* eslint-disable no-new */
  if (!app) {
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
