import { createApp } from 'vue'
import App from './App.vue';
import store from './store';   // Assuming your store file is named 'store.js' and is in the same folder



const app = createApp(App)
app.use(store)
app.mount('#app');