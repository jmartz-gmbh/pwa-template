import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import routes from './routes';

import plausible from './plugins/plausible';

const plausibleOptions = { 
  domain: 'www.pwa-template.de',
  apiHost: 'https://tracking.jmartz.gmbh',
  hashMode: false,
  trackLocalhost: false,
};

const app = createApp(App);

app.use(plausible,plausibleOptions);
app.use(routes);
app.use(store);
app.mount('#app')
