// store/auth.js
export default {
  state: {
    users: JSON.parse(localStorage.getItem('users')) || [],
    loggedInUser: JSON.parse(localStorage.getItem('loggedInUser')) || null,
  },
  mutations: {
    signup(state, user) {
      state.users.push(user);
      localStorage.setItem('users', JSON.stringify(state.users));
    },
    login(state, user) {
      state.loggedInUser = user;
      localStorage.setItem('loggedInUser', JSON.stringify(user));
    },
    logout(state) {
      state.loggedInUser = null;
      localStorage.removeItem('loggedInUser');
    }
  }
}
