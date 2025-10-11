export default {
  state: {
    categories: JSON.parse(localStorage.getItem("categories")) || [],
  },
  mutations: {
    addCategory(state, category) {
      state.categories.push(category);
      localStorage.setItem("categories", JSON.stringify(state.categories));
    },
    updateCategory(state, updatedCategory) {
      const index = state.categories.findIndex((c) => c.id === updatedCategory.id);
      if (index !== -1) {
        state.categories[index] = updatedCategory;
        localStorage.setItem("categories", JSON.stringify(state.categories));
      }
    },
    deleteCategory(state, categoryId) {
      state.categories = state.categories.filter((c) => c.id !== categoryId);
      localStorage.setItem("categories", JSON.stringify(state.categories));
    },
  },
};
