<template>
  <header>
    <div>Common Header</div>
    <div class="links">
      <router-link to="/class/edit">미정</router-link>
      <router-link to="/classList">HOME</router-link>
      <router-link to="/class/edit">등록</router-link>
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
