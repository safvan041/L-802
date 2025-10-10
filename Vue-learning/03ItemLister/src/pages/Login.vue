<template>
  <div class="login-container">
    <h2>Login</h2>

    <form @submit.prevent="handleLogin">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />

      <button :disabled="!isFormValid" type="submit">Login</button>
    </form>

    <p class="switch">
      Don’t have an account?
      <router-link to="/signup">Sign up</router-link>
    </p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    isFormValid() {
      return this.email.trim() && this.password.trim()
    },
  },
  methods: {
    ...mapMutations(['login']),
    handleLogin() {
      const users = JSON.parse(localStorage.getItem('users')) || []
      const user = users.find((u) => u.email === this.email && u.password === this.password)

      if (!user) {
        alert('Invalid email or password!')
        return
      }
      if (!user.token) {
        alert('User token missing or invalid!')
        return
      }

      this.login(user)
      alert(`Welcome ${user.username}! Token Verified ✅`)
      this.$router.push('/dashboard')
    },
  },
}
</script>

<style scoped>
.login-container {
  width: 320px;
  margin: 100px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}
input {
  display: block;
  width: 100%;
  margin: 8px 0;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
button {
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 6px;
  background: #2ecc71;
  color: white;
  cursor: pointer;
  font-weight: bold;
}
button:disabled {
  background: #ccc;
}
.switch {
  margin-top: 15px;
  text-align: center;
}
</style>
