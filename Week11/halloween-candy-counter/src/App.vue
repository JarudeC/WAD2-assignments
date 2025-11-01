<script setup>
// no state logic here – pages will render inside <RouterView/>
</script>

<template>
  <header class="nav">
    <h2>🎃 Candy Counter</h2>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
.nav {
  text-align: center;
  padding: 16px;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
}
nav {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 6px;
}
a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
