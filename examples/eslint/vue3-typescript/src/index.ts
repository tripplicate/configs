import { createApp, type Component } from 'vue';

import App from './App.vue';

const app = createApp(App as Component);

app.mount('#root');
