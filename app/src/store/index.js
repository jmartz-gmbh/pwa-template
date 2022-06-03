import {createStore} from "vuex";
import nav from "./nav";
import url from "./url";

const store = createStore({
    modules: {
      url: url,
      nav: nav,
    },
  });

export default store;
