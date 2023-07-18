<template>
  <header>
    <div>Common Header</div>
    <div class="links">
      <router-link to="/ClassEdit">등록</router-link>
      <router-link to="/ClassEdit">등록</router-link>
      <router-link to="/classList">목록</router-link>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.links {
  display: flex;
}
.links a {
  flex: 1;
  font-size: 20px;
  text-align: center;
  line-height: 2;
}
</style>
