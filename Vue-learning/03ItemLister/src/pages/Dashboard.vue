<template>
  <div class="dashboard">
    <AppHeader />

    <div class="actions">
      <button class="btn">Add Item</button>
      <button class="btn">List Items</button>
      <button class="btn">Categories (optional)</button>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/Header.vue'

export default {
  components: { AppHeader },
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
