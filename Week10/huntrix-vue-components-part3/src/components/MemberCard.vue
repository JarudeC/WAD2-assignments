<script>
import WeatherInfo from './WeatherInfo.vue';

export default {
    props: ["name", "role", "img", "city"],
    components: {WeatherInfo}
}
</script>

<template>
  <div class="card">
    <img :src="img" :alt="name" class="thumb">
    <h3>{{ name }}</h3>
    <p>{{ role }}</p>
    <WeatherInfo :city="city" />

    <slot></slot>

    <div class="footer">
      <slot name="footer">
        <small class="muted">No badges yet</small>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 180px;
  padding: 8px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
.thumb {
  width: 100%;
  border-radius: 8px;
}
</style>