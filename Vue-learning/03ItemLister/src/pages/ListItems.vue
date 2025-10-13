<template>
  <div class="list-items-page">
    <AppHeader />

    <!-- Top Controls -->
    <div class="controls">
      <input type="text" placeholder="Search items by name..." v-model="searchQuery" />

      <select v-model="selectedCategory">
        <option value="">All Categories</option>
        <option v-for="cat in categories" :key="cat.id" :value="cat.id">
          {{ cat.displayName }}
        </option>
      </select>

      <button class="add-btn" @click="showAddPopup = true">+ Add Item</button>
    </div>

    <!-- Items List -->
    <div v-if="filteredItems.length" class="item-list">
      <div class="item-card" v-for="item in filteredItems" :key="item.id">
        <div class="left">
          <div class="img-box">#</div>
          <div class="info">
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
            <p><strong>Category:</strong> {{ findCategoryName(item.category) }}</p>
            <p><strong>Price:</strong> ₹{{ item.price }}</p>
          </div>
        </div>
        <div class="right">
          <button class="edit" @click="editItem(item)">Edit</button>
          <button class="delete" @click="handleDelete(item.id)">Delete</button>
        </div>
      </div>
    </div>

    <p v-else class="empty">No items found. Try adding one!</p>

    <!-- Add/Edit Popup -->
    <!-- <AddItemPopup v-if="showAddPopup" @close="showAddPopup = false" /> -->
  </div>
</template>

<script>
import AppHeader from '../components/Header.vue'
import AddItemPopup from '../components/AddItemPopup.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'ListItemsPage',
  components: { AppHeader, AddItemPopup },
  data() {
    return {
      searchQuery: '',
      selectedCategory: '',
      showAddPopup: false,
    }
  },
  computed: {
    ...mapState({
      items: (state) => state.items.items,
      categories: (state) => state.category.categories,
    }),
    filteredItems() {
      let filtered = this.items

      // Search filter
      if (this.searchQuery.trim()) {
        filtered = filtered.filter((item) =>
          item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      }

      // Category filter
      if (this.selectedCategory) {
        filtered = filtered.filter((item) => item.category === this.selectedCategory)
      }

      return filtered
    },
  },
  methods: {
    ...mapMutations('items', ['deleteItem']),
    findCategoryName(catId) {
      const cat = this.categories.find((c) => c.id === catId)
      return cat ? cat.displayName : 'Unknown'
    },
    handleDelete(itemId) {
      if (confirm('Are you sure you want to delete this item?')) {
        this.deleteItem(itemId)
      }
    },
    editItem(item) {
      alert(`Edit feature coming soon for ${item.name}!`)
    },
  },
}
</script>

<style scoped>
.list-items-page {
  padding: 20px;
}

/* Top Controls */
.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 25px;
}

input[type='text'] {
  width: 250px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

select {
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: white;
}

.add-btn {
  background: #27ae60;
  color: white;
  font-weight: 600;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
}
.add-btn:hover {
  background: #2ecc71;
}

/* Items List */
.item-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.item-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fdfdfd;
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 12px 18px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
}

.left {
  display: flex;
  gap: 15px;
  align-items: center;
}

.img-box {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background: #f4f4f4;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #aaa;
}

.info h3 {
  margin: 0;
}

.right {
  display: flex;
  gap: 10px;
}

button.edit {
  background: #3498db;
  color: #fff;
}

button.delete {
  background: #e74c3c;
  color: #fff;
}

button:hover {
  opacity: 0.9;
}

.empty {
  text-align: center;
  margin-top: 40px;
  color: #777;
  font-style: italic;
}
</style>
