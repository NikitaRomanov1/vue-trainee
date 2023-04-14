import { createApp } from "vue";
import App from "./app";
import "./main.css";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#app");
