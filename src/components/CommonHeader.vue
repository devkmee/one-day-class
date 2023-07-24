<template>
  <header>
    <router-link to="/classList"
      ><div><img src="@/assets/images/logo.png" alt="logo.png" /></div
    ></router-link>
    <div class="links">
      <router-link to="/class/edit"></router-link>
      <router-link to="/classList"></router-link>
      <router-link to="/class/edit">클래스 등록</router-link>
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
