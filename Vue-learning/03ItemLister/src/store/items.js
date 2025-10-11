export default {
  namespaced: true,
  state: {
    items: JSON.parse(localStorage.getItem("items")) || [],
  },
  mutations: {
    addItem(state, item) {
      state.items.push(item);
      localStorage.setItem("items", JSON.stringify(state.items));
    },
     deleteItem(state, id) {
      state.items = state.items.filter((item) => item.id !== id);
      localStorage.setItem("items", JSON.stringify(state.items));
    },
  },
};
