<template>
  <div class="category-page">
    <AppHeader />

    <div class="header-row">
      <h2>Manage Categories</h2>
      <button class="add-btn" @click="showPopup = true">+ Add Category</button>
    </div>

    <!-- Category List -->
    <div v-if="categories.length" class="category-list">
      <div v-for="cat in categories" :key="cat.id" class="category-card">
        <div>
          <h3>{{ cat.name }}</h3>
          <p>{{ cat.displayName }}</p>
        </div>
        <div class="actions">
          <button @click="editCategory(cat)">Edit</button>
          <button class="delete" @click="deleteCategory(cat.id)">Delete</button>
        </div>
      </div>
    </div>
    <p v-else class="empty">No categories added yet.</p>

    <!-- Add/Edit Popup -->
    <div v-if="showPopup" class="popup-overlay" @click.self="closePopup">
      <div class="popup-box">
        <h2>{{ editMode ? 'Edit Category' : 'Add Category' }}</h2>
        <form @submit.prevent="saveCategory">
          <label>Name</label>
          <input v-model="tempCategory.name" required />

          <label>Display Name</label>
          <input v-model="tempCategory.displayName" required />

          <div class="buttons">
            <button type="submit">{{ editMode ? 'Update' : 'Add' }}</button>
            <button type="button" class="cancel" @click="closePopup">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/Header.vue'
import { mapState, mapMutations } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'CategoryPage',
  components: { AppHeader },
  data() {
    return {
      showPopup: false,
      editMode: false,
      tempCategory: { id: null, name: '', displayName: '' },
    }
  },
  computed: {
    ...mapState({
      categories: (state) => state.category.categories,
      items: (state) => state.items.items,
    }),
  },
  methods: {
    ...mapMutations(['addCategory', 'updateCategory', 'deleteCategory']),
    closePopup() {
      this.showPopup = false
      this.tempCategory = { id: null, name: '', displayName: '' }
      this.editMode = false
    },
    saveCategory() {
      if (this.editMode) {
        this.updateCategory(this.tempCategory)
        alert('Category updated!')
      } else {
        const newCat = {
          id: uuidv4(),
          name: this.tempCategory.name,
          displayName: this.tempCategory.displayName,
        }
        this.addCategory(newCat)
        alert('Category added!')
      }
      this.closePopup()
    },
    editCategory(cat) {
      this.tempCategory = { ...cat }
      this.editMode = true
      this.showPopup = true
    },
    deleteCategory(catId) {
      const used = this.items.some(
        (item) => item.category === catId || item.category === this.findCategoryNameById(catId)
      )
      if (used) {
        alert('This category is currently in use by an item. Cannot delete!')
        return
      }
      if (confirm('Are you sure you want to delete this category?')) {
        this.deleteCategory(catId)
      }
    },
    findCategoryNameById(id) {
      const category = this.categories.find((cat) => cat.id === id)
      return category ? category.name : ''
    },
  },
}
</script>

<style scoped>
.category-page {
  padding: 20px;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.add-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: #27ae60;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.add-btn:hover {
  background: #2ecc71;
}

.category-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.category-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fdfdfd;
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 12px 18px;
}

.category-card h3 {
  margin: 0;
}

.actions {
  display: flex;
  gap: 10px;
}

button.delete {
  background: #e74c3c;
  color: #fff;
}

button.delete:hover {
  background: #c0392b;
}

.empty {
  text-align: center;
  margin-top: 40px;
  color: #777;
}

/* Popup styles */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.popup-box {
  width: 400px;
  background: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
}

.popup-box h2 {
  text-align: center;
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-top: 10px;
}

input {
  width: 100%;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  margin-top: 5px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

button.cancel {
  background: #e74c3c;
  color: #fff;
}

button:hover {
  opacity: 0.85;
}
</style>
