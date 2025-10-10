<template>
  <div class="signup-container">
    <h2>Create Account</h2>

    <form @submit.prevent="handleSignup">
      <input type="text" v-model="username" placeholder="Username" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <input type="password" v-model="confirmPassword" placeholder="Confirm Password" required />

      <button :disabled="!isFormValid" type="submit">Sign Up</button>
    </form>

    <p class="switch">
      Already have an account?
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  computed: {
    isFormValid() {
      return (
        this.username.trim() &&
        this.email.trim() &&
        this.password.trim() &&
        this.password === this.confirmPassword
      )
    },
  },
  methods: {
    ...mapMutations(['signup']),
    handleSignup() {
      const existingUsers = JSON.parse(localStorage.getItem('users')) || []
      const alreadyExists = existingUsers.some((u) => u.email === this.email)
      if (alreadyExists) {
        alert('Email already registered!')
        return
      }

      const newUser = {
        id: uuidv4(),
        username: this.username,
        email: this.email,
        password: this.password,
        token: uuidv4(),
      }

      this.signup(newUser)

      console.log('Signup successful. Token stored securely for:', newUser.email)

      this.$router.push('/login')
    },
  },
}
</script>

<style scoped>
.signup-container {
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
  background: #3498db;
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
