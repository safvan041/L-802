<template>
  <div class="popup-overlay" @click.self="closePopup">
    <div class="popup-box">
      <h2>Add New Item</h2>

      <!-- Correct form binding -->
      <form @submit.prevent="submitItem">
        <label>Item Name</label>
        <input v-model="itemName" required />

        <label>Description</label>
        <textarea v-model="itemDescription" rows="3" required></textarea>

        <label>Category</label>
        <select v-model="selectedCategory" required>
          <option value="" disabled>Select Category</option>
          <option v-for="cat in categories" :key="cat.id" :value="cat.id">
            {{ cat.displayName }}
          </option>
        </select>

        <label>Price</label>
        <input type="number" v-model="itemPrice" min="0" required />

        <label>Item Image</label>
        <div class="img-placeholder">
          <span>Placeholder</span>
        </div>

        <div class="buttons">
          <!-- Only submit button (no extra click handler) -->
          <button type="submit">Add Item</button>
          <button type="button" class="cancel" @click="closePopup">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'AddItemPopup',
  data() {
    return {
      itemName: '',
      itemDescription: '',
      selectedCategory: '',
      itemPrice: '',
    }
  },
  computed: {
    ...mapState({
      categories: (state) => state.category.categories,
    }),
  },
  methods: {
    ...mapMutations('items', ['addItem']),
    closePopup() {
      this.$emit('close')
    },
    submitItem() {
      if (!this.selectedCategory) {
        alert('Please select a category!')
        return
      }

      const newItem = {
        id: crypto.randomUUID(),
        name: this.itemName,
        description: this.itemDescription,
        category: this.selectedCategory,
        price: parseFloat(this.itemPrice),
        image: 'placeholder.png',
      }

      console.log('Adding Item:', newItem)
      this.addItem(newItem)

      alert('Item added successfully!')
      this.closePopup()
    },
  },
}
</script>

<style scoped>
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

h2 {
  text-align: center;
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  display: block;
  margin-top: 10px;
}

input,
textarea,
select {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.img-placeholder {
  margin-top: 10px;
  height: 120px;
  border: 2px dashed #bbb;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 16px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: #3498db;
  color: #fff;
  font-weight: bold;
  transition: 0.3s;
}

button.cancel {
  background: #e74c3c;
}

button:hover {
  opacity: 0.85;
}
</style>
