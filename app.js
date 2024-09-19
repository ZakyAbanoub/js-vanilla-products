import Store from "./services/Store.js";
// import API from "./services/API";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";

//Link Custom Components
import { MenuPage } from "./components/MenuPage.js";
import { DetailsPage } from "./components/DetailsPage.js";
import { OrderPage } from "./components/OrderPage.js";

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
  loadData();
  app.router.init();
});
