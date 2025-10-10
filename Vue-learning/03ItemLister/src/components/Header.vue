<template>
  <header class="app-header">
    <div class="left-section">
      <h2>Welcome {{ userName }}</h2>
    </div>

    <div class="right-section">
      <button class="logout-btn" @click="logoutUser">Logout</button>
      <div class="profile-circle" @click="openProfile"></div>
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'AppHeader',
  computed: {
    userName() {
      const user = JSON.parse(localStorage.getItem('loggedInUser')) || {}
      return user.username || 'User'
    },
  },
  methods: {
    ...mapMutations(['logout']),
    logoutUser() {
      this.logout()
      this.$router.push('/login')
    },
    openProfile() {
      alert('Profile popup coming soon!')
    },
  },
}
</script>

<style scoped>
.app-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fdfdfd;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 12px 20px;
  box-sizing: border-box;
  margin-bottom: 30px;
}

/* Left side text */
.left-section h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #2c3e50;
}

/* Right side layout */
.right-section {
  display: flex;
  align-items: center;
  gap: 15px;
}

/* Logout button */
.logout-btn {
  background: #e74c3c;
  border: none;
  color: #fff;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.logout-btn:hover {
  background: #c0392b;
}

/* Circle placeholder for profile */
.profile-circle {
  width: 40px;
  height: 40px;
  border: 2px solid #555;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
}

.profile-circle:hover {
  background-color: #eee;
}
</style>
