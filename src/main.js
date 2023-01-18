import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import gAuthPlugin from 'vue3-google-oauth2';

const app = createApp(App)
/*
let gauthClientId = '916535315888-q1or1qldbfcjdhdsdbv3drnhus8kbh55.apps.googleusercontent.com';
app.use(gAuthPlugin, {
  clientId: gauthClientId,
  scope: 'email',
  prompt: 'consent',
})
*/

app.use(router)
app.mount('#app')