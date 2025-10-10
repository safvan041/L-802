<template>
  <div id="app">
    <main>
      <router-view />
    </main>

    <footer class="app-footer">
      <p>© 2025 Item Lister Project</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    loggedInUser() {
      return this.$store?.state?.auth?.loggedInUser || null
    },
  },
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f7f9fc;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header */
.app-header {
  background-color: #3498db;
  color: white;
  padding: 15px 0;
  text-align: center;
  font-weight: 600;
  letter-spacing: 1px;
}

/* Main Page Area */
main {
  flex: 1;
  padding: 30px 20px;
}

/* Footer */
.app-footer {
  background-color: #2c3e50;
  color: #ecf0f1;
  text-align: center;
  padding: 10px;
  font-size: 14px;
}
</style>
