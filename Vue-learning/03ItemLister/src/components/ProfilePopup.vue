<template>
  <div class="popup-overlay" @click.self="closePopup">
    <div class="popup-box">
      <!-- Profile Pic Placeholder -->
      <div class="profile-circle">
        <span>#</span>
      </div>

      <p class="email">{{ user.email }}</p>

      <label>Custom Display Name</label>
      <input type="text" v-model="customName" placeholder="Enter your display name" />

      <div class="buttons">
        <button @click="saveName">Save</button>
        <button class="cancel" @click="closePopup">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePopup',
  data() {
    return {
      customName: '',
    }
  },
  computed: {
    user() {
      return (
        JSON.parse(localStorage.getItem('loggedInUser')) || {
          email: 'unknown@example.com',
          username: 'User',
        }
      )
    },
  },
  mounted() {
    this.customName = this.user.customName || this.user.username
  },
  methods: {
    saveName() {
      let loggedUser = JSON.parse(localStorage.getItem('loggedInUser'))
      loggedUser.customName = this.customName
      localStorage.setItem('loggedInUser', JSON.stringify(loggedUser))

      let allUsers = JSON.parse(localStorage.getItem('users')) || []
      const index = allUsers.findIndex((u) => u.email === loggedUser.email)
      if (index !== -1) {
        allUsers[index].customName = this.customName
        localStorage.setItem('users', JSON.stringify(allUsers))
      }

      alert('Profile name updated!')
      this.closePopup()
    },
    closePopup() {
      this.$emit('close')
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
  width: 350px;
  background: #fff;
  border-radius: 10px;
  padding: 25px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
}

.profile-circle {
  width: 100px;
  height: 100px;
  border: 2px dashed #bbb;
  border-radius: 50%;
  margin: 0 auto 15px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: #888;
}

.email {
  font-size: 15px;
  color: #444;
  margin-bottom: 10px;
}

input {
  width: 90%;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  margin-top: 5px;
  margin-bottom: 15px;
}

.buttons {
  display: flex;
  justify-content: space-around;
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
  opacity: 0.9;
}
</style>
