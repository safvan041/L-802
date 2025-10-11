<template>
  <div class="dashboard">
    <AppHeader />

    <div class="actions">
      <button class="btn" @click="showAddItem = true">Add Item</button>
      <button class="btn" @click="$router.push('/items')">List Items</button>
      <button class="btn" @click="$router.push('/categories')">Categories (optional)</button>
    </div>
    <AddItemPopup v-if="showAddItem" @close="showAddItem = false" />
  </div>
</template>

<script>
import AppHeader from '../components/Header.vue'
import AddItemPopup from '../components/AddItemPopup.vue'

export default {
  components: { AppHeader, AddItemPopup },
  data() {
    return {
      showAddItem: false,
    }
  },
}
</script>

<style scoped>
.dashboard {
  padding: 20px;
  text-align: center;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 60px;
}

.btn {
  background: #f4f4f4;
  border: 2px solid #bbb;
  border-radius: 15px;
  padding: 20px 30px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
}

.btn:hover {
  background: #eaeaea;
}
</style>
