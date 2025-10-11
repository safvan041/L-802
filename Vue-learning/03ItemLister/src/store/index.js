import { createStore } from 'vuex'
import auth from './auth'
import items from "./items";
import category from './category';

export default createStore({
  modules: { auth, items, category }
})
