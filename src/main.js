import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import firebase from 'firebase'

firebase.auth().onAuthStateChanged((user) =>{
  if(user){
      store.dispatch('auth/setUser', user);
      store.dispatch('heros/fetchHeros', user);
  }else{
      store.dispatch('auth/setUser', null);
  }
});

createApp(App).use(ElementPlus).use(store).use(router).mount('#app')
